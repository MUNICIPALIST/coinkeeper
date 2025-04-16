'use client';

import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, useEffect, useState, useContext } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create the context with a default value
const defaultThemeContext: ThemeContextProps = {
  theme: 'system',
  setTheme: () => console.warn('Theme context not initialized')
};

const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

// Exports the context for direct use if needed
export { ThemeContext };

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Initial setup effect - runs only once
  useEffect(() => {
    // Set mounted to true when component mounts
    setMounted(true);
    
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to system preference
      setTheme('system');
      applyTheme('system');
    }

    // Add an event listener for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []); // Empty dependency array so this only runs once

  // Effect to apply theme changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const applyTheme = (selectedTheme: Theme) => {
    if (typeof document === 'undefined') return; // Skip during SSR
    
    const root = document.documentElement;
    
    // Clear all theme classes first
    root.classList.remove('light-theme', 'dark-theme', 'system-theme');
    
    // Clear data attributes
    root.removeAttribute('data-theme');
    document.body.removeAttribute('data-theme');
    
    let newMode: 'light' | 'dark' = 'light';
    
    if (selectedTheme === 'dark') {
      // Apply dark theme
      root.classList.add('dark-theme');
      newMode = 'dark';
      root.setAttribute('data-theme', 'dark');
      document.body.setAttribute('data-theme', 'dark');
    } else if (selectedTheme === 'light') {
      // Apply light theme
      root.classList.add('light-theme');
      newMode = 'light';
      root.setAttribute('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    } else if (selectedTheme === 'system') {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark-theme');
        newMode = 'dark';
        root.setAttribute('data-theme', 'dark');
        document.body.setAttribute('data-theme', 'dark');
      } else {
        root.classList.add('light-theme');
        newMode = 'light';
        root.setAttribute('data-theme', 'light');
        document.body.setAttribute('data-theme', 'light');
      }
      root.classList.add('system-theme');
    }
    
    setMode(newMode);
  };

  const setThemeValue = (newTheme: Theme) => {
    console.log('Setting theme to:', newTheme);
    
    // First update localStorage
    localStorage.setItem('theme', newTheme);
    
    // Then update the state
    setTheme(newTheme);
    
    // Apply the theme immediately
    setTimeout(() => {
      applyTheme(newTheme);
    }, 0);
  };

  // Create MUI Light theme
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1976d2',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f50057',
        light: '#ff4081',
        dark: '#c51162',
        contrastText: '#ffffff',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#333333',
        secondary: '#757575',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            '&:hover': {
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '8px',
            fontWeight: 500,
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.2)',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#e0e0e0',
              },
              '&:hover fieldset': {
                borderColor: '#2196f3',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2196f3',
              },
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#ffffff',
            borderRight: '1px solid #e0e0e0',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              '&:hover': {
                backgroundColor: '#e3f2fd',
              },
            },
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          },
        },
      },
    },
  });

  // Create MUI Dark theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
        light: '#bbdefb',
        dark: '#64b5f6',
        contrastText: '#000000',
      },
      secondary: {
        main: '#f48fb1',
        light: '#f8bbd0',
        dark: '#f06292',
        contrastText: '#000000',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
        secondary: '#b0b0b0',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: '#1e1e1e',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '8px',
            fontWeight: 500,
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(144, 202, 249, 0.3)',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#424242',
              },
              '&:hover fieldset': {
                borderColor: '#90caf9',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#90caf9',
              },
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#1e1e1e',
            borderRight: '1px solid #333333',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              backgroundColor: 'rgba(144, 202, 249, 0.16)',
              color: '#90caf9',
              '&:hover': {
                backgroundColor: 'rgba(144, 202, 249, 0.16)',
              },
            },
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
          },
        },
      },
    },
  });

  // Prevent flash of unstyled content
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeValue }}>
      <MUIThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

// Custom hook for using the theme context
export function useTheme() {
  return useContext(ThemeContext);
} 