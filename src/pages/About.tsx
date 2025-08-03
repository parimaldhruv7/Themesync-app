
import { Target, Users, Lightbulb, Rocket, Shield, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function About() {
  const { themeConfig } = useTheme();

  const features = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We believe great design should be accessible and adaptable to every users preferences and needs.'
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Every decision we make prioritizes user experience and accessibility across all devices and contexts.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of whats possible with modern web technologies and design patterns.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Lightning-fast theme switching with optimized animations and seamless user interactions.'
    },
    {
      icon: Shield,
      title: 'Reliable',
      description: 'Built with TypeScript and modern React patterns for maintainable, type-safe applications.'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Crafted with attention to detail and a genuine love for beautiful, functional interfaces.'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Torres',
      role: 'UX Researcher',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.text 
          }}
        >
          About ThemeSync
        </h1>
        
        <p 
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: themeConfig.colors.textTertiary }}
        >
          We're pioneering the future of adaptive user interfaces. ThemeSync demonstrates how 
          applications can transform not just in appearance, but in structure and behavior to 
          match user preferences and contexts.
        </p>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.text 
          }}
        >
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                backgroundColor: themeConfig.colors.surface,
                border: `1px solid ${themeConfig.colors.border}`,
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="p-3 rounded-lg mr-4"
                  style={{ backgroundColor: `${themeConfig.colors.primary}20` }}
                >
                  <feature.icon size={24} style={{ color: themeConfig.colors.primary }} />
                </div>
                <h3 
                  className="text-xl font-semibold"
                  style={{ 
                    fontFamily: themeConfig.fonts.heading,
                    color: themeConfig.colors.text 
                  }}
                >
                  {feature.title}
                </h3>
              </div>
              
              <p style={{ color: themeConfig.colors.textSecondary }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.text 
          }}
        >
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: themeConfig.colors.surface,
                border: `1px solid ${themeConfig.colors.border}`,
              }}
            >
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ 
                  fontFamily: themeConfig.fonts.heading,
                  color: themeConfig.colors.text 
                }}
              >
                {member.name}
              </h3>
              
              <p 
                className="font-medium"
                style={{ color: themeConfig.colors.primary }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="text-center p-12 rounded-2xl"
        style={{
          backgroundColor: themeConfig.colors.surface,
          border: `1px solid ${themeConfig.colors.border}`,
        }}
      >
        <h2 
          className="text-3xl font-bold mb-4"
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.text 
          }}
        >
          Ready to Transform Your Experience?
        </h2>
        
        <p 
          className="text-lg mb-6"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          Try switching between our three unique themes and discover how design shapes interaction.
        </p>

        <button
          className="px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: themeConfig.colors.primary,
            color: '#ffffff',
          }}
        >
          Get Started Today
        </button>
      </section>
    </div>
  );
}