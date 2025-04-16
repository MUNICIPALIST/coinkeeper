'use client';

import DashboardLayout from '@/components/layouts/dashboard-layout';
import TranslationDemo from '@/components/example/translation-demo';
import { Box } from '@mui/material';

export default function TranslationDemoPage() {
  return (
    <DashboardLayout>
      <Box sx={{ width: '100%', maxWidth: '1080px', margin: '0 auto' }}>
        <TranslationDemo />
      </Box>
    </DashboardLayout>
  );
} 