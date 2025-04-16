'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import DashboardLayout from './dashboard-layout';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Handle client-side initialization
  useEffect(() => {
    try {
      // Set mounted state to trigger client-side rendering
      setMounted(true);
      
      // Apply any saved theme from localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.documentElement.classList.add(`${savedTheme}-theme`);
      } else {
        // Apply system preference if no saved theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', defaultTheme);
        document.documentElement.classList.add(`${defaultTheme}-theme`);
      }
      
      console.log('Client layout initialized');
    } catch (error) {
      console.error('Error initializing client layout:', error);
    } finally {
      // Mark as loaded even if there was an error
      setIsLoading(false);
    }
  }, []);

  // Show loading state to prevent flash of unstyled content
  if (!mounted || isLoading) {
    return (
      <div className="layout-loading w-full h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="text-xl font-semibold">Loading CoinKeeper...</div>
          <div className="mt-2 text-sm text-gray-500">Please wait while we set up your experience</div>
        </div>
      </div>
    );
  }

  // Use DashboardLayout for all routes except auth routes
  if (!pathname.startsWith('/auth')) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return <>{children}</>;
} 