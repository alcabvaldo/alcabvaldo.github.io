# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website for Alejandro Cabral built with **Astro** and enhanced with scroll animations. Originally based on the HTML5 UP "Miniport" template, it has been migrated to a component-based architecture for better maintainability and development experience. It's deployed as a GitHub Pages site at alcabvaldo.github.io.

## Architecture

### Modern Astro Structure
- **Component-based application**: Built with Astro components for maintainability
- **Static site generation**: Zero JavaScript by default, with progressive enhancement
- **HTML5 UP Design**: Preserves the original "Miniport" template styling
- **Enhanced animations**: SAL.js for performant scroll animations
- **Responsive design**: Mobile-first approach with SCSS breakpoints

### File Organization
```
/
├── src/
│   ├── layouts/
│   │   └── Layout.astro            # Main HTML structure and scripts
│   ├── components/
│   │   ├── Navigation.astro        # Site navigation component
│   │   ├── Hero.astro             # Hero section with personal info
│   │   └── Contact.astro          # Contact section with social links
│   └── pages/
│       └── index.astro            # Main page composition
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css           # Compiled CSS (from original SCSS)
│   │   │   └── fontawesome-all.min.css
│   │   ├── js/                    # JavaScript dependencies
│   │   │   ├── main.js            # Custom site JavaScript
│   │   │   └── [vendor libs]      # jQuery, scrolling plugins
│   │   ├── sass/                  # SCSS source files (preserved)
│   │   │   ├── main.scss          # Main SCSS entry point
│   │   │   └── libs/              # SCSS partials and mixins
│   │   └── webfonts/              # FontAwesome font files
│   └── images/                    # Portfolio and profile images
├── docs/                          # Documentation and implementation plans
├── dist/                          # Built static files for deployment
├── astro.config.mjs              # Astro configuration
├── package.json                  # Node.js dependencies
└── tsconfig.json                 # TypeScript configuration
```

### Component Architecture
- **Layout.astro**: Main HTML structure, includes both jQuery (legacy) and SAL.js (modern) scripts
- **Navigation.astro**: Reusable navigation with section links
- **Hero.astro**: Personal information, profile image, and social links with data-driven content
- **Contact.astro**: Contact information and social media links with centralized data management

### Styling Architecture
- **SCSS-based**: Preserved original modular SCSS with imports from `libs/` directory
- **Breakpoint system**: Responsive design using defined breakpoints (small: 736px, medium: 737-980px, large: 981-1280px, xlarge: 1281-1680px)
- **CSS Grid**: Uses custom HTML grid system for responsive layouts
- **FontAwesome**: Integrated for social media icons

### Animation Architecture
- **SAL.js**: Modern scroll animations with CSS-powered performance
- **jQuery (Legacy)**: Preserved for existing scroll effects and compatibility
- **Progressive Enhancement**: Animations layer on top of functional design

## Development Workflow

### Astro Development
- **Development server**: `npm run dev` for hot reload development
- **Build process**: `npm run build` to generate static files in `dist/`
- **Preview build**: `npm run preview` to test production build locally
- **Component development**: Create new `.astro` files in `src/components/`

### Content Updates
- **Personal information**: Update data objects in `src/components/Hero.astro`
- **Contact information**: Modify data in `src/components/Contact.astro`
- **Navigation**: Add new sections in `src/components/Navigation.astro`
- **New pages**: Create `.astro` files in `src/pages/`

### Styling Development
- **SCSS files**: Modify in `public/assets/sass/` (original structure preserved)
- **Main entry point**: `public/assets/sass/main.scss`
- **Variables and mixins**: Located in `public/assets/sass/libs/`
- **Component styles**: Can be added directly in `.astro` components with `<style>` blocks

### Animation Development
- **SAL.js animations**: Add `data-sal` attributes to elements
- **Animation types**: `fade`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `zoom-in`, `zoom-out`
- **Timing control**: Use `data-sal-delay` and `data-sal-duration` for precise timing
- **jQuery animations**: Legacy animations still work alongside SAL.js

### Image Management
- **Static assets**: Place images in `public/images/` directory
- **Profile images**: Current profile image is `public/images/programmer.jpg` (4.2MB - consider optimization)
- **Favicon**: Located at `public/images/favicon.svg`
- **Optimization**: Use modern formats (WebP, AVIF) and appropriate sizing

## Key Features
- **Component-based architecture**: Reusable, maintainable Astro components
- **Modern scroll animations**: SAL.js for smooth, performant animations with progressive delays
- **Responsive design**: Mobile-first approach with SCSS breakpoints
- **SEO optimized**: Static generation for fast loading and search engine visibility
- **Developer experience**: Hot reload, TypeScript support, modern build tools
- **Legacy compatibility**: Preserves original jQuery functionality
- **Social media integration**: Centralized social links in component data

## Personal Information (Centralized Data)
- **Name**: Alejandro Cabral
- **Role**: Software Developer
- **Education**: Computer Science student at FP-UNA
- **Email**: alejandrocabralvaldovinos@gmail.com
- **Social Links**: GitHub, LinkedIn, Twitter, Instagram (URLs centralized in components)

## GitHub Pages Deployment
- **Automated deployment**: GitHub Actions can be configured for automatic builds
- **Static output**: Astro generates static files compatible with GitHub Pages
- **Branch deployment**: Currently deploys from `test_claude_branch`
- **Build directory**: Static files generated in `dist/` folder

## Future Extensibility
- **Work section**: Uncomment navigation link and create `src/components/Work.astro`
- **Portfolio section**: Add `src/components/Portfolio.astro` with project data
- **Blog functionality**: Can be added with Astro's content collections
- **Dark mode**: Easy to implement with CSS custom properties and component state