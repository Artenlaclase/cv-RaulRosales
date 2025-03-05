'use client'; // <-- ¡Directiva clave!

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../theme';
import MediaQueryProvider from './MediaQueryProvider';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MediaQueryProvider>
          {children}
        </MediaQueryProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}