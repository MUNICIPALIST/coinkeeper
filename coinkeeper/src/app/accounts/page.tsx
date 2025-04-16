// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useLanguage } from '@/providers/language-provider';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

interface Account {
  id: number;
  name: string;
  balance: number;
  currency: string;
  description?: string;
}

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'RUB', 'KZT'];

export default function AccountsPage() {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    balance: '',
    currency: 'USD',
    description: '',
  });

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await fetch('/api/accounts');
      const data = await response.json();
      setAccounts(data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (account?: Account) => {
    if (account) {
      setEditingAccount(account);
      setFormData({
        name: account.name,
        balance: account.balance.toString(),
        currency: account.currency,
        description: account.description || '',
      });
    } else {
      setEditingAccount(null);
      setFormData({
        name: '',
        balance: '',
        currency: 'USD',
        description: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingAccount(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/accounts', {
        method: editingAccount ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...(editingAccount && { id: editingAccount.id }),
          name: formData.name,
          balance: parseFloat(formData.balance),
          currency: formData.currency,
          description: formData.description,
        }),
      });

      if (response.ok) {
        handleCloseDialog();
        fetchAccounts();
      }
    } catch (error) {
      console.error('Error saving account:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm(t('accounts.delete_confirmation'))) {
      try {
        const response = await fetch(`/api/accounts/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchAccounts();
        }
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
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
        <Box className="page-title-container">
          <Typography variant="h4">{t('accounts.title')}</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            className="add-button"
          >
            {t('accounts.add_account')}
          </Button>
        </Box>

        <Box className="accounts-grid">
          {accounts.length === 0 ? (
            <Box className="empty-state" sx={{ gridColumn: '1 / -1' }}>
              <Typography variant="h6" className="empty-state-title">{t('accounts.no_accounts')}</Typography>
              <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={() => handleOpenDialog()}
                sx={{ mt: 2 }}
              >
                {t('accounts.add_account')}
              </Button>
            </Box>
          ) : (
            accounts.map((account) => (
              <Paper className="account-card" key={account.id}>
                <Box position="relative" p={2}>
                  <Typography variant="h6">{account.name}</Typography>
                  <Typography variant="h4" color="primary">
                    {account.currency} {account.balance.toFixed(2)}
                  </Typography>
                  {account.description && (
                    <Typography color="text.secondary" mt={1}>
                      {account.description}
                    </Typography>
                  )}
                  <Box className="actions-container">
                    <IconButton onClick={() => handleOpenDialog(account)} size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(account.id)} size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            ))
          )}
        </Box>

        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingAccount ? t('accounts.edit_account') : t('accounts.add_account')}
          </DialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label={t('accounts.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label={t('accounts.balance')}
                type="number"
                value={formData.balance}
                onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                select
                label={t('accounts.currency')}
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                margin="normal"
                required
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label={t('description')}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                margin="normal"
                multiline
                rows={3}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>{t('cancel')}</Button>
            <Button type="submit" onClick={handleSubmit} variant="contained">
              {editingAccount ? t('save') : t('add')}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </DashboardLayout>
  );
} 