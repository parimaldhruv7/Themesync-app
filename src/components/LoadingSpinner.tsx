import { useTheme } from '../context/ThemeContext';

export function LoadingSpinner() {
  const { themeConfig } = useTheme();

  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div 
          className="w-12 h-12 rounded-full border-4 border-opacity-30 animate-spin"
          style={{ 
            borderColor: themeConfig.colors.primary,
            borderTopColor: themeConfig.colors.primary 
          }}
        ></div>
        <div 
          className="absolute inset-0 w-12 h-12 rounded-full border-4 border-transparent border-t-current animate-spin"
          style={{ color: themeConfig.colors.primary }}
        ></div>
      </div>
    </div>
  );
}