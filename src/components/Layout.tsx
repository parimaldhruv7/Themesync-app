import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { themeConfig } = useTheme();

  if (themeConfig.layout === 'sidebar') {
    return (
      <>
        <Header />
        <div className="flex pt-16">
          <Sidebar />
          <main className="flex-1 ml-64 p-6 transition-all duration-300">
            {children}
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <main 
        className="pt-20 px-4 transition-all duration-300"
        style={{ 
          paddingTop: themeConfig.layout === 'default' ? '5rem' : '6rem'
        }}
      >
        {children}
      </main>
    </>
  );
}