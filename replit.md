# ShopHub - E-commerce Web Application

## Overview

ShopHub is a modern e-commerce web application built with React and TypeScript. It provides a complete online shopping experience with product browsing, detailed product pages, shopping cart functionality, and informational pages about shipping, returns, and policies. The application features a clean, responsive design using Tailwind CSS and shadcn/ui components, with Google AdSense integration for monetization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18.3.1 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- React Router (react-router-dom) for client-side routing and navigation

**Component Strategy**
- Functional components with React Hooks for state management
- shadcn/ui component library built on Radix UI primitives for accessible, customizable UI components
- Component composition pattern with reusable UI elements (Button, Card, Dialog, etc.)
- Custom components for domain-specific features (ProductCard, Navigation, Footer)

**Styling Approach**
- Tailwind CSS for utility-first styling with custom design system
- CSS variables for theme consistency (colors, shadows, transitions defined in index.css)
- Custom color palette with primary (teal/cyan), secondary (orange), and supporting colors
- Responsive design using Tailwind's breakpoint system
- Dark mode support via next-themes integration

**State Management**
- React Query (@tanstack/react-query) for server state management and caching
- Local component state using React hooks (useState, useEffect)
- Context API for global state when needed (Toast notifications)

**Form Handling**
- React Hook Form for form state management
- Zod resolver (@hookform/resolvers) for schema validation

### Routing Architecture

**Client-Side Routing**
- BrowserRouter for HTML5 history API routing
- Route definitions in App.tsx with catch-all 404 handling
- Programmatic navigation using Link components
- Custom 404 page with error logging

**Route Structure**
- `/` - Home page with hero section and featured products
- `/shop` - Product catalog with category filtering
- `/product/:id` - Individual product detail pages
- `/cart` - Shopping cart page
- `/about` - Company information
- `/contact` - Contact form
- `/shipping`, `/returns`, `/privacy`, `/terms` - Policy pages

**GitHub Pages Configuration**
- Custom 404.html for SPA redirect handling on client-side routes
- Base path set to '/' in vite.config.ts for root deployment
- Session storage redirect mechanism in index.html for proper route handling on refresh
- GitHub Actions workflow (.github/workflows/deploy.yml) for automated deployment
- Manual deployment option via `npm run deploy` using gh-pages package

### Data Management

**Product Data Structure**
- Static product data stored in `src/lib/products.ts`
- Product interface with id, name, price, category, image, description, features, and stock status
- Image assets stored in `src/assets` directory
- Product filtering and categorization logic in Shop component

**Cart Management**
- Local state-based cart implementation in Cart component
- Cart item structure with product reference and quantity
- Quantity adjustment and item removal functionality
- Subtotal, shipping, and total calculation logic

### Performance Optimizations

**Build Configuration**
- SWC (Speedy Web Compiler) for faster React compilation via @vitejs/plugin-react-swc
- Code splitting through React Router lazy loading capability
- Asset optimization through Vite's built-in bundling

**Development Tools**
- Lovable component tagger for development mode
- ESLint with TypeScript support for code quality
- Hot module replacement for instant feedback during development

### SEO & Analytics

**Search Engine Optimization**
- Meta tags for title, description, and author
- Open Graph protocol tags for social media sharing
- Twitter Card metadata
- Structured HTML with semantic elements

**Monetization**
- Google AdSense integration with client ID ca-pub-9666344690274882
- Ad placement configuration in index.html
- ads.txt file for publisher verification

**Search Engine Directives**
- robots.txt with explicit allow directives for major crawlers (Googlebot, Bingbot, Twitterbot, Facebook)

## External Dependencies

### UI Component Libraries
- **Radix UI** - Headless, accessible component primitives (accordion, dialog, dropdown, select, etc.)
- **shadcn/ui** - Pre-styled component library built on Radix UI
- **Lucide React** - Icon library for consistent iconography
- **cmdk** - Command menu component

### Utility Libraries
- **class-variance-authority** - CSS class variant management
- **clsx** & **tailwind-merge** - Conditional class name composition
- **date-fns** - Date manipulation and formatting
- **react-day-picker** - Calendar and date picker component

### Carousel & Media
- **embla-carousel-react** - Touch-enabled carousel/slider component

### Form Management
- **react-hook-form** - Performant form state management
- **@hookform/resolvers** - Validation resolver integration
- **input-otp** - OTP input component

### Theme & Styling
- **next-themes** - Theme switching (light/dark mode) support
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **PostCSS** & **Autoprefixer** - CSS processing and vendor prefixing

### Deployment
- **gh-pages** - GitHub Pages deployment automation
- **GitHub Actions** - Automated deployment workflow on push to main branch
- Deployed at: https://ecomerce-hubs.github.io/

### Development Tools
- **TypeScript** - Static type checking
- **ESLint** - Code linting with TypeScript and React plugins
- **Vite** - Build tool and development server
- **lovable-tagger** - Development-mode component tagging

### Advertising Platform
- **Google AdSense** - Display advertising integration for monetization