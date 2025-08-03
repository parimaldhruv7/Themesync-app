import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Mail, TrendingUp, Star, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Sidebar() {
  const { themeConfig } = useTheme();
  const location = useLocation();

  const sidebarStyle = {
    backgroundColor: themeConfig.colors.surface,
    borderRight: `1px solid ${themeConfig.colors.border}`,
    color: themeConfig.colors.text,
  };

  const links = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  const stats = [
    { icon: TrendingUp, label: 'Analytics', value: '2.4k' },
    { icon: Users, label: 'Users', value: '892' },
    { icon: Star, label: 'Reviews', value: '4.8' },
  ];

  return (
    <aside 
      style={sidebarStyle}
      className="fixed left-0 top-16 h-full w-64 p-6 transition-all duration-300 overflow-y-auto"
    >
      <nav className="space-y-2 mb-8">
        {links.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: isActive ? themeConfig.colors.primary : 'transparent',
                color: isActive ? '#ffffff' : themeConfig.colors.textSecondary,
              }}
            >
              <Icon size={20} />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t pt-6" style={{ borderColor: themeConfig.colors.border }}>
        <h3 
          className="text-sm font-semibold mb-4"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          Dashboard Stats
        </h3>
        <div className="space-y-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon size={16} style={{ color: themeConfig.colors.primary }} />
                <span className="text-sm" style={{ color: themeConfig.colors.textSecondary }}>
                  {label}
                </span>
              </div>
              <span className="font-semibold" style={{ color: themeConfig.colors.text }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}