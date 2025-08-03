import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Contact() {
  const { themeConfig } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const inputStyle = {
    backgroundColor: themeConfig.colors.surface,
    border: `1px solid ${themeConfig.colors.border}`,
    color: themeConfig.colors.text,
  };

  const buttonStyle = {
    backgroundColor: themeConfig.colors.primary,
    color: '#ffffff',
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@themesync.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '123 Design Street, Creative City',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 8AM-5PM PST',
      description: 'Weekend support available'
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.themesync.com',
      description: 'Visit our main website'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.text 
          }}
        >
          Get In Touch
        </h1>
        
        <p 
          className="text-lg md:text-xl max-w-2xl mx-auto"
          style={{ color: themeConfig.colors.textSecondary }}
        >
          Have questions about ThemeSync? We'd love to hear from you. 
          Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section 
          className="p-8 rounded-2xl transition-all duration-300"
          style={{
            backgroundColor: themeConfig.colors.surface,
            border: `1px solid ${themeConfig.colors.border}`,
          }}
        >
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ 
              fontFamily: themeConfig.fonts.heading,
              color: themeConfig.colors.text 
            }}
          >
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.text }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                  style={inputStyle}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: themeConfig.colors.text }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                  style={inputStyle}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: themeConfig.colors.text }}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
                style={inputStyle}
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: themeConfig.colors.text }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
                style={inputStyle}
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              style={buttonStyle}
              className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-6">
          <h2 
            className="text-2xl font-bold mb-6"
            style={{ 
              fontFamily: themeConfig.fonts.heading,
              color: themeConfig.colors.text 
            }}
          >
            Contact Information
          </h2>

          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: themeConfig.colors.surface,
                border: `1px solid ${themeConfig.colors.border}`,
              }}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: `${themeConfig.colors.primary}20` }}
                >
                  <info.icon size={24} style={{ color: themeConfig.colors.primary }} />
                </div>
                
                <div>
                  <h3 
                    className="text-lg font-semibold mb-1"
                    style={{ color: themeConfig.colors.text }}
                  >
                    {info.title}
                  </h3>
                  
                  <p 
                    className="font-medium mb-1"
                    style={{ color: themeConfig.colors.primary }}
                  >
                    {info.value}
                  </p>
                  
                  <p 
                    className="text-sm"
                    style={{ color: themeConfig.colors.textSecondary }}
                  >
                    {info.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Map Placeholder */}
          <div 
            className="h-64 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: themeConfig.colors.surface,
              border: `1px solid ${themeConfig.colors.border}`,
            }}
          >
            <div className="text-center">
              <MapPin 
                size={48} 
                style={{ color: themeConfig.colors.primary }}
                className="mx-auto mb-4"
              />
              <p 
                className="text-lg font-medium"
                style={{ color: themeConfig.colors.text }}
              >
                Interactive Map
              </p>
              <p 
                className="text-sm"
                style={{ color: themeConfig.colors.textSecondary }}
              >
                Visit us at our headquarters
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}