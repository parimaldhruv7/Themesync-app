import  { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ThemeWrapperProps {
  children: ReactNode;
}

export function ThemeWrapper({ children }: ThemeWrapperProps) {
  const { themeConfig, isTransitioning } = useTheme();

  const style = {
    background: themeConfig.colors.background,
    color: themeConfig.colors.text,
    fontFamily: themeConfig.fonts.body,
    transition: isTransitioning ? 'all 0.3s ease-in-out' : 'none',
    minHeight: '100vh',
  };

  return (
    <div style={style} className={`theme-wrapper ${themeConfig.name}`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Pacifico&family=Poppins:wght@300;400;500;600&display=swap');
          
          .theme-wrapper h1, .theme-wrapper h2, .theme-wrapper h3, .theme-wrapper h4, .theme-wrapper h5, .theme-wrapper h6 {
            font-family: ${themeConfig.fonts.heading};
          }
          
          .theme-wrapper.theme3 {
            background: ${themeConfig.colors.background};
          }
        `}
      </style>
      {children}
    </div>
  );
}