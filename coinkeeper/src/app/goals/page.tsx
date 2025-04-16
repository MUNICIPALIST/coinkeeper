// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useLanguage } from '@/providers/language-provider';

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  status: string;
  description: string | null;
}

export default function GoalsPage() {
  const { data: session, status: sessionStatus } = useSession();
  const { t, isClientReady } = useLanguage();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: 0,
    currentAmount: 0,
    deadline: '',
    description: '',
  });

  useEffect(() => {
    if (session?.user) {
      fetchGoals();
    } else if (sessionStatus === 'unauthenticated') {
      setLoading(false);
      setError('You must be signed in to view goals');
    }
  }, [session, sessionStatus]);

  const fetchGoals = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/goals');
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API error:', errorData);
        throw new Error(errorData.message || `Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Ensure we always have an array, even if the API returns something unexpected
      if (Array.isArray(data)) {
        setGoals(data);
      } else {
        console.error('Expected array of goals but got:', data);
        setGoals([]);
        setError('Invalid data format received from server');
      }
    } catch (error) {
      console.error('Error fetching goals:', error);
      setGoals([]);
      setError(error instanceof Error ? error.message : 'Failed to load goals');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (goal?: Goal) => {
    if (goal) {
      setEditingGoal(goal);
      setFormData({
        name: goal.name,
        targetAmount: goal.targetAmount,
        currentAmount: goal.currentAmount,
        deadline: new Date(goal.deadline).toISOString().split('T')[0],
        description: goal.description || '',
      });
    } else {
      setEditingGoal(null);
      setFormData({
        name: '',
        targetAmount: 0,
        currentAmount: 0,
        deadline: '',
        description: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setError(null);
      const goalData = {
        ...formData,
        targetAmount: Number(formData.targetAmount),
        currentAmount: Number(formData.currentAmount),
      };

      if (editingGoal) {
        // Update existing goal
        const response = await fetch(`/api/goals`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: editingGoal.id,
            ...goalData,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Error: ${response.status}`);
        }

        await fetchGoals();
      } else {
        // Create new goal
        const response = await fetch('/api/goals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(goalData),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Error: ${response.status}`);
        }

        await fetchGoals();
      }

      handleCloseDialog();
    } catch (error) {
      console.error('Error saving goal:', error);
      setError(error instanceof Error ? error.message : 'Failed to save goal');
    }
  };

  const handleDeleteGoal = async (id: number) => {
    if (confirm('Are you sure you want to delete this goal?')) {
      try {
        setError(null);
        const response = await fetch(`/api/goals/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Error: ${response.status}`);
        }

        await fetchGoals();
      } catch (error) {
        console.error('Error deleting goal:', error);
        setError(error instanceof Error ? error.message : 'Failed to delete goal');
      }
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'at_risk':
        return 'warning';
      case 'expired':
        return 'error';
      default:
        return 'primary';
    }
  };

  const calculateProgress = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  const formatTimeRemaining = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    
    if (deadlineDate < today) {
      return 'Expired';
    }
    
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return '1 day left';
    } else {
      return `${diffDays} days left`;
    }
  };

  // Loading state
  if (loading) {
    return (
      <DashboardLayout>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  // Don't try to render translated content until client is ready
  if (!isClientReady) {
    return (
      <DashboardLayout>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4">Goals</Typography>
          <Box mt={3}>
            <CircularProgress size={24} />
          </Box>
        </Box>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">{t('goals')}</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
          >
            Add Goal
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={3}>
          {goals.length > 0 ? (
            goals.map((goal) => (
              <Grid item xs={12} sm={6} md={4} key={goal.id}>
                <Paper className="goal-card" sx={{ p: 2 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                    <Typography variant="h6">{goal.name}</Typography>
                    <Box>
                      <IconButton
                        size="small"
                        onClick={() => handleOpenDialog(goal)}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteGoal(goal.id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  
                  <Box mt={2}>
                    <Box display="flex" justifyContent="space-between" mb={0.5}>
                      <Typography variant="body2">
                        ${goal.currentAmount.toFixed(2)} of ${goal.targetAmount.toFixed(2)}
                      </Typography>
                      <Typography variant="body2">
                        {calculateProgress(goal.currentAmount, goal.targetAmount)}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={calculateProgress(goal.currentAmount, goal.targetAmount)}
                      color={getProgressColor(goal.status) as any}
                      sx={{ mb: 2, height: 8, borderRadius: 4 }}
                    />
                    
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Chip 
                        label={goal.status.replace('_', ' ')}
                        color={getProgressColor(goal.status) as any}
                        size="small"
                      />
                      <Typography variant="caption">
                        {formatTimeRemaining(goal.deadline)}
                      </Typography>
                    </Box>
                    
                    {goal.description && (
                      <Typography variant="body2" color="text.secondary" mt={1}>
                        {goal.description}
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </Grid>
            ))
          ) : !loading && !error ? (
            <Box width="100%" textAlign="center" py={4}>
              <Typography variant="h6" color="textSecondary">
                No goals created yet. Click "Add Goal" to get started.
              </Typography>
            </Box>
          ) : null}
        </Grid>

        {/* Goal Form Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingGoal ? t('edit') + ' ' + t('goals') : t('add') + ' ' + t('goals')}
          </DialogTitle>
          <DialogContent>
            {error && (
              <Alert severity="error" sx={{ mt: 2, mb: 2 }}>
                {error}
              </Alert>
            )}
            <TextField
              name="name"
              label={t('goal_name')}
              value={formData.name}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="targetAmount"
              label={t('target_amount')}
              type="number"
              value={formData.targetAmount}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="currentAmount"
              label={t('current_amount')}
              type="number"
              value={formData.currentAmount}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="deadline"
              label={t('deadline')}
              type="date"
              value={formData.deadline}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              name="description"
              label={t('description')}
              value={formData.description}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
              multiline
              rows={2}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>{t('cancel')}</Button>
            <Button 
              onClick={handleSubmit}
              variant="contained"
              disabled={!formData.name || !formData.targetAmount || !formData.deadline}
            >
              {t('save')}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </DashboardLayout>
  );
} 