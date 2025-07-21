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
- Compile SCSS to CSS using a Sass processor
- Variables and mixins are in `assets/sass/libs/`

### Content Updates
- Main content is in `index.html`
- Some sections are commented out (Work, Education, Portfolio) but can be uncommented and customized
- Social media links and contact information are in the Contact section

### Image Management
- Profile and project images go in the `images/` directory
- Favicon is `images/favicon.svg`
- Ensure images are optimized for web use

## Key Features
- **Smooth scrolling navigation**: Implemented with jquery.scrolly
- **Fade-in animations**: Elements with `.fadeIn` class animate on load
- **Black and white image effects**: Custom CSS animations for profile image
- **Gradient text effects**: Applied to name and headings
- **Social media integration**: Links to GitHub, LinkedIn, Twitter, Instagram

## GitHub Pages Deployment
This repository is configured for GitHub Pages deployment. Any changes pushed to the main branch will automatically deploy to the live site.