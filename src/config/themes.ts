import { ThemeConfig } from '../types';

export const themes: Record<string, ThemeConfig> = {
  theme1: {
    name: 'theme1',
    label: 'Minimalist',
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#0ea5e9',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      textTertiary: '#64748b',
      border: '#e2e8f0',
    },
    fonts: {
      heading: 'Inter, system-ui, sans-serif',
      body: 'Inter, system-ui, sans-serif',
    },
    layout: 'default',
  },
  theme2: {
    name: 'theme2',
    label: 'Dark Professional',
    colors: {
      primary: '#8b5cf6',
      secondary: '#a78bfa',
      accent: '#fbbf24',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textSecondary: '#cbd5e1',
      textTertiary:'#cbd5e1',
      border: '#334155',
    },
    fonts: {
      heading: 'Playfair Display, serif',
      body: 'Inter, system-ui, sans-serif',
    },
    layout: 'sidebar',
  },
  theme3: {
    name: 'theme3',
    label: 'Vibrant Playful',
    colors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      accent: '#f59e0b',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: '#ffffff',
      text: '#1f2937',
      textSecondary: '#6b7280',
      textTertiary: '#ffffff',
      border: '#e5e7eb',
    },
    fonts: {
      heading: 'Pacifico, cursive',
      body: 'Poppins, sans-serif',
    },
    layout: 'grid',
  },
};