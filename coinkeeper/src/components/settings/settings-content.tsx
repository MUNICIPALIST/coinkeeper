'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useTheme } from '@/providers/theme-provider';
import { useLanguage } from '@/providers/language-provider';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  MenuItem,
  Switch,
  Alert,
  Grid,
  CircularProgress,
  Snackbar,
  Stack,
} from '@mui/material';
import {
  Lock as LockIcon,
  Palette as PaletteIcon,
  AttachMoney as MoneyIcon,
  Language as LanguageIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  currency: string;
  language: string;
  dateFormat: string;
  notifications: boolean;
}

const currencies = [
  { value: 'USD', label: 'US Dollar ($)' },
  { value: 'EUR', label: 'Euro (€)' },
  { value: 'GBP', label: 'British Pound (£)' },
  { value: 'JPY', label: 'Japanese Yen (¥)' },
  { value: 'KZT', label: 'Kazakh Tenge (₸)' },
  { value: 'RUB', label: 'Russian Ruble (₽)' },
];

const languages = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' },
  { value: 'kk', label: 'Kazakh' },
];

const dateFormats = [
  { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
  { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
  { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
];

export default function SettingsContent() {
  const { data: session } = useSession();
  const { theme: currentTheme, setTheme } = useTheme();
  const { language: currentLanguage, setLanguage, t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [passwordFormData, setPasswordFormData] = useState<PasswordFormData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [settings, setSettings] = useState<UserSettings>({
    theme: currentTheme || 'light',
    currency: 'USD',
    language: currentLanguage || 'en',
    dateFormat: 'MM/DD/YYYY',
    notifications: true,
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [settingsSuccess, setSettingsSuccess] = useState(false);

  useEffect(() => {
    // Fetch user settings from API
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/settings');
        
        if (response.ok) {
          const data = await response.json();
          setSettings(data);
        } else {
          // If no settings are found, use default values
          setSettings({
            theme: currentTheme || 'light',
            currency: 'USD',
            language: currentLanguage || 'en',
            dateFormat: 'MM/DD/YYYY',
            notifications: true,
          });
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [session, currentTheme, currentLanguage]);

  // Always keep the UI state in sync with the theme context
  useEffect(() => {
    if (currentTheme && settings.theme !== currentTheme) {
      console.log('Syncing UI radio buttons with current theme:', currentTheme);
      setSettings(prevSettings => ({
        ...prevSettings,
        theme: currentTheme
      }));
    }
  }, [currentTheme, settings.theme]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordFormData({
      ...passwordFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const updatedSettings = {
      ...settings,
      [name]: name === 'notifications' ? checked : value,
    };
    
    setSettings(updatedSettings);

    // If theme is changed, update the theme context immediately
    if (name === 'theme' && (value === 'light' || value === 'dark' || value === 'system')) {
      console.log('Changing theme to:', value);
      
      // Make sure the theme context is updated
      setTheme(value as 'light' | 'dark' | 'system');
      
      // Force a refresh of radio button state
      setTimeout(() => {
        setSettings(prev => ({
          ...prev,
          theme: value as 'light' | 'dark' | 'system'
        }));
      }, 10);
      
      // Also update the settings in the database immediately for theme changes
      updateSettingInDatabase(updatedSettings);
    }

    // If language is changed, update the language context and database immediately
    if (name === 'language' && (value === 'en' || value === 'ru' || value === 'kk')) {
      setLanguage(value);
      updateSettingInDatabase(updatedSettings);
    }
  };

  // Helper function to update a single setting in the database
  const updateSettingInDatabase = async (updatedSettings: UserSettings) => {
    try {
      console.log('Updating settings in database:', updatedSettings);
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSettings),
      });
      
      if (response.ok) {
        console.log('Settings updated successfully in database');
      } else {
        console.error('Failed to update settings in database');
      }
    } catch (error) {
      console.error('Error updating setting:', error);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess(false);

    if (passwordFormData.newPassword !== passwordFormData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    if (passwordFormData.newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    try {
      const response = await fetch('/api/settings/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: passwordFormData.currentPassword,
          newPassword: passwordFormData.newPassword,
        }),
      });

      if (response.ok) {
        setPasswordSuccess(true);
        setPasswordFormData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        const data = await response.json();
        setPasswordError(data.error || 'Failed to update password');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setPasswordError('An error occurred while updating your password');
    }
  };

  const handleSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setSettingsSuccess(true);
      }
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {t('settings.title')}
      </Typography>

      {/* Appearance Settings */}
      <Paper className="settings-section" elevation={3} sx={{ mb: 4 }}>
        <Box className="settings-section-header">
          <PaletteIcon />
          <Typography variant="h6">
            {t('settings.appearance.title')}
          </Typography>
        </Box>
        <Box className="settings-section-content">
          <FormControl component="fieldset">
            <FormLabel component="legend">{t('settings.appearance.theme')}</FormLabel>
            <RadioGroup
              name="theme"
              value={settings.theme}
              onChange={handleSettingsChange}
              row
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label={t('settings.appearance.light')}
              />
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label={t('settings.appearance.dark')}
              />
              <FormControlLabel
                value="system"
                control={<Radio />}
                label={t('settings.appearance.system')}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Paper>

      {/* Currency Settings */}
      <Paper className="settings-section" elevation={3} sx={{ mb: 4 }}>
        <Box className="settings-section-header">
          <MoneyIcon />
          <Typography variant="h6">
            {t('settings.currency.title')}
          </Typography>
        </Box>
        <Box className="settings-section-content">
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <TextField
              select
              name="currency"
              label={t('settings.currency.default')}
              value={settings.currency}
              onChange={handleSettingsChange}
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>
      </Paper>

      {/* Language and Format Settings */}
      <Paper className="settings-section" elevation={3} sx={{ mb: 4 }}>
        <Box className="settings-section-header">
          <LanguageIcon />
          <Typography variant="h6">
            {t('settings.language.title')}
          </Typography>
        </Box>
        <Box className="settings-section-content">
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            <TextField
              select
              name="language"
              label={t('settings.language.select')}
              value={settings.language}
              onChange={handleSettingsChange}
              variant="outlined"
            >
              {languages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <TextField
              select
              name="dateFormat"
              label={t('settings.language.dateFormat')}
              value={settings.dateFormat}
              onChange={handleSettingsChange}
              variant="outlined"
            >
              {dateFormats.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Box>
      </Paper>

      {/* Notifications Settings */}
      <Paper className="settings-section" elevation={3} sx={{ mb: 4 }}>
        <Box className="settings-section-header">
          <NotificationsIcon />
          <Typography variant="h6">
            {t('settings.notifications.title')}
          </Typography>
        </Box>
        <Box className="settings-section-content">
          <FormControlLabel
            control={
              <Switch
                checked={settings.notifications}
                onChange={handleSettingsChange}
                name="notifications"
                color="primary"
              />
            }
            label={t('settings.notifications.enable')}
          />
        </Box>
      </Paper>

      {/* Security Settings */}
      <Paper className="settings-section" elevation={3} sx={{ mb: 4 }}>
        <Box className="settings-section-header">
          <LockIcon />
          <Typography variant="h6">
            {t('settings.security.title')}
          </Typography>
        </Box>
        <Box className="settings-section-content" component="form" onSubmit={handlePasswordSubmit}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {t('settings.security.passwordDesc')}
          </Typography>
          
          {passwordError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {passwordError}
            </Alert>
          )}
          
          {passwordSuccess && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {t('settings.security.passwordSuccess')}
            </Alert>
          )}
          
          <TextField
            fullWidth
            margin="normal"
            name="currentPassword"
            label={t('settings.security.currentPassword')}
            type="password"
            value={passwordFormData.currentPassword}
            onChange={handlePasswordChange}
            required
          />
          
          <TextField
            fullWidth
            margin="normal"
            name="newPassword"
            label={t('settings.security.newPassword')}
            type="password"
            value={passwordFormData.newPassword}
            onChange={handlePasswordChange}
            required
          />
          
          <TextField
            fullWidth
            margin="normal"
            name="confirmPassword"
            label={t('settings.security.confirmPassword')}
            type="password"
            value={passwordFormData.confirmPassword}
            onChange={handlePasswordChange}
            required
            sx={{ mb: 2 }}
          />
          
          <Button type="submit" variant="contained" color="primary">
            {t('settings.security.changePassword')}
          </Button>
        </Box>
      </Paper>

      {/* Save Settings Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          type="submit"
          onClick={handleSettingsSubmit}
          sx={{ minWidth: 200 }}
        >
          {t('settings.saveButton')}
        </Button>
      </Box>

      <Snackbar 
        open={settingsSuccess} 
        autoHideDuration={6000} 
        onClose={() => setSettingsSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setSettingsSuccess(false)} severity="success" sx={{ width: '100%' }}>
          {t('settings.saveSuccess')}
        </Alert>
      </Snackbar>
    </Box>
  );
} 