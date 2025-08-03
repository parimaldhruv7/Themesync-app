# ThemeSync - Multi-Theme Switcher Application

A professional React application demonstrating dynamic theme switching with three distinct visual identities. Built with TypeScript, React Router, and modern web technologies.

## 🚀 Features

- **Three Unique Themes**:
  - **Minimalist**: Clean design with light colors and Inter font
  - **Dark Professional**: Sophisticated dark theme with sidebar layout and Playfair Display
  - **Vibrant Playful**: Colorful theme with Pacifico font and gradient backgrounds

- **Advanced Functionality**:
  - Theme persistence using localStorage
  - Context API for state management
  - React Router with multiple pages
  - Fake Store API integration
  - Responsive design for all devices
  - Smooth theme transition animations
  - TypeScript for type safety

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd themesync-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Live Deployment

**Live Demo**: [https://themesync-app.netlify.app](https://themesync-app.netlify.app)

### Deployment Instructions

#### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

#### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set framework preset to "Vite"
3. Build command: `npm run build`
4. Output directory: `dist`

#### Environment Variables
No environment variables required - the app uses the public Fake Store API.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with theme switcher
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Sidebar.tsx     # Sidebar for dark theme
│   ├── ProductCard.tsx # Product display component
│   ├── LoadingSpinner.tsx # Loading state component
│   └── ThemeWrapper.tsx   # Theme styling wrapper
├── context/            # React Context providers
│   └── ThemeContext.tsx   # Theme state management
├── config/             # Configuration files
│   └── themes.ts       # Theme definitions
├── hooks/              # Custom React hooks
│   └── useProducts.ts  # Products data hook
├── pages/              # Route components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact page
├── services/           # API services
│   └── api.ts          # Fake Store API integration
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types
└── main.tsx           # Application entry point
```

## 🎨 Theme Architecture

### Theme Configuration
Each theme is defined with:
- **Colors**: Primary, secondary, accent, background, surface, text colors
- **Typography**: Heading and body font families
- **Layout**: Structure type (default, sidebar, grid)

### Theme Switching
- Smooth transitions with CSS animations
- Persistent storage using localStorage
- Context API for global state management
- Automatic font loading from Google Fonts

## 🔗 API Integration

The application integrates with the [Fake Store API](https://fakestoreapi.com/) to demonstrate real data handling:
- Product listing with images and details
- Error handling and loading states
- Responsive product cards
- TypeScript interfaces for data safety

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Tailored layouts for different screen sizes
- **Touch Friendly**: Appropriate touch targets and spacing
- **Cross-browser**: Compatible with all modern browsers

## 🔒 Security Features

- **TypeScript**: Compile-time type checking
- **Input Validation**: Form validation and sanitization
- **Error Boundaries**: Graceful error handling
- **XSS Protection**: Safe content rendering

## 🚀 Live Demo

[Visit Live Application](https://your-deployment-url.com)

## 📧 Contact

For questions or support, please contact:
- Email: support@themesync.com
- Website: www.themesync.com

## 📄 License

This project is licensed under the MIT License.