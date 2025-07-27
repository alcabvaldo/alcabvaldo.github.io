# Minimal Astro Migration Plan

## Overview

This plan provides the **minimum changes necessary** to migrate your current static portfolio to Astro while preserving the exact same functionality and appearance.

## Current Project Analysis

Based on your actual `index.html` file:

### Active Content
- **Navigation**: Top, Contact links only
- **Hero Section**: Name "Alejandro Cabral", description, profile image
- **Contact Section**: Email link and social media links
- **Social Links**: GitHub, LinkedIn, Twitter, Instagram
- **Styling**: HTML5 UP Miniport template with SCSS
- **Scripts**: jQuery with scrolly, scrollex plugins

### Commented Out Sections
- Work Experience section (lines 50-84)
- Education section (lines 87-99) 
- Portfolio section (lines 102-153)

## Phase 1: Minimal Astro Setup

### 1.1 Initialize Astro Project (Preserve Current Structure)

```bash
# Create Astro project in a new folder (don't overwrite current)
mkdir astro-portfolio
cd astro-portfolio
npm create astro@latest . -- --template minimal
npm install
```

### 1.2 Migrate Existing CSS/JS Assets

Copy your current assets to preserve styling:
```
astro-portfolio/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css          # Copy from current
│   │   │   └── fontawesome-all.min.css
│   │   ├── js/
│   │   │   ├── jquery.min.js     # Copy all current JS
│   │   │   ├── jquery.scrolly.min.js
│   │   │   ├── jquery.scrollex.min.js
│   │   │   ├── browser.min.js
│   │   │   ├── breakpoints.min.js
│   │   │   ├── util.js
│   │   │   └── main.js
│   │   └── webfonts/             # Copy FontAwesome fonts
│   ├── images/                   # Copy all your images
│   │   ├── programmer.jpg
│   │   ├── favicon.svg
│   │   └── [other images...]
└── src/
    ├── layouts/
    │   └── Layout.astro
    └── pages/
        └── index.astro
```

### 1.3 Create Layout Component (Exact Copy)

```astro
---
// src/layouts/Layout.astro
export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!DOCTYPE HTML>
<html>
  <head>
    <title>{title}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="/assets/css/main.css" />
    <link rel="icon" type="image/x-icon" href="/images/favicon.svg">
  </head>
  <body class="is-preload">
    <slot />
    
    <!-- Scripts - Exact copy from current -->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/jquery.scrolly.min.js"></script>
    <script src="/assets/js/jquery.scrollex.min.js"></script>
    <script src="/assets/js/browser.min.js"></script>
    <script src="/assets/js/breakpoints.min.js"></script>
    <script src="/assets/js/util.js"></script>
    <script src="/assets/js/main.js"></script>
  </body>
</html>
```

### 1.4 Create Main Page (Exact Content Copy)

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="Alejandro Cabral - Portfolio">
  <!-- Nav - Exact copy -->
  <nav id="nav">
    <ul class="container">
      <li><a href="#top">Top</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Home - Exact copy -->
  <article class="wrapper style4">
    <div id="top" class="container fadeIn">
      <div class="row">
        <div class="col-4 col-5-large col-12-medium">
          <span class="image fit blackAndWhite">
            <img src="/images/programmer.jpg" alt="Computer with code" />
          </span>
        </div>
        <div class="col-8 col-7-large col-12-medium">
          <header>
            <h1>Hi. I'm <strong class="gradient-text">Alejandro Cabral</strong></h1>
          </header>
          <p>I'm a <strong>Software Developer</strong>, currently studying Computer Sciente at <a href="https://www.pol.una.py/">FP-UNA</a>.</p>
          &nbsp
          <ul class="social">
            <li><a href="https://github.com/alcabvaldo" class="icon brands fa-github"><span class="label">Github</span></a></li>
            <li><a href="https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos-8253a9186/" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </article>

  <!-- Contact - Exact copy -->
  <article id="contact" class="wrapper style4">
    <div class="container medium">
      <a href="mailto:alejandrocabralvaldovinos@gmail.com" class="button large scrolly">Contact</a>
      <footer>
        <h3 class="gradient-text">Find me on ...</h3>
        <ul class="social">
          <li><a href="https://github.com/alcabvaldo" class="icon brands fa-github"><span class="label">Github</span></a></li>
          <li><a href="https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos-8253a9186/0" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
          <li><a href="https://twitter.com/alcabvaldo" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href="https://www.instagram.com/ale_cabr4l/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
        </ul>
        <hr>
        <ul id="copyright">
          <li>&copy; Untitled. All rights reserved.</li>
          <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </footer>
    </div>
  </article>
</Layout>
```

### 1.5 Configure Astro for GitHub Pages

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alcabvaldo.github.io',
  base: '/',
  output: 'static'
});
```

## Phase 1 Results

After Phase 1, you will have:
- ✅ **Identical appearance** - Uses same CSS, HTML structure, and scripts
- ✅ **Same functionality** - jQuery animations and scrolling work exactly the same
- ✅ **Astro structure** - Now using components and layouts
- ✅ **Development server** - `npm run dev` for hot reload
- ✅ **Build process** - `npm run build` generates static files

**No visual changes** - Your site will look and behave exactly the same.

## Phase 2: Trig.js Integration (Optional After Phase 1)

Only after Phase 1 is complete and tested, we can gradually replace jQuery animations:

### 2.1 Add Trig.js (Alongside jQuery Initially)

```bash
npm install trig.js
```

### 2.2 Create Animation Script
```astro
<!-- Add to Layout.astro after existing scripts -->
<script>
  // Load Trig.js after page loads
  import('trig.js').then(() => {
    // Trig.js will auto-initialize
  });
</script>
```

### 2.3 Add Trig.js Attributes (Gradually)

```astro
<!-- Add data-trig attributes to existing elements -->
<div id="top" class="container fadeIn" data-trig="fadeInUp">
  <!-- existing content -->
</div>
```

## Migration Steps

### Step 1: Setup (15 minutes)
1. Create new `astro-portfolio` folder
2. Initialize Astro project
3. Copy all assets from current project

### Step 2: Test (10 minutes)
1. Run `npm run dev`
2. Verify site looks identical
3. Test all links and animations

### Step 3: Deploy (10 minutes)
1. Configure GitHub Actions (if desired)
2. OR manually build and copy `dist/` to main project

### Step 4: Replace Original (5 minutes)
Only after everything is tested and working

## Benefits After Phase 1

- **Component structure** for future development
- **Hot reload** development server
- **Build optimization** (automatic minification)
- **Same functionality** as current site
- **Easy to extend** with new sections later

This approach ensures **zero risk** - you keep your working site while building the new one.

## Real Data Extracted From Your Current Site

### Personal Information
- **Name**: "Alejandro Cabral"
- **Role**: "Software Developer"
- **Description**: "I'm a Software Developer, currently studying Computer Sciente at FP-UNA"
- **Email**: alejandrocabralvaldovinos@gmail.com

### Social Links (Actual URLs from your site)
- **GitHub**: https://github.com/alcabvaldo
- **LinkedIn**: https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos-8253a9186/
- **Twitter**: https://twitter.com/alcabvaldo
- **Instagram**: https://www.instagram.com/ale_cabr4l/

### Current Assets
- **Main Image**: programmer.jpg (4.2MB - needs optimization)
- **Favicon**: favicon.svg
- **CSS**: HTML5 UP Miniport template styles
- **Scripts**: jQuery-based animations with scrolly/scrollex plugins

### Navigation Structure
- Currently only "Top" and "Contact" sections are active
- Work, Education, and Portfolio sections are commented out but ready to uncomment

This migration preserves everything exactly as it is now, with no assumptions or fake data.