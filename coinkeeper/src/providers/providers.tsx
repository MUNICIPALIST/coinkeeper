'use client';

import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from './auth-provider';
import { ThemeProvider } from './theme-provider';
import { LanguageProvider } from './language-provider';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from '@/components/common/error-boundary';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<Error | null>(null);

  // Add a useEffect to log when providers are mounted - helps with debugging
  useEffect(() => {
    console.log('Providers mounted');
    
    // Force a refresh of the styles on client side
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      console.log('Initializing theme from localStorage:', currentTheme);
    }

    // Check authentication status on mount
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/session');
        const session = await response.json();
        console.log('Initial auth check:', session);
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
    };

    checkAuth();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
        <p className="mb-4">{error.message}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reload Application
        </button>
      </div>
    );
  }

  const handleError = (error: Error) => {
    console.error("Provider error caught:", error);
    setError(error);
  };

  return (
    <ErrorBoundary onError={handleError}>
      <SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus={true}>
        <ErrorBoundary onError={handleError}>
          <AuthProvider>
            <ErrorBoundary onError={handleError}>
              <ThemeProvider>
                <ErrorBoundary onError={handleError}>
                  <LanguageProvider>
                    {children}
                  </LanguageProvider>
                </ErrorBoundary>
              </ThemeProvider>
            </ErrorBoundary>
          </AuthProvider>
        </ErrorBoundary>
      </SessionProvider>
    </ErrorBoundary>
  );
} 