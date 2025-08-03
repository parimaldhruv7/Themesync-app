
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function Home() {
  const { themeConfig } = useTheme();
  const { products, loading, error } = useProducts();

  const heroStyle = {
    backgroundColor: themeConfig.colors.surface,
    border: `1px solid ${themeConfig.colors.border}`,
  };

  const buttonStyle = {
    backgroundColor: themeConfig.colors.primary,
    color: '#ffffff',
  };

  const getLayoutClasses = () => {
    switch (themeConfig.layout) {
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      case 'sidebar':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-8">
        <div 
          className="text-center py-12 rounded-xl"
          style={{ backgroundColor: themeConfig.colors.surface, color: themeConfig.colors.text }}
        >
          <p className="text-lg font-medium mb-2">Oops! Something went wrong</p>
          <p style={{ color: themeConfig.colors.textSecondary }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Hero Section */}
      <section 
        style={heroStyle}
        className="rounded-2xl p-8 mb-12 text-center transition-all duration-300"
      >
        <div className="flex justify-center mb-4">
          <Sparkles 
            size={48} 
            style={{ color: themeConfig.colors.primary }}
            className="animate-pulse"
          />
        </div>
        
        <h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.text 
          }}
        >
          Welcome to ThemeSync
        </h1>
        
        <p 
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          Experience the power of dynamic theming. Switch between three unique visual identities 
          and see how design transforms user experience.
        </p>

        <button
          style={buttonStyle}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          <span>Explore Products</span>
          <ArrowRight size={16} />
        </button>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: TrendingUp, label: 'Active Users', value: '12.5K', growth: '+23%' },
          { icon: Sparkles, label: 'Themes Available', value: '3', growth: 'Live' },
          { icon: ArrowRight, label: 'Page Views', value: '45.2K', growth: '+12%' },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: themeConfig.colors.surface,
              border: `1px solid ${themeConfig.colors.border}`,
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon size={24} style={{ color: themeConfig.colors.primary }} />
              <span 
                className="text-sm font-medium px-2 py-1 rounded"
                style={{ 
                  backgroundColor: `${themeConfig.colors.primary}20`,
                  color: themeConfig.colors.primary 
                }}
              >
                {stat.growth}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1" style={{ color: themeConfig.colors.text }}>
              {stat.value}
            </h3>
            <p style={{ color: themeConfig.colors.textSecondary }}>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Products Section */}
      <section>
        <h2 
          className="text-3xl font-bold mb-8 text-center"
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.text 
          }}
        >
          Featured Products
        </h2>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className={getLayoutClasses()}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}