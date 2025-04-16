'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Paper,
  Divider,
  Button,
  Stack,
  Switch,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { useTheme } from '@/providers/theme-provider';
import { useLanguage } from '@/providers/language-provider';
import {
  Palette as PaletteIcon,
  AttachMoney as AttachMoneyIcon,
  Language as LanguageIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material';

// Define Language type to match the provider
type Language = 'en' | 'ru' | 'kk';

// Interface for settings
interface Settings {
  theme: 'light' | 'dark' | 'system';
  currency: string;
  language: Language;
  dateFormat: string;
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();

  const [settings, setSettings] = useState<Settings>({
    theme: 'system',
    currency: 'USD',
    language: 'en',
    dateFormat: 'MM/DD/YYYY',
  });

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings({
          ...settings,
          ...parsedSettings,
          theme: theme, // Always use the current theme from provider
        });
      } catch (e) {
        console.error('Error parsing settings:', e);
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
    
    // Apply theme to document
    setTheme(settings.theme);
    
    // Apply language - now with proper typing
    if (settings.language !== language) {
      setLanguage(settings.language as Language);
    }
  }, [settings]);

  // Handle theme change
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.value as 'light' | 'dark' | 'system';
    setSettings({
      ...settings,
      theme: newTheme,
    });
  };

  // Handle currency change
  const handleCurrencyChange = (event: SelectChangeEvent) => {
    setSettings({
      ...settings,
      currency: event.target.value,
    });
  };

  // Handle language change
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSettings({
      ...settings,
      language: event.target.value as Language,
    });
  };

  // Handle date format change
  const handleDateFormatChange = (event: SelectChangeEvent) => {
    setSettings({
      ...settings,
      dateFormat: event.target.value,
    });
  };

  // Get theme icon based on current theme
  const getThemeIcon = (themeValue: string) => {
    switch (themeValue) {
      case 'dark':
        return <DarkModeIcon />;
      case 'light':
        return <LightModeIcon />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('settings')}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        {t('settingsDescription')}
      </Typography>

      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mb: 4,
          borderRadius: '12px',
          border: '1px solid',
          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <PaletteIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" gutterBottom>
            {t('appearance')}
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        
        <FormControl component="fieldset" sx={{ width: '100%' }}>
          <FormLabel component="legend">{t('theme')}</FormLabel>
          <RadioGroup
            row
            value={settings.theme}
            onChange={handleThemeChange}
            name="theme-group"
          >
            <FormControlLabel 
              value="light" 
              control={<Radio sx={{ color: theme === 'dark' ? '#90caf9' : '#2196f3' }} />} 
              label={
                <Box display="flex" alignItems="center">
                  <LightModeIcon sx={{ mr: 0.5, fontSize: '1.2rem' }} />
                  <Typography>{t('light')}</Typography>
                </Box>
              }
            />
            <FormControlLabel 
              value="dark" 
              control={<Radio sx={{ color: theme === 'dark' ? '#90caf9' : '#2196f3' }} />} 
              label={
                <Box display="flex" alignItems="center">
                  <DarkModeIcon sx={{ mr: 0.5, fontSize: '1.2rem' }} />
                  <Typography>{t('dark')}</Typography>
                </Box>
              }
            />
            <FormControlLabel 
              value="system" 
              control={<Radio sx={{ color: theme === 'dark' ? '#90caf9' : '#2196f3' }} />} 
              label={t('system')} 
            />
          </RadioGroup>
        </FormControl>
      </Paper>

      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mb: 4,
          borderRadius: '12px',
          border: '1px solid',
          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <AttachMoneyIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" gutterBottom>
            {t('currency')}
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="currency-label">{t('defaultCurrency')}</InputLabel>
          <Select
            labelId="currency-label"
            id="currency-select"
            value={settings.currency}
            label={t('defaultCurrency')}
            onChange={handleCurrencyChange}
            sx={{ 
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme === 'dark' ? '#90caf9' : '#2196f3',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme === 'dark' ? '#90caf9' : '#2196f3',
              }
            }}
          >
            <MenuItem value="USD">USD - {t('usDollar')}</MenuItem>
            <MenuItem value="EUR">EUR - {t('euro')}</MenuItem>
            <MenuItem value="GBP">GBP - {t('britishPound')}</MenuItem>
            <MenuItem value="JPY">JPY - {t('japaneseYen')}</MenuItem>
            <MenuItem value="RUB">RUB - {t('russianRuble')}</MenuItem>
            <MenuItem value="KZT">KZT - {t('kazakhstaniTenge')}</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      <Paper 
        elevation={0} 
        sx={{ 
          p: 3,
          borderRadius: '12px',
          border: '1px solid',
          borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <LanguageIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" gutterBottom>
            {t('languageAndFormat')}
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        
        <Stack spacing={3}>
          <FormControl fullWidth>
            <InputLabel id="language-label">{t('appLanguage')}</InputLabel>
            <Select
              labelId="language-label"
              id="language-select"
              value={settings.language}
              label={t('appLanguage')}
              onChange={handleLanguageChange}
              sx={{ 
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme === 'dark' ? '#90caf9' : '#2196f3',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme === 'dark' ? '#90caf9' : '#2196f3',
                }
              }}
            >
              <MenuItem value="en">{t('english')}</MenuItem>
              <MenuItem value="ru">{t('russian')}</MenuItem>
              <MenuItem value="kk">{t('kazakh')}</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl fullWidth>
            <InputLabel id="date-format-label">{t('dateFormat')}</InputLabel>
            <Select
              labelId="date-format-label"
              id="date-format-select"
              value={settings.dateFormat}
              label={t('dateFormat')}
              onChange={handleDateFormatChange}
              sx={{ 
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme === 'dark' ? '#90caf9' : '#2196f3',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme === 'dark' ? '#90caf9' : '#2196f3',
                }
              }}
            >
              <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
              <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
              <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Paper>
    </Container>
  );
} 