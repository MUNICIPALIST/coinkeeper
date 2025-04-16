// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useLanguage } from '@/providers/language-provider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DashboardLayout from '@/components/layouts/dashboard-layout';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface DailySummary {
  date: string;
  income: number;
  expense: number;
  net: number;
}

interface CategorySummary {
  name: string;
  amount: number;
  percentage: number;
}

interface MonthlyComparison {
  month: string;
  income: number;
  expense: number;
  savings: number;
  savingsRate: number;
}

interface Goal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  progress: number;
  daysLeft: number | null;
  deadline: string | null;
  description: string | null;
  status: string;
}

interface ReportData {
  dailySummary: DailySummary[];
  categorySummary: CategorySummary[];
  monthlyComparison: MonthlyComparison[];
  goals: Goal[];
}

interface TimeRange {
  value: string;
  label_key: string;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function ReportsPage() {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [timeRange, setTimeRange] = useState('30');
  const [reportData, setReportData] = useState<ReportData>({
    dailySummary: [],
    categorySummary: [],
    monthlyComparison: [],
    goals: [],
  });

  const timeRanges: TimeRange[] = [
    { value: '7', label_key: 'reports.time_range_options.last_7_days' },
    { value: '30', label_key: 'reports.time_range_options.last_30_days' },
    { value: '90', label_key: 'reports.time_range_options.last_90_days' },
    { value: '365', label_key: 'reports.time_range_options.last_year' },
  ];

  useEffect(() => {
    if (session?.user) {
      fetchReportData();
    }
  }, [timeRange, session]);

  const fetchReportData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/reports?timeRange=${timeRange}`);
      if (!response.ok) {
        throw new Error('Failed to fetch report data');
      }
      const data = await response.json();
      setReportData(data);
    } catch (error) {
      console.error('Error fetching report data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleTimeRangeChange = (event: { target: { value: string } }) => {
    setTimeRange(event.target.value);
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
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">{t('reports.financial_reports')}</Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>{t('reports.time_range')}</InputLabel>
            <Select
              value={timeRange}
              label={t('reports.time_range')}
              onChange={handleTimeRangeChange}
            >
              {timeRanges.map((range) => (
                <MenuItem key={range.value} value={range.value}>
                  {t(range.label_key)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label={t('reports.overview')} />
          <Tab label={t('reports.categories')} />
          <Tab label={t('reports.trends')} />
        </Tabs>

        {activeTab === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '400px' }}>
                <Typography variant="h6" gutterBottom>
                  {t('reports.income_vs_expenses')}
                </Typography>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={reportData.dailySummary}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="income"
                      stroke="#00C49F"
                      name={t('reports.income')}
                    />
                    <Line
                      type="monotone"
                      dataKey="expense"
                      stroke="#FF8042"
                      name={t('reports.expenses')}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: '400px' }}>
                <Typography variant="h6" gutterBottom>
                  {t('reports.category_distribution')}
                </Typography>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={reportData.categorySummary}
                      dataKey="amount"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {reportData.categorySummary.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        )}

        {activeTab === 1 && (
          <Grid container spacing={3}>
            {reportData.categorySummary.map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category.name}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">{category.name}</Typography>
                  <Typography variant="h4">
                    ${category.amount.toLocaleString()}
                  </Typography>
                  <Typography color="text.secondary">
                    {category.percentage.toFixed(1)}% {t('reports.of_total_expenses')}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {activeTab === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, height: '400px' }}>
                <Typography variant="h6" gutterBottom>
                  {t('reports.monthly_trends')}
                </Typography>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={reportData.monthlyComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="income"
                      stroke="#00C49F"
                      name={t('reports.income')}
                    />
                    <Line
                      type="monotone"
                      dataKey="expense"
                      stroke="#FF8042"
                      name={t('reports.expenses')}
                    />
                    <Line
                      type="monotone"
                      dataKey="savings"
                      stroke="#8884d8"
                      name={t('reports.savings')}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </DashboardLayout>
  );
} 