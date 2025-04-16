'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import CircularProgress from '@mui/material/CircularProgress';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import SaveIcon from '@mui/icons-material/Save';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function SettingsPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'warning' | 'info',
  });
  
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    name: '',
  });
  
  const [appPreferences, setAppPreferences] = useState({
    theme: 'light',
    currency: 'USD',
    dateFormat: 'MM/DD/YYYY',
    notifications: true,
  });
  
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (session?.user) {
      // Load user profile data
      setProfileData({
        username: session.user.username || '',
        email: session.user.email || '',
        name: session.user.name || '',
      });
      
      // Here you would typically load app preferences from an API
      // For now we're using default values
    }
  }, [session]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handlePreferencesChange = (name: string, value: any) => {
    setAppPreferences({
      ...appPreferences,
      [name]: value,
    });
  };

  const handleSecurityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSecurityData({
      ...securityData,
      [name]: value,
    });
  };

  const saveProfile = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send data to an API
      // const response = await fetch('/api/user/profile', {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(profileData),
      // });
      
      setSnackbar({
        open: true,
        message: 'Profile updated successfully!',
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to update profile',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const savePreferences = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSnackbar({
        open: true,
        message: 'Preferences saved successfully!',
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to save preferences',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async () => {
    setLoading(true);
    
    if (securityData.newPassword !== securityData.confirmPassword) {
      setSnackbar({
        open: true,
        message: 'New passwords do not match',
        severity: 'error',
      });
      setLoading(false);
      return;
    }
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSnackbar({
        open: true,
        message: 'Password changed successfully!',
        severity: 'success',
      });
      
      // Clear password fields
      setSecurityData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to change password',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const closeSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  if (!session) {
    return (
      <DashboardLayout>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" mb={3}>Settings</Typography>
        
        <Paper>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange}
              aria-label="settings tabs"
            >
              <Tab 
                label="Profile" 
                icon={<PersonIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Preferences" 
                icon={<SettingsIcon />} 
                iconPosition="start"
              />
              <Tab 
                label="Security" 
                icon={<SecurityIcon />} 
                iconPosition="start"
              />
            </Tabs>
          </Box>
          
          <TabPanel value={activeTab} index={0}>
            <Typography variant="h6" gutterBottom>User Profile</Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Manage your personal information
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="username"
                  label="Username"
                  value={profileData.username}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  label="Full Name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={saveProfile}
                  startIcon={<SaveIcon />}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Save Profile'}
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          
          <TabPanel value={activeTab} index={1}>
            <Typography variant="h6" gutterBottom>App Preferences</Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Customize your CoinKeeper experience
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="theme-select-label">Theme</InputLabel>
                  <Select
                    labelId="theme-select-label"
                    value={appPreferences.theme}
                    onChange={(e) => handlePreferencesChange('theme', e.target.value)}
                    label="Theme"
                  >
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                    <MenuItem value="system">System Default</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="currency-select-label">Default Currency</InputLabel>
                  <Select
                    labelId="currency-select-label"
                    value={appPreferences.currency}
                    onChange={(e) => handlePreferencesChange('currency', e.target.value)}
                    label="Default Currency"
                  >
                    <MenuItem value="USD">US Dollar ($)</MenuItem>
                    <MenuItem value="EUR">Euro (€)</MenuItem>
                    <MenuItem value="GBP">British Pound (£)</MenuItem>
                    <MenuItem value="JPY">Japanese Yen (¥)</MenuItem>
                    <MenuItem value="CAD">Canadian Dollar (C$)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="date-format-label">Date Format</InputLabel>
                  <Select
                    labelId="date-format-label"
                    value={appPreferences.dateFormat}
                    onChange={(e) => handlePreferencesChange('dateFormat', e.target.value)}
                    label="Date Format"
                  >
                    <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                    <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                    <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={appPreferences.notifications}
                      onChange={(e) => handlePreferencesChange('notifications', e.target.checked)}
                      name="notifications"
                    />
                  }
                  label="Enable Notifications"
                  sx={{ mt: 3 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={savePreferences}
                  startIcon={<SaveIcon />}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Save Preferences'}
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          
          <TabPanel value={activeTab} index={2}>
            <Typography variant="h6" gutterBottom>Security</Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Manage your password and security settings
            </Typography>
            
            <Box mb={4}>
              <Typography variant="subtitle1" gutterBottom fontWeight="medium">
                Change Password
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name="currentPassword"
                    label="Current Password"
                    value={securityData.currentPassword}
                    onChange={handleSecurityChange}
                    fullWidth
                    margin="normal"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="newPassword"
                    label="New Password"
                    value={securityData.newPassword}
                    onChange={handleSecurityChange}
                    fullWidth
                    margin="normal"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="confirmPassword"
                    label="Confirm New Password"
                    value={securityData.confirmPassword}
                    onChange={handleSecurityChange}
                    fullWidth
                    margin="normal"
                    type="password"
                    error={securityData.newPassword !== securityData.confirmPassword && securityData.confirmPassword !== ''}
                    helperText={securityData.newPassword !== securityData.confirmPassword && securityData.confirmPassword !== '' ? "Passwords don't match" : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={changePassword}
                    disabled={loading || !securityData.currentPassword || !securityData.newPassword || securityData.newPassword !== securityData.confirmPassword}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Change Password'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
            
            <Divider sx={{ my: 4 }} />
            
            <Box>
              <Typography variant="subtitle1" gutterBottom color="error" fontWeight="medium">
                Danger Zone
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                These actions are irreversible
              </Typography>
              
              <Button 
                variant="outlined" 
                color="error"
                onClick={() => {
                  setSnackbar({
                    open: true,
                    message: 'This feature is not implemented yet',
                    severity: 'info',
                  });
                }}
              >
                Delete Account
              </Button>
            </Box>
          </TabPanel>
        </Paper>
      </Box>
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={closeSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </DashboardLayout>
  );
} 