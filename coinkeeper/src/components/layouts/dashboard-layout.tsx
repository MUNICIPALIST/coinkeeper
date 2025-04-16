'use client';

import { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CategoryIcon from '@mui/icons-material/Category';
import SavingsIcon from '@mui/icons-material/Savings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/providers/language-provider';
import { signOut } from 'next-auth/react';

const drawerWidth = 240;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  const menuItems = [
    { key: 'dashboard.title', icon: <DashboardIcon />, path: '/dashboard' },
    { key: 'accounts.title', icon: <AccountBalanceIcon />, path: '/accounts' },
    { key: 'transactions.title', icon: <ReceiptIcon />, path: '/transactions' },
    { key: 'categories.title', icon: <CategoryIcon />, path: '/categories' },
    { key: 'budgets.title', icon: <SavingsIcon />, path: '/budgets' },
    { key: 'reports.financial_reports', icon: <AssessmentIcon />, path: '/reports' },
    { key: 'settings.title', icon: <SettingsIcon />, path: '/settings' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push('/auth/signin');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const drawer = (
    <div className="sidebar">
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          CoinKeeper
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ padding: '8px 0' }}>
        {menuItems.map((item) => (
          <ListItem key={item.key} disablePadding sx={{ display: 'block', margin: '4px 0' }}>
            <ListItemButton
              component={Link}
              href={item.path}
              className={pathname === item.path ? 'active' : ''}
              disableRipple
              sx={{
                borderRadius: '8px',
                margin: '0 8px',
                padding: '8px 16px',
                minHeight: '48px',
                '&:hover': {
                  background: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(0, 0, 0, 0.04)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.2s ease',
                },
                '&.active': {
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(100, 100, 100, 0.2)'
                    : 'rgba(100, 100, 100, 0.1)',
                  color: theme.palette.mode === 'dark' ? '#fff' : '#555',
                },
                overflow: 'hidden',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              }}
            >
              <ListItemIcon sx={{ 
                color: theme.palette.mode === 'dark' ? '#aaa' : '#555',
                minWidth: '40px'
              }}>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.key)} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ display: 'block', margin: '4px 0' }}>
          <ListItemButton
            onClick={handleLogout}
            disableRipple
            sx={{
              borderRadius: '8px',
              margin: '0 8px',
              padding: '8px 16px',
              minHeight: '48px',
              '&:hover': {
                background: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.04)',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease',
              },
              overflow: 'hidden',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              cursor: 'pointer',
            }}
          >
            <ListItemIcon sx={{ 
              color: theme.palette.mode === 'dark' ? '#ff5252' : '#d32f2f',
              minWidth: '40px'
            }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={t('logout')} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }} className="dashboard-layout">
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            CoinKeeper
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              borderRight: '1px solid',
              borderColor: theme.palette.mode === 'dark' ? 'rgba(50, 50, 50, 1)' : 'rgba(230, 230, 230, 1)',
              background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f8f9fa',
              overflow: 'hidden'
            }
          }}
        >
          {drawer}
        </Drawer>
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              borderRight: '1px solid',
              borderColor: theme.palette.mode === 'dark' ? 'rgba(50, 50, 50, 1)' : 'rgba(230, 230, 230, 1)',
              background: theme.palette.mode === 'dark' ? '#1e1e1e' : '#f8f9fa',
              overflow: 'hidden'
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: '64px',
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f5f7fa',
        }}
        className="main-content"
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '1080px',
            margin: '0 auto',
            paddingLeft: { xs: 0, sm: '24px' },
            paddingRight: { xs: 0, sm: '24px' },
          }}
          className="content-wrapper"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
} 