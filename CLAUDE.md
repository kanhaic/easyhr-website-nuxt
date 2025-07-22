# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 website for EasyHR, an HR software company. The site is built as a static generated marketing website with content management via Contentful CMS. The architecture focuses on performance, SEO optimization, and content flexibility.

## Development Commands

### Setup & Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# Starts development server on http://localhost:3000
```

### Build & Deployment
```bash
npm run generate
# Builds static site for production deployment

npm run preview
# Preview production build locally
```

### Other Commands
```bash
npm run build
# Standard Nuxt build (for SSR deployment)

npm run postinstall
# Prepares Nuxt (runs automatically after npm install)
```

## Architecture & Structure

### Content Management
- **Contentful CMS**: All dynamic content is managed through Contentful
- **Content Types**: Landing pages, blogs, features, testimonials, FAQs
- **Configuration**: Contentful space ID and access token in `nuxt.config.ts` runtime config
- **Data Fetching**: Uses `useAsyncData()` for server-side content fetching
- **Rich Text**: Contentful rich text rendered with `@contentful/rich-text-html-renderer`

### Component Patterns
- **Flat Structure**: All components in `/components` directory without nested folders
- **Props-Driven**: Components receive all data via props from pages
- **TypeScript**: Complex prop validation with TypeScript interfaces
- **Lazy Loading**: Non-critical components prefixed with `Lazy` for performance
- **Image Optimization**: Uses `NuxtImg` with Contentful provider

### Page Architecture
- **Pages as Orchestrators**: Pages fetch data and distribute to components
- **Dynamic Routing**: Uses `[slug].vue` pattern for content-driven pages
- **SEO**: Each page handles its own meta tags via `useHead()`

### Styling System
- **Tailwind CSS**: Utility-first styling with extensive responsive design
- **Headless UI**: Complex interactive components (dialogs, popovers, etc.)
- **Design System**: Consistent color palette (indigo/blue primary, gray neutrals)
- **Typography**: Inter font family loaded via Google Fonts

### Data Flow
1. Pages fetch content from Contentful at build time
2. Data transformed into component-friendly formats
3. Props passed down to presentational components
4. Components handle rendering and user interactions

### Performance Optimizations
- **Static Generation**: Pre-renders all pages at build time
- **Image Optimization**: WebP format with responsive sizing
- **Lazy Loading**: Strategic component and image lazy loading
- **Caching**: Aggressive caching headers via Netlify configuration
- **Bundle Splitting**: Automatic code splitting by Nuxt

### Deployment
- **Platform**: Netlify (configured via `netlify.toml`)
- **Build**: `npm run generate` creates static files in `.output/public`
- **Security Headers**: CSP, XSS protection, and other security headers configured
- **Redirects**: HTTP to HTTPS redirect enforced

### Key Integrations
- **Analytics**: Google Analytics via `nuxt-gtag` module
- **SEO**: Comprehensive meta tags, sitemaps, robots.txt
- **Performance**: Delay hydration for better Core Web Vitals
- **Content**: Rich text rendering with embedded asset support

### Form Handling
- Forms submit to external webhook endpoints
- Client-side validation with comprehensive user tracking
- UTM parameter capture for marketing attribution
- Success/error handling with user feedback
- Business email validation via `useEmailValidation()` composable to prevent free email signups

## Development Guidelines

### Content Updates
- Most content changes happen in Contentful CMS, not code
- Rebuild site after content changes to reflect updates
- Use Contentful preview for content staging

### Component Development
- Follow existing props pattern with TypeScript validation
- Use Tailwind utilities for styling consistency
- Implement lazy loading for non-critical components
- Optimize images with appropriate loading strategies
- Use `useEmailValidation()` composable for business email validation in forms

### Performance Considerations
- Always use `NuxtImg` for images with `provider="contentful"`
- Implement lazy loading for below-the-fold content
- Test with Netlify build process before deploying

### SEO Requirements
- Each page must define appropriate meta tags
- Use structured data where applicable
- Ensure proper heading hierarchy (h1, h2, etc.)
- Optimize Core Web Vitals scores