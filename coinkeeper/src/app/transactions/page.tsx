// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import { useLanguage } from '@/providers/language-provider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense' | 'transfer';
  date: string;
  categoryId: number;
  accountId: number;
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

interface Account {
  id: number;
  name: string;
  currency: string;
}

interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export default function TransactionsPage() {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
    date: new Date().toISOString().split('T')[0],
    categoryId: '',
    accountId: '',
    toAccountId: '', // For transfers
  });

  // Transaction types with translations
  const transactionTypes = [
    { value: 'income', label: t('transactions.income') },
    { value: 'expense', label: t('transactions.expense') },
    { value: 'transfer', label: t('transactions.transfer') },
  ];

  useEffect(() => {
    fetchTransactions();
    fetchCategories();
    fetchAccounts();
  }, [page, rowsPerPage]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: (page + 1).toString(),
        limit: rowsPerPage.toString()
      });
      
      const response = await fetch(`/api/transactions?${queryParams}`);
      const data = await response.json();
      
      if (data.transactions && Array.isArray(data.transactions)) {
        setTransactions(data.transactions);
        setTotalCount(data.pagination?.total || 0);
      } else {
        // Fallback if the response format isn't as expected
        setTransactions([]);
        setTotalCount(0);
        console.error('Unexpected API response format:', data);
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
    }
  };

  const fetchAccounts = async () => {
    try {
      const response = await fetch('/api/accounts');
      const data = await response.json();
      setAccounts(data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
      setAccounts([]);
    }
  };

  const handleOpenDialog = (transaction?: Transaction) => {
    if (transaction) {
      setEditingTransaction(transaction);
      setFormData({
        description: transaction.description,
        amount: transaction.amount.toString(),
        type: transaction.type,
        date: new Date(transaction.date).toISOString().split('T')[0],
        categoryId: transaction.categoryId.toString(),
        accountId: transaction.accountId.toString(),
        toAccountId: '',
      });
    } else {
      setEditingTransaction(null);
      setFormData({
        description: '',
        amount: '',
        type: 'expense',
        date: new Date().toISOString().split('T')[0],
        categoryId: '',
        accountId: '',
        toAccountId: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingTransaction(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...(editingTransaction && { id: editingTransaction.id }),
        description: formData.description,
        amount: parseFloat(formData.amount),
        type: formData.type,
        date: formData.date,
        accountId: parseInt(formData.accountId),
        ...(formData.type !== 'transfer' ? { categoryId: parseInt(formData.categoryId) } : {}),
        ...(formData.type === 'transfer' && formData.toAccountId ? { toAccountId: parseInt(formData.toAccountId) } : {}),
      };

      const response = await fetch('/api/transactions', {
        method: editingTransaction ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        handleCloseDialog();
        fetchTransactions();
      } else {
        const error = await response.json();
        alert(`${t('error')}: ${error.error || t('transactions.save_failed')}`);
      }
    } catch (error) {
      console.error('Error saving transaction:', error);
      alert(t('transactions.save_failed_try_again'));
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm(t('transactions.delete_confirmation'))) {
      try {
        const response = await fetch(`/api/transactions/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchTransactions();
        }
      } catch (error) {
        console.error('Error deleting transaction:', error);
      }
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading && (!transactions || transactions.length === 0)) {
    return (
      <DashboardLayout>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  // Ensure transactions is always an array
  const safeTransactions = Array.isArray(transactions) ? transactions : [];

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

  return (
    <DashboardLayout>
      <Box className="content-container" sx={{ py: 3 }}>
        <Box className="page-title-container">
          <Typography variant="h4">{t('transactions.title')}</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            className="add-button"
          >
            {t('transactions.add_transaction')}
          </Button>
        </Box>

        <Paper className="transactions-container">
          <TableContainer>
            <Table className="transactions-table" aria-label="transactions table">
              <TableHead>
                <TableRow>
                  <TableCell className="table-header-cell">{t('transactions.date')}</TableCell>
                  <TableCell className="table-header-cell">{t('transactions.description')}</TableCell>
                  <TableCell className="table-header-cell">{t('transactions.category')}</TableCell>
                  <TableCell className="table-header-cell">{t('transactions.account')}</TableCell>
                  <TableCell className="table-header-cell" align="right">{t('transactions.amount')}</TableCell>
                  <TableCell className="table-header-cell">{t('transactions.type')}</TableCell>
                  <TableCell className="table-header-cell" align="center">{t('transactions.actions')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {safeTransactions.map((transaction) => (
                  <TableRow key={transaction.id} hover>
                    <TableCell>
                      {new Date(transaction.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>
                      <Box className="category-indicator">
                        <Box
                          className="category-color-dot"
                          sx={{ backgroundColor: transaction.category?.color || '#ccc' }}
                        />
                        {transaction.category ? getTranslatedCategoryName(transaction.category.name) : 'N/A'}
                      </Box>
                    </TableCell>
                    <TableCell>{transaction.account?.name || 'N/A'}</TableCell>
                    <TableCell 
                      align="right" 
                      className={`transaction-amount ${transaction.type}`}
                    >
                      {transaction.account?.currency || ''} {Math.abs(transaction.amount).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={t(`transactions.${transaction.type}`)} 
                        size="small" 
                        className={`transaction-type-chip ${transaction.type}`}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => handleOpenDialog(transaction)} size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(transaction.id)} size="small" color="error">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                {safeTransactions.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                      {t('transactions.no_transactions')}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box className="pagination-container">
            <TablePagination
              component="div"
              count={totalCount}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 25, 50]}
              labelRowsPerPage={t('transactions.rows_per_page')}
              labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${t('of')} ${count}`}
            />
          </Box>
        </Paper>

        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingTransaction ? t('transactions.edit_transaction') : t('transactions.add_transaction')}
          </DialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label={t('transactions.description')}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t('transactions.amount')}
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                select
                label={t('transactions.type')}
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as 'income' | 'expense' | 'transfer' })}
                margin="normal"
                required
              >
                {transactionTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                type="date"
                label={t('transactions.date')}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                margin="normal"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                fullWidth
                select
                label={t('transactions.account')}
                value={formData.accountId}
                onChange={(e) => setFormData({ ...formData, accountId: e.target.value })}
                margin="normal"
                required
              >
                {accounts.map((account) => (
                  <MenuItem key={account.id} value={account.id}>
                    {account.name} ({account.currency})
                  </MenuItem>
                ))}
              </TextField>
              {formData.type === 'transfer' && (
                <TextField
                  fullWidth
                  select
                  label={t('transactions.to_account')}
                  value={formData.toAccountId}
                  onChange={(e) => setFormData({ ...formData, toAccountId: e.target.value })}
                  margin="normal"
                  required
                >
                  {accounts
                    .filter((account) => account.id.toString() !== formData.accountId)
                    .map((account) => (
                      <MenuItem key={account.id} value={account.id}>
                        {account.name} ({account.currency})
                      </MenuItem>
                    ))}
                </TextField>
              )}
              {formData.type !== 'transfer' && (
                <TextField
                  fullWidth
                  select
                  label={t('transactions.category')}
                  value={formData.categoryId}
                  onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                  margin="normal"
                  required
                >
                  {categories
                    .filter((category) => category.type === formData.type)
                    .map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {getTranslatedCategoryName(category.name)}
                      </MenuItem>
                    ))}
                </TextField>
              )}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>{t('cancel')}</Button>
            <Button onClick={handleSubmit} variant="contained">
              {editingTransaction ? t('save') : t('add')}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </DashboardLayout>
  );
} 