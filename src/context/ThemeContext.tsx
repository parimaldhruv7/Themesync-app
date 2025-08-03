import  { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeType, ThemeConfig } from '../types';
import { themes } from '../config/themes';

/**
 * Context type definition for theme management
 * Provides theme state and controls for the entire application
 */
interface ThemeContextType {
  /** Currently active theme identifier */
  currentTheme: ThemeType;
  /** Configuration object for the current theme */
  themeConfig: ThemeConfig;
  /** Function to change the active theme */
  setTheme: (theme: ThemeType) => void;
  /** Boolean indicating if a theme transition is in progress */
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Props for the ThemeProvider component
 */
interface ThemeProviderProps {
  /** Child components that will have access to theme context */
  children: ReactNode;
}

/**
 * Theme Provider Component
 * 
 * Manages global theme state and provides theme switching functionality
 * to all child components. Persists theme selection in localStorage.
 * 
 * @param props - Component props containing children
 * @returns JSX element wrapping children with theme context
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  /**
   * Changes the active theme with smooth transition animation
   * 
   * @param theme - The theme identifier to switch to
   */
  const setTheme = (theme: ThemeType) => {
    if (theme === currentTheme) return;
    
    setIsTransitioning(true);
    localStorage.setItem('selectedTheme', theme);
    
    // Add smooth transition delay for better UX
    setTimeout(() => {
      setCurrentTheme(theme);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 150);
  };

  const themeConfig = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, themeConfig, setTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}