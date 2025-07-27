# Astro + Trig.js Implementation Plan

## Overview

This plan implements a **minimal-risk migration** to Astro using real data from your current site, ensuring identical functionality before adding modern features. We'll start with exact replication, then gradually enhance.

## Selected Tools

- **Static Site Generator**: Astro (Component-based, zero JS by default)
- **Animation Library**: Trig.js (CSS-powered performance) 
- **CSS Approach**: Keep existing HTML5 UP styles initially
- **Build System**: Vite (via Astro)
- **Deployment**: GitHub Pages with GitHub Actions

## Phase 1: Minimal Migration (Zero Visual Changes)

### 1.1 Project Initialization (Preserve Current Structure)

#### Initialize Astro Project Alongside Current
```bash
# Create in separate folder to avoid overwriting current working site
mkdir astro-migration
cd astro-migration
npm create astro@latest . -- --template minimal
npm install
```

#### Project Structure Setup (Preserve Current Assets)
```
astro-migration/
├── public/
│   ├── assets/                   # Copy entire assets folder from current
│   │   ├── css/
│   │   │   ├── main.css         # Your compiled CSS (keep as-is)
│   │   │   └── fontawesome-all.min.css
│   │   ├── js/                  # All your current JS files
│   │   │   ├── jquery.min.js
│   │   │   ├── jquery.scrolly.min.js
│   │   │   ├── jquery.scrollex.min.js
│   │   │   ├── browser.min.js
│   │   │   ├── breakpoints.min.js
│   │   │   ├── util.js
│   │   │   └── main.js          # Your current main.js
│   │   └── webfonts/            # FontAwesome fonts
│   ├── images/                  # Copy all your images
│   │   ├── programmer.jpg       # 4.2MB image (optimize later)
│   │   ├── favicon.svg
│   │   └── [all other images]
└── src/
    ├── layouts/
    │   └── Layout.astro         # Wrapper for current HTML structure
    └── pages/
        └── index.astro          # Exact copy of current content
```

### 1.2 Configuration Setup (Minimal)

#### Astro Configuration (GitHub Pages Ready)
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alcabvaldo.github.io',
  base: '/',
  output: 'static'
});
```

### 1.3 Exact Content Migration (Real Data Only)

#### Step 1: Base Layout Component (Exact HTML Copy)
```astro
---
// src/layouts/Layout.astro
export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!DOCTYPE HTML>
<!--
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
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
    
    <!-- Scripts - Exact copy from current site -->
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

#### Step 2: Main Page (Exact Content Copy - Real Data)
```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="Alejandro Cabral - Portfolio">
  <!-- Nav - Exact copy from current index.html -->
  <nav id="nav">
    <ul class="container">
      <li><a href="#top">Top</a></li>
      <!-- Work and Portfolio commented out as in original -->
      <!-- <li><a href="#work">Work</a></li>
      <li><a href="#portfolio">Portfolio</a></li> -->
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Home - Exact copy with real data -->
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

  <!-- Contact - Exact copy with real data -->
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

### 1.4 Phase 1 Testing & Verification

#### Testing Checklist
- [ ] Site loads and looks identical to current version
- [ ] Navigation scrolling works (jQuery scrolly)
- [ ] Fade-in animations work (jQuery scrollex)
- [ ] All social links work correctly
- [ ] Email contact link works
- [ ] Responsive design functions properly
- [ ] All assets load correctly (CSS, JS, images, fonts)

#### Benefits After Phase 1
- ✅ **Zero visual changes** - identical appearance and functionality
- ✅ **Astro structure** - now has component architecture
- ✅ **Hot reload** - `npm run dev` for development
- ✅ **Build process** - `npm run build` for production
- ✅ **Easy to extend** - ready for Phase 2 enhancements

## Phase 2: Gradual Trig.js Integration (After Phase 1 Complete)

### 2.1 Trig.js Setup (Alongside Existing jQuery)

#### Install Trig.js (Keep jQuery for Now)
```bash
npm install trig.js
```

#### Add Trig.js Script (Non-Breaking Addition)
```astro
<!-- Add to Layout.astro after existing jQuery scripts -->
<script src="/assets/js/jquery.min.js"></script>
<script src="/assets/js/jquery.scrolly.min.js"></script>
<script src="/assets/js/jquery.scrollex.min.js"></script>
<script src="/assets/js/browser.min.js"></script>
<script src="/assets/js/breakpoints.min.js"></script>
<script src="/assets/js/util.js"></script>
<script src="/assets/js/main.js"></script>

<!-- Add Trig.js - it will coexist with jQuery -->
<script>
  // Load Trig.js after existing scripts
  import('trig.js').then(() => {
    console.log('Trig.js loaded alongside jQuery');
  });
</script>
```

#### Gradual Trig.js Integration (Test Mode)
```astro
<!-- In index.astro, add data-trig to existing elements without breaking current animations -->
<article class="wrapper style4">
  <div id="top" class="container fadeIn" data-trig="fadeInUp">
    <!-- Keep existing classes, add data-trig for testing -->
    <!-- Current jQuery fadeIn will still work -->
    <!-- Trig.js will add additional animation when ready -->
    
    <div class="row">
      <div class="col-4 col-5-large col-12-medium">
        <span class="image fit blackAndWhite" data-trig="fadeInLeft">
          <img src="/images/programmer.jpg" alt="Computer with code" />
        </span>
      </div>
      <div class="col-8 col-7-large col-12-medium" data-trig="fadeInRight">
        <header>
          <h1>Hi. I'm <strong class="gradient-text">Alejandro Cabral</strong></h1>
        </header>
        <p>I'm a <strong>Software Developer</strong>, currently studying Computer Sciente at <a href="https://www.pol.una.py/">FP-UNA</a>.</p>
        <!-- Rest of content exactly the same -->
      </div>
    </div>
  </div>
</article>
```

## Phase 3: Component Organization (Future Enhancement)

### 3.1 Breaking Down Into Components (When Ready to Extend)

When you're ready to add new sections (Work, Portfolio), you can break the monolithic index.astro into components:

#### Example: Creating Navigation Component
```astro
---
// src/components/Navigation.astro (extract when needed)
---

<nav id="nav">
  <ul class="container">
    <li><a href="#top">Top</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- Future sections can be uncommented here -->
    <!-- <li><a href="#work">Work</a></li> -->
    <!-- <li><a href="#portfolio">Portfolio</a></li> -->
  </ul>
</nav>
```

#### Example: Creating Contact Component
```astro
---
// src/components/Contact.astro (extract when needed)
---

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
```

## Phase 4: GitHub Actions Deployment (Automated Publishing)

### 4.1 GitHub Actions Setup
```yaml
# .github/workflows/deploy.yml
name: Deploy Astro to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with Astro
        run: npm run build
      
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## Implementation Summary

### Phase 1: Minimal Migration (Priority: Critical)
**Goal**: Exact replication with Astro structure
**Time**: 2-3 hours
**Risk**: Zero (builds alongside current site)

**Steps**:
1. Create `astro-migration` folder
2. Copy all assets to `public/`
3. Create Layout.astro with exact HTML structure
4. Create index.astro with exact content copy
5. Test locally: `npm run dev`
6. Verify identical appearance and functionality

### Phase 2: Gradual Enhancement (After Phase 1 Complete)
**Goal**: Add Trig.js alongside existing jQuery
**Time**: 1-2 hours
**Risk**: Low (additive changes only)

**Steps**:
1. Install Trig.js
2. Add data-trig attributes to existing elements
3. Test both animation systems work together
4. Gradually replace jQuery animations

### Phase 3: Component Organization (Future)
**Goal**: Break monolithic code into components
**Time**: 2-3 hours
**Risk**: Low (internal restructuring)

**Steps**:
1. Extract Navigation component
2. Extract Contact component
3. Create reusable UI components as needed

### Phase 4: Deployment Automation (Anytime)
**Goal**: Automated GitHub Pages deployment
**Time**: 30 minutes
**Risk**: None (GitHub Actions only)

## Success Metrics

### After Phase 1
- [ ] Site looks 100% identical to current version
- [ ] All existing functionality works (scrolling, animations, links)
- [ ] Development server provides hot reload
- [ ] Build process generates clean output

### After Phase 2
- [ ] Trig.js animations work alongside jQuery
- [ ] Performance improvements measurable
- [ ] No regression in functionality

### After Phase 3
- [ ] Code is organized into logical components
- [ ] Easy to add new sections (Work, Portfolio)
- [ ] Maintainable and extensible structure

### After Phase 4
- [ ] Automated deployment on git push
- [ ] Reliable build process
- [ ] Zero manual deployment steps

---

**Next Step**: Start Phase 1 by creating the `astro-migration` folder and following the minimal migration steps. This ensures zero risk to your current working site while building the modern foundation.