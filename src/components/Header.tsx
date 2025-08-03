import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Home, Info, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeType } from '../types';

export function Header() {
  const { currentTheme, themeConfig, setTheme } = useTheme();
  const location = useLocation();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeType);
  };

  const isActiveLink = (path: string) => location.pathname === path;

  const headerStyle = {
    backgroundColor: themeConfig.colors.surface,
    borderBottom: `1px solid ${themeConfig.colors.border}`,
    color: themeConfig.colors.text,
  };

  const linkStyle = (isActive: boolean) => ({
    color: isActive ? themeConfig.colors.primary : themeConfig.colors.textSecondary,
    borderBottom: isActive ? `2px solid ${themeConfig.colors.primary}` : 'none',
  });

  return (
    <header style={headerStyle} className="fixed top-0 left-0 right-0 z-50 px-4 py-3 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Palette size={28} style={{ color: themeConfig.colors.primary }} />
          <h1 
            className="text-xl font-bold"
            style={{ 
              fontFamily: themeConfig.fonts.heading,
              color: themeConfig.colors.text 
            }}
          >
            ThemeSync
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 hover:opacity-80"
            style={linkStyle(isActiveLink('/'))}
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 hover:opacity-80"
            style={linkStyle(isActiveLink('/about'))}
          >
            <Info size={16} />
            <span>About</span>
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 hover:opacity-80"
            style={linkStyle(isActiveLink('/contact'))}
          >
            <Mail size={16} />
            <span>Contact</span>
          </Link>
        </nav>

        <div className="flex items-center">
          <select
            value={currentTheme}
            onChange={handleThemeChange}
            className="px-3 py-2 rounded-md border transition-all duration-200 focus:outline-none focus:ring-2"
            style={{
              backgroundColor: themeConfig.colors.surface,
              color: themeConfig.colors.text,
              borderColor: themeConfig.colors.border,
            }}
          >
            <option 
              value="theme1"
              style={{
                backgroundColor: themeConfig.colors.surface,
                color: themeConfig.colors.text,
              }}
            >
              Minimalist
            </option>
            <option 
              value="theme2"
              style={{
                backgroundColor: themeConfig.colors.surface,
                color: themeConfig.colors.text,
              }}
            >
              Dark Professional
            </option>
            <option 
              value="theme3"
              style={{
                backgroundColor: themeConfig.colors.surface,
                color: themeConfig.colors.text,
              }}
            >
              Vibrant Playful
            </option>
          </select>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden mt-3 flex justify-center space-x-4">
        <Link 
          to="/" 
          className="flex items-center space-x-1 px-2 py-1 rounded text-sm transition-all duration-200"
          style={linkStyle(isActiveLink('/'))}
        >
          <Home size={14} />
          <span>Home</span>
        </Link>
        <Link 
          to="/about" 
          className="flex items-center space-x-1 px-2 py-1 rounded text-sm transition-all duration-200"
          style={linkStyle(isActiveLink('/about'))}
        >
          <Info size={14} />
          <span>About</span>
        </Link>
        <Link 
          to="/contact" 
          className="flex items-center space-x-1 px-2 py-1 rounded text-sm transition-all duration-200"
          style={linkStyle(isActiveLink('/contact'))}
        >
          <Mail size={14} />
          <span>Contact</span>
        </Link>
      </nav>
    </header>
  );
}