'use client';

import { Box, Typography, Paper, IconButton, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';
import { useState, useEffect } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import { useLanguage } from '@/providers/language-provider';

interface Account {
  id: number;
  name: string;
  balance: number;
  currency: string;
  description?: string;
}

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense' | 'transfer';
  date: string;
  category: {
    name: string;
    color: string;
  };
  account: {
    name: string;
    currency: string;
  };
}

interface Category {
  id: number;
  name: string;
  type: 'income' | 'expense';
  color: string;
}

export default function DashboardPage() {
  const { t } = useLanguage();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Calculated values from real data
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      await Promise.all([
        fetchAccounts(),
        fetchTransactions(),
        fetchCategories()
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAccounts = async () => {
    try {
      const response = await fetch('/api/accounts');
      const data = await response.json();
      setAccounts(data);
      return data;
    } catch (error) {
      console.error('Error fetching accounts:', error);
      return [];
    }
  };

  const fetchTransactions = async () => {
    try {
      // Get the latest 10 transactions
      const response = await fetch('/api/transactions?limit=10&page=1');
      const data = await response.json();
      
      if (data.transactions && Array.isArray(data.transactions)) {
        setTransactions(data.transactions);
        return data.transactions;
      } else {
        setTransactions([]);
        return [];
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setTransactions([]);
      return [];
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchAllData();
    setIsRefreshing(false);
  };

  // Function to translate category names
  const getTranslatedCategoryName = (name) => {
    if (!name) return 'N/A';
    
    // Convert category name to lowercase and handle special cases
    let key = name.toLowerCase().replace(/[&\s]+/g, '_');
    
    // Special case for categories with hardcoded names that don't match our keys
    if (key === 'food_&_dining') key = 'food_dining';
    if (key === 'debt_payments') key = 'debt_payments';
    
    // Try to get direct translation for the category
    const translationKey = `categories.${key}`;
    const directTranslation = t(translationKey);
    
    // If key is returned, it means no translation was found
    if (directTranslation === translationKey) {
      return name; // Return original name
    }
    
    return directTranslation;
  };

  if (loading) {
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
      <Box className="content-container" sx={{ py: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="welcome-section">
          <Box className="page-title-container">
            <Typography variant="h4" className="welcome-title">
              {t('dashboard.welcome_back')}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.7 }}>
              {t('dashboard.financial_overview')}
            </Typography>
          </Box>
          <IconButton 
            onClick={handleRefresh} 
            aria-label="refresh data" 
            className={`refresh-button ${isRefreshing ? 'rotating' : ''}`}
            disabled={isRefreshing}
          >
            <RefreshIcon />
          </IconButton>
        </Box>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          <Paper className="dashboard-card balance-card">
            <Typography variant="h6">{t('dashboard.total_balance')}</Typography>
            <Typography variant="h4">{totalBalance.toLocaleString()} {accounts.length > 0 ? accounts[0]?.currency : ''}</Typography>
          </Paper>

          <Paper className="dashboard-card income-card">
            <Typography variant="h6">{t('dashboard.income')}</Typography>
            <Typography variant="h4">{totalIncome.toLocaleString()} {accounts.length > 0 ? accounts[0]?.currency : ''}</Typography>
          </Paper>

          <Paper className="dashboard-card expense-card">
            <Typography variant="h6">{t('dashboard.expenses')}</Typography>
            <Typography variant="h4">{totalExpenses.toLocaleString()} {accounts.length > 0 ? accounts[0]?.currency : ''}</Typography>
          </Paper>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Paper className="overview-card" sx={{ p: 3 }}>
            <Typography variant="h6" className="section-header">{t('dashboard.spending_overview')}</Typography>
            {categories.filter(cat => cat.type === 'expense').length > 0 ? (
              <Box className="chart-container" sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                {categories
                  .filter(cat => cat.type === 'expense')
                  .map(category => {
                    const categoryTransactions = transactions.filter(
                      t => t.category?.name?.toLowerCase() === category.name.toLowerCase()
                    );
                    const categoryTotal = categoryTransactions.reduce(
                      (sum, t) => sum + Math.abs(t.amount), 0
                    );
                    
                    return categoryTotal > 0 ? (
                      <Box 
                        key={category.id} 
                        sx={{ 
                          border: '1px solid #eee', 
                          borderRadius: '8px', 
                          padding: '10px', 
                          width: '120px',
                          background: `linear-gradient(135deg, white 80%, ${category.color} 100%)`
                        }}
                      >
                        <Typography variant="body2" fontWeight="bold">
                          {getTranslatedCategoryName(category.name)}
                        </Typography>
                        <Typography variant="body1">
                          {categoryTotal.toLocaleString()} {accounts[0]?.currency}
                        </Typography>
                      </Box>
                    ) : null;
                  }).filter(Boolean)
                }
              </Box>
            ) : (
              <Typography variant="body2" className="chart-placeholder" sx={{ p: 3, textAlign: 'center' }}>
                {t('dashboard.spending_patterns')}
              </Typography>
            )}
          </Paper>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Paper className="overview-card" sx={{ p: 3 }}>
            <Typography variant="h6" className="section-header">{t('dashboard.recent_transactions')}</Typography>
            {transactions.length > 0 ? (
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('transactions.date')}</TableCell>
                      <TableCell>{t('transactions.description')}</TableCell>
                      <TableCell>{t('transactions.category')}</TableCell>
                      <TableCell align="right">{t('transactions.amount')}</TableCell>
                      <TableCell>{t('transactions.type')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.slice(0, 5).map((transaction) => (
                      <TableRow key={transaction.id} hover>
                        <TableCell>
                          {new Date(transaction.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box
                              sx={{ 
                                width: 12, 
                                height: 12, 
                                borderRadius: '50%', 
                                backgroundColor: transaction.category?.color || '#ccc' 
                              }}
                            />
                            {transaction.category ? getTranslatedCategoryName(transaction.category.name) : 'N/A'}
                          </Box>
                        </TableCell>
                        <TableCell align="right" sx={{ color: transaction.type === 'income' ? 'green' : 'red' }}>
                          {transaction.account?.currency || ''} {Math.abs(transaction.amount).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={t(`transactions.${transaction.type}`)} 
                            size="small" 
                            sx={{ 
                              backgroundColor: transaction.type === 'income' ? '#e6f7eb' : '#ffebee', 
                              color: transaction.type === 'income' ? '#2e7d32' : '#c62828',
                              fontSize: '0.7rem'
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Box className="transactions-list" sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="body2" className="transactions-placeholder">
                  {t('dashboard.transactions_appear')}
                </Typography>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
    </DashboardLayout>
  );
} 