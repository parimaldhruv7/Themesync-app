
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { themeConfig } = useTheme();

  const cardStyle = {
    backgroundColor: themeConfig.colors.surface,
    border: `1px solid ${themeConfig.colors.border}`,
    color: themeConfig.colors.text,
  };

  const buttonStyle = {
    backgroundColor: themeConfig.colors.primary,
    color: '#ffffff',
  };

  return (
    <div 
      style={cardStyle}
      className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex flex-col h-full"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 
          className="text-lg font-semibold mb-2 line-clamp-2"
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.text 
          }}
        >
          {product.title}
        </h3>
        
        <p 
          className="text-sm mb-3 line-clamp-2"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span 
            className="text-xl font-bold"
            style={{ color: themeConfig.colors.primary }}
          >
            ${product.price.toFixed(2)}
          </span>
          
          <div className="flex items-center space-x-1">
            <Star 
              size={16} 
              fill={themeConfig.colors.accent}
              style={{ color: themeConfig.colors.accent }}
            />
            <span 
              className="text-sm font-medium"
              style={{ color: themeConfig.colors.textSecondary }}
            >
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>

        <button
          style={buttonStyle}
          className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-auto"
        >
          <ShoppingCart size={16} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}