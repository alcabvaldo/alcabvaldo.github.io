# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Alejandro Cabral built using the HTML5 UP "Miniport" template. It's a GitHub Pages site hosted at alcabvaldo.github.io.

## Architecture

### Frontend Structure
- **Single-page application**: The site is contained in `index.html`
- **HTML5 UP Template**: Based on the "Miniport" template with custom modifications
- **Responsive design**: Uses a mobile-first approach with breakpoints defined in SCSS

### File Organization
```
/
├── index.html              # Main HTML file containing the entire site
├── assets/
│   ├── css/
│   │   ├── main.css        # Compiled CSS (generated from SCSS)
│   │   └── fontawesome-all.min.css
│   ├── js/                 # JavaScript dependencies and main script
│   │   ├── main.js         # Custom site JavaScript
│   │   └── [vendor libs]   # jQuery, scrolling plugins, utilities
│   ├── sass/               # SCSS source files
│   │   ├── main.scss       # Main SCSS entry point
│   │   └── libs/           # SCSS partials and mixins
│   └── webfonts/           # FontAwesome font files
└── images/                 # Portfolio and profile images
```

### Styling Architecture
- **SCSS-based**: Uses modular SCSS with imports from `libs/` directory
- **Breakpoint system**: Responsive design using defined breakpoints (small: 736px, medium: 737-980px, large: 981-1280px, xlarge: 1281-1680px)
- **CSS Grid**: Uses custom HTML grid system for responsive layouts
- **FontAwesome**: Integrated for social media icons

### JavaScript Architecture
- **jQuery-based**: Uses jQuery for DOM manipulation and animations
- **Scroll effects**: Implements scrolling animations via jquery.scrolly and jquery.scrollex
- **Responsive utilities**: Breakpoint detection and mobile-specific behaviors

## Development Workflow

### CSS Development
- Modify SCSS files in `assets/sass/` rather than editing `main.css` directly
- Main entry point is `assets/sass/main.scss`
- Component styles are in `assets/sass/_components.scss`
- Variables and mixins are in `assets/sass/libs/`
- Compile SCSS to CSS using: `npm run build:css`
- Watch for changes: `npm run watch:css`

### JavaScript Development
- Main application logic is in `assets/js/app.js`
- Content configuration is in `assets/js/content.js`
- Theme configuration is in `assets/js/palette.js`
- All content is loaded dynamically from these configuration files

### Development Commands
```bash
npm run dev          # Start development server with live reload
npm run build:css    # Compile SCSS to CSS
npm run watch:css    # Watch SCSS changes and auto-compile
npm run lint:css     # Lint SCSS files
npm run format       # Format HTML/JS files
```

### Content Updates
- **Dynamic Content**: All content is loaded from `assets/js/content.js`
- **Personal Information**: Update personal details, contact info, and bio in the `CONTENT.personal` object
- **Skills & Experience**: Modify the `CONTENT.skills` and `CONTENT.experience` objects
- **Portfolio Projects**: Add/edit projects in the `CONTENT.portfolio.projects` array
- **Blog Articles**: Manage articles in the `CONTENT.blog.articles` array
- **Social Links**: Update social media links in the `CONTENT.social` array

### Theme Customization
- **Color Themes**: Multiple built-in themes in `assets/js/palette.js`
- **Theme Switching**: Users can switch between light/dark themes
- **Custom Themes**: Add new themes to the `PALETTE.themes` object
- **CSS Variables**: All colors use CSS custom properties for easy theming

### Image Management
- **Profile Images**: Main profile photo in `images/` directory
- **Project Images**: Portfolio project screenshots in `images/projects/`
- **Blog Images**: Article featured images in `images/blog/`
- **Favicon**: Site favicon is `images/favicon.svg`
- **Image Optimization**: Use `npm run optimize:images` to optimize all images

### Document Management
- **Resume/CV**: Downloadable PDF resume in `assets/documents/`
- **File Path**: Configure resume path in `CONTENT.personal.resumePDF`

## Key Features
- **Dynamic Content Loading**: All content loaded from JavaScript configuration files
- **Multi-theme Support**: Light, dark, ocean, and sunset themes with automatic switching
- **Responsive Design**: Mobile-first approach with multiple breakpoints
- **Professional Sections**: Home, About, Skills, Experience, Portfolio, Education, Blog, Contact
- **Interactive Elements**: Smooth scrolling, fade-in animations, hover effects
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Contact Form**: Working contact form with validation
- **Portfolio Filtering**: Filter projects by category
- **Theme Persistence**: User theme preference saved in localStorage
- **Print Styles**: Optimized for printing/PDF generation

## GitHub Pages Deployment
This repository is configured for GitHub Pages deployment. Any changes pushed to the main branch will automatically deploy to the live site.