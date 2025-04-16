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
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

interface Category {
  id: number;
  name: string;
  type: 'income' | 'expense';
  color: string;
  icon?: string;
}

// Популярные эмодзи для категорий
const popularIcons = {
  income: ['💰', '💸', '💵', '💴', '💶', '💷', '💹', '💼', '🏦', '👔', '👨‍💼', '👩‍💼', '🏆', '🎯'],
  expense: ['🛒', '🛍️', '🍔', '🍕', '🥗', '🚗', '🚕', '🏠', '🏥', '🏫', '💊', '📚', '🎬', '👕', '👗', '💄', '✈️', '🚀', '🔌', '💻', '📱', '🏋️‍♂️', '🎮', '☕', '🍻', '🛢️', '⚙️']
};

export default function CategoriesPage() {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'expense',
    color: '#1976d2',
    icon: '',
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      // Initialize with empty array to avoid undefined errors
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        type: category.type,
        color: category.color,
        icon: category.icon || '',
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        type: 'expense',
        color: '#1976d2',
        icon: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingCategory(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/categories', {
        method: editingCategory ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...(editingCategory && { id: editingCategory.id }),
          ...formData,
        }),
      });

      if (response.ok) {
        handleCloseDialog();
        fetchCategories();
      }
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm(t('categories.delete_confirmation'))) {
      try {
        const response = await fetch(`/api/categories/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          fetchCategories();
        }
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  // Function to translate category names
  const getTranslatedCategoryName = (name) => {
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
        <Box className="page-title-container">
          <Typography variant="h4">{t('categories.title')}</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            className="add-button"
          >
            {t('categories.add_category')}
          </Button>
        </Box>

        <Box className="categories-grid">
          {categories.length === 0 ? (
            <Box className="empty-state" sx={{ textAlign: 'center', p: 4 }}>
              <Typography variant="h6">{t('categories.no_categories')}</Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => handleOpenDialog()}
                sx={{ mt: 2 }}
              >
                {t('categories.add_category')}
              </Button>
            </Box>
          ) : (
            categories.map((category) => (
              <Paper className={`category-card ${category.type}`} key={category.id}>
                <Box className="category-info">
                  <Box
                    className="category-icon-container"
                    sx={{ bgcolor: category.color }}
                  >
                    <span className="category-icon">
                      {category.icon || category.name.charAt(0).toUpperCase()}
                    </span>
                  </Box>
                  <Box className="category-text">
                    <Typography className="category-name">
                      {getTranslatedCategoryName(category.name)}
                    </Typography>
                    <Typography className="category-type">
                      <span className={`category-type-indicator ${category.type}`}></span>
                      {t(`categories.${category.type}`)}
                    </Typography>
                  </Box>
                </Box>
                <Box className="category-actions">
                  <IconButton onClick={() => handleOpenDialog(category)} size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(category.id)} size="small" color="error">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Paper>
            ))
          )}
        </Box>

        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingCategory ? t('categories.edit_category') : t('categories.add_category')}
          </DialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label={t('categories.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                select
                label={t('categories.type')}
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                margin="normal"
                required
              >
                <MenuItem value="income">{t('categories.income')}</MenuItem>
                <MenuItem value="expense">{t('categories.expense')}</MenuItem>
              </TextField>
              <TextField
                fullWidth
                label={t('categories.color')}
                type="color"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                margin="normal"
                required
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label={t('categories.icon')}
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                margin="normal"
                helperText={t('categories.icon_helper_text') || "Enter an icon name or emoji symbol (e.g. 🍕, 🏠, 💰, 🚗)"}
              />
              
              <Box className="icon-selector-container">
                <Typography className="icon-selector-title">
                  {t('categories.popular_icons')} {t(`categories.${formData.type}`)}:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {popularIcons[formData.type === 'income' ? 'income' : 'expense'].map((icon, index) => (
                    <Chip
                      key={index}
                      label={icon}
                      onClick={() => setFormData({ ...formData, icon })}
                      variant={formData.icon === icon ? "filled" : "outlined"}
                      className="icon-chip"
                      classes={{ label: 'icon-label' }}
                      sx={{ 
                        bgcolor: formData.icon === icon ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                        borderColor: formData.icon === icon ? 'primary.main' : 'divider'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>{t('cancel')}</Button>
            <Button onClick={handleSubmit} variant="contained">
              {editingCategory ? t('save') : t('add')}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </DashboardLayout>
  );
} 