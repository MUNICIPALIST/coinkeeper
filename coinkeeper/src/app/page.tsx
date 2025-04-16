// @ts-nocheck
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {
  AccountBalance as AccountBalanceIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Category as CategoryIcon,
} from '@mui/icons-material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Add a special comment to suppress TypeScript errors
// @ts-nocheck

ChartJS.register(ArcElement, Tooltip, Legend);

interface DashboardStats {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
  recentTransactions: any[];
  expensesByCategory: {
    labels: string[];
    data: number[];
    backgroundColor: string[];
  };
}

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Debug information
  useEffect(() => {
    console.log('Home page rendered, session status:', status);
    console.log('Session data:', session);
  }, [status, session]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      console.log('User is not authenticated, redirecting to sign-in page');
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        console.log('Fetching dashboard stats...');
        const response = await fetch('/api/dashboard/stats');
        const data = await response.json();
        console.log('Dashboard stats received:', data);
        setStats(data);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user) {
      fetchDashboardStats();
    } else if (status !== 'loading') {
      setLoading(false);
    }
  }, [session, status]);

  // Show loading state while checking authentication
  if (status === 'loading' || loading) {
    return (
      <DashboardLayout>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
          <CircularProgress />
          <Typography variant="h6" sx={{ ml: 2 }}>
            Loading CoinKeeper...
          </Typography>
        </Box>
      </DashboardLayout>
    );
  }

  // If not authenticated and not loading, ensure redirect
  if (status === 'unauthenticated') {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Redirecting to login...
        </Typography>
      </Box>
    );
  }

  // Authenticated and loaded - show dashboard
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }} className="dashboard-content">
        <Typography variant="h4" gutterBottom>
          Welcome, {session?.user?.username || 'User'}!
        </Typography>

        <Grid container spacing={3} component="div">
          {/* Total Balance Card */}
          {/* @ts-ignore */}
          <Grid item xs={12} sm={6} md={3} component="div">
            <Paper
              className="dashboard-card"
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                bgcolor: 'primary.main',
                color: 'white',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Total Balance</Typography>
              </Box>
              <Typography variant="h4">
                ${stats?.totalBalance?.toFixed(2) || '0.00'}
              </Typography>
            </Paper>
          </Grid>

          {/* Total Income Card */}
          <Grid item xs={12} sm={6} md={3} component="div">
            <Paper
              className="dashboard-card"
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                bgcolor: 'success.main',
                color: 'white',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Total Income</Typography>
              </Box>
              <Typography variant="h4">
                ${stats?.totalIncome?.toFixed(2) || '0.00'}
              </Typography>
            </Paper>
          </Grid>

          {/* Total Expenses Card */}
          <Grid item xs={12} sm={6} md={3} component="div">
            <Paper
              className="dashboard-card"
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                bgcolor: 'error.main',
                color: 'white',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingDownIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Total Expenses</Typography>
              </Box>
              <Typography variant="h4">
                ${stats?.totalExpenses?.toFixed(2) || '0.00'}
              </Typography>
            </Paper>
          </Grid>

          {/* Categories Overview Card */}
          <Grid item xs={12} sm={6} md={3} component="div">
            <Paper
              className="dashboard-card"
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                bgcolor: 'warning.main',
                color: 'white',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CategoryIcon sx={{ mr: 1 }} />
                <Typography variant="h6">Categories</Typography>
              </Box>
              <Typography variant="h4">
                {stats?.expensesByCategory?.labels?.length || 0}
              </Typography>
            </Paper>
          </Grid>

          {/* Expenses by Category Chart */}
          <Grid item xs={12} md={6} component="div">
            <Paper className="chart-card" sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Expenses by Category
              </Typography>
              {stats?.expensesByCategory && (
                <Box sx={{ height: 300 }}>
                  <Doughnut
                    data={{
                      labels: stats.expensesByCategory.labels,
                      datasets: [
                        {
                          data: stats.expensesByCategory.data,
                          backgroundColor: stats.expensesByCategory.backgroundColor,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                  />
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Recent Transactions */}
          <Grid item xs={12} md={6} component="div">
            <Paper className="transaction-card" sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recent Transactions
              </Typography>
              {stats?.recentTransactions?.map((transaction, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1">
                      {transaction.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {transaction.category}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    color={transaction.type === 'income' ? 'success.main' : 'error.main'}
                  >
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}
