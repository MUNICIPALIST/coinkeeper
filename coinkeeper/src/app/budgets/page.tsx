'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useLanguage } from '@/providers/language-provider';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import {
  Box,
  Button,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  IconButton,
  CircularProgress,
  Grid,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

interface Budget {
  id: number;
  name: string;
  amount: number;
  spent: number;
  period: 'monthly' | 'yearly';
  categoryId: number;
  category: {
    name: string;
    color: string;
  };
}

interface Category {
  id: number;
  name: string;
  type: 'expense';
  color: string;
}

export default function BudgetsPage() {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingBudget, setEditingBudget] = useState<Budget | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    period: 'monthly',
    categoryId: '',
  });

  const periods = [
    { value: 'monthly', label: t('monthly') },
    { value: 'yearly', label: t('yearly') },
  ];

  useEffect(() => {
    fetchBudgets();
    fetchCategories();
  }, []);

  const fetchBudgets = async () => {
    try {
      const response = await fetch('/api/budgets');
      const data = await response.json();
      setBudgets(data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      // Filter only expense categories
      setCategories(data.filter((cat: Category) => cat.type === 'expense'));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleOpenDialog = (budget?: Budget) => {
    if (budget) {
      setEditingBudget(budget);
      setFormData({
        name: budget.name,
        amount: budget.amount.toString(),
        period: budget.period,
        categoryId: budget.categoryId.toString(),
      });
    } else {
      setEditingBudget(null);
      setFormData({
        name: '',
        amount: '',
        period: 'monthly',
        categoryId: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingBudget(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/budgets', {
        method: editingBudget ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...(editingBudget && { id: editingBudget.id }),
          name: formData.name,
          amount: parseFloat(formData.amount),
          period: formData.period,
          categoryId: parseInt(formData.categoryId),
        }),
      });

      if (response.ok) {
        handleCloseDialog();
        fetchBudgets();
      }
    } catch (error) {
      console.error('Error saving budget:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm(t('confirmation_delete'))) {
      try {
        const response = await fetch(`/api/budgets/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchBudgets();
        }
      } catch (error) {
        console.error('Error deleting budget:', error);
      }
    }
  };

  const calculateProgress = (spent: number, amount: number) => {
    return (spent / amount) * 100;
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 100) return 'error';
    if (progress >= 80) return 'warning';
    return 'success';
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
          <Typography variant="h4">{t('budgets.title')}</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            className="add-button"
          >
            {t('add_budget')}
          </Button>
        </Box>

        <Box className="budgets-grid">
          {budgets.map((budget) => {
            const progress = calculateProgress(budget.spent, budget.amount);
            const progressColor = getProgressColor(progress);

            return (
              <Paper className="budget-card" key={budget.id}>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="h6">{budget.name}</Typography>
                    <Box display="flex" alignItems="center" mb={1} className="budget-category-indicator">
                      <Box
                        className="budget-category-dot"
                        sx={{
                          backgroundColor: budget.category.color,
                        }}
                      />
                      <Typography variant="body2" className="budget-category-name">
                        {budget.category.name}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="budget-actions">
                    <IconButton onClick={() => handleOpenDialog(budget)} size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(budget.id)} size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box className="budget-info">
                  <Box className="budget-info-item">
                    <Typography className="budget-info-label">{t('budgets.spent')}</Typography>
                    <Typography className="budget-info-value spent">
                      ${budget.spent.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box className="budget-info-progress" sx={{
                    color: progressColor === 'success' ? '#2e7d32' : 
                           progressColor === 'warning' ? '#ed6c02' : '#d32f2f'
                  }}>
                    {Math.round(progress)}%
                  </Box>
                  <Box className="budget-info-item" sx={{ textAlign: 'right' }}>
                    <Typography className="budget-info-label">{t('budgets.budget')}</Typography>
                    <Typography className="budget-info-value budget">
                      ${budget.amount.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>

                <Box className="budget-period">
                  <Chip
                    label={t(budget.period)}
                    variant="outlined"
                    size="small"
                    sx={{ borderRadius: '4px' }}
                  />
                </Box>

                <LinearProgress
                  className="budget-progress-bar"
                  variant="determinate"
                  value={Math.min(progress, 100)}
                  color={progressColor}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Paper>
            );
          })}
        </Box>

        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
          <DialogTitle>
            {editingBudget ? t('budgets.edit_budget') : t('add_budget')}
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label={t('budget_name')}
              type="text"
              fullWidth
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              margin="dense"
              label={t('amount')}
              type="number"
              fullWidth
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              required
              sx={{ mb: 2 }}
            />
            <TextField
              select
              margin="dense"
              label={t('period')}
              fullWidth
              value={formData.period}
              onChange={(e) => setFormData({ ...formData, period: e.target.value })}
              required
              sx={{ mb: 2 }}
            >
              {periods.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              margin="dense"
              label={t('category')}
              fullWidth
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
              required
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              {t('cancel')}
            </Button>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              {editingBudget ? t('save') : t('add')}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </DashboardLayout>
  );
} 