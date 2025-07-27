/**
 * Simple Application Controller
 * Handles initialization and dynamic content rendering without ES6 modules
 */

class App {
  constructor() {
    this.isInitialized = false;
    this.currentPage = 'home';
    this.data = {};
  }
  
  /**
   * Initialize the application
   */
  async init() {
    try {
      console.log('🚀 Initializing application...');
      
      // Load all data from data files
      await this.loadData();
      
      // Initialize UI components
      this.initializeMetaTags();
      this.initializeNavigation();
      this.initializeHero();
      this.initializeFooter();
      this.initializeTheme();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Remove loading state
      document.body.classList.remove('loading');
      
      this.isInitialized = true;
      console.log('✅ Application initialized successfully');
      
    } catch (error) {
      console.error('❌ Failed to initialize application:', error);
      this.showError('Failed to load application data');
    }
  }
  
  /**
   * Load data from our data files
   */
  async loadData() {
    // For now, we'll use static data
    this.data = {
      site: {
        name: "Alejandro Cabral",
        title: "Full-Stack Developer & Software Engineer",
        description: "I create beautiful, functional, and user-centered digital experiences. Currently studying Computer Science at FP-UNA while building innovative web applications with modern technologies.",
        urls: {
          domain: window.location.origin,
          images: {
            profile: "/images/programmer.jpg",
            ogImage: "/public/assets/images/og-image.jpg",
            favicon: "/images/favicon.svg"
          }
        },
        social: {
          github: {
            url: "https://github.com/alcabvaldo",
            username: "@alcabvaldo",
            icon: "fab fa-github"
          },
          linkedin: {
            url: "https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos-8253a9186/",
            username: "alejandro-nicolas-cabral-valdovinos",
            icon: "fab fa-linkedin-in"
          },
          twitter: {
            url: "https://twitter.com/alcabvaldo",
            username: "@alcabvaldo",
            icon: "fab fa-twitter"
          },
          email: {
            url: "mailto:alejandrocabralvaldovinos@gmail.com",
            icon: "fas fa-envelope"
          }
        },
        brand: {
          logo: {
            text: "AC"
          }
        },
        contact: {
          availability: {
            status: "available",
            message: "Available for work"
          }
        },
        legal: {
          copyright: "2024 Alejandro Cabral. All rights reserved."
        }
      },
      navigation: {
        main: [
          {
            id: "home",
            title: "Home",
            url: "/",
            icon: "fas fa-home",
            active: true,
            description: "Welcome to my portfolio"
          },
          {
            id: "about",
            title: "About",
            url: "/about",
            icon: "fas fa-user",
            active: false,
            description: "Learn more about me"
          },
          {
            id: "portfolio",
            title: "Portfolio",
            url: "/portfolio",
            icon: "fas fa-briefcase",
            active: false,
            description: "View my work and projects"
          },
          {
            id: "resume",
            title: "Resume",
            url: "/resume",
            icon: "fas fa-file-alt",
            active: false,
            description: "My professional experience"
          },
          {
            id: "blog",
            title: "Blog",
            url: "/blog",
            icon: "fas fa-blog",
            active: false,
            description: "Thoughts and tutorials"
          },
          {
            id: "contact",
            title: "Contact",
            url: "/contact",
            icon: "fas fa-envelope",
            active: false,
            description: "Get in touch with me"
          }
        ],
        actions: [
          {
            id: "theme-toggle",
            type: "button",
            icon: "fas fa-moon",
            iconDark: "fas fa-sun",
            title: "Toggle dark mode",
            action: "toggleTheme"
          }
        ]
      },
      hero: {
        greeting: "Hi, I'm",
        name: "Alejandro Cabral",
        title: "Full-Stack Developer & Software Engineer",
        description: "I create beautiful, functional, and user-centered digital experiences. Currently studying Computer Science at FP-UNA while building innovative web applications with modern technologies.",
        image: {
          src: "/images/programmer.jpg",
          alt: "Alejandro Cabral"
        },
        status: {
          show: true,
          type: "available",
          text: "Available for work"
        },
        actions: [
          {
            id: "view-work",
            text: "View My Work",
            icon: "fas fa-briefcase",
            url: "/portfolio",
            variant: "primary",
            order: 1
          },
          {
            id: "get-in-touch",
            text: "Get In Touch",
            icon: "fas fa-envelope",
            url: "/contact",
            variant: "secondary",
            order: 2
          },
          {
            id: "download-resume",
            text: "Download Resume",
            icon: "fas fa-download",
            url: "/assets/documents/alejandro-cabral-resume.pdf",
            variant: "outline",
            external: true,
            target: "_blank",
            order: 3
          }
        ],
        stats: [
          {
            id: "experience",
            number: 3,
            label: "Years Experience",
            suffix: "+",
            countAnimation: true,
            order: 1
          },
          {
            id: "projects",
            number: 25,
            label: "Projects Completed",
            suffix: "+",
            countAnimation: true,
            order: 2
          },
          {
            id: "technologies",
            number: 15,
            label: "Technologies",
            suffix: "+",
            countAnimation: true,
            order: 3
          }
        ]
      }
    };
  }
  
  /**
   * Initialize meta tags with dynamic data
   */
  initializeMetaTags() {
    const site = this.data.site;
    if (!site) return;
    
    // Update page title
    document.getElementById('page-title').textContent = `${site.name} - ${site.title}`;
    
    // Update meta tags
    this.updateMetaTag('meta-description', 'content', site.description);
    this.updateMetaTag('meta-author', 'content', site.name);
    
    // Update Open Graph tags
    this.updateMetaTag('og-title', 'content', `${site.name} - ${site.title}`);
    this.updateMetaTag('og-description', 'content', site.description);
    this.updateMetaTag('og-url', 'content', site.urls.domain);
    
    // Update Twitter Card tags
    this.updateMetaTag('twitter-title', 'content', `${site.name} - ${site.title}`);
    this.updateMetaTag('twitter-description', 'content', site.description);
  }
  
  /**
   * Initialize navigation with dynamic data
   */
  initializeNavigation() {
    const nav = this.data.navigation;
    const site = this.data.site;
    if (!nav || !site) return;
    
    // Update brand text
    document.getElementById('brand-text').textContent = site.brand.logo.text;
    
    // Render navigation items
    this.renderNavigationItems();
    
    // Render navigation actions
    this.renderNavigationActions();
  }
  
  /**
   * Render navigation menu items
   */
  renderNavigationItems() {
    const navList = document.getElementById('nav-list');
    const navItems = this.data.navigation.main;
    
    navList.innerHTML = navItems.map(item => `
      <li>
        <a href="${item.url}" 
           class="nav-link ${item.active ? 'active' : ''}" 
           data-page="${item.id}"
           title="${item.description}">
          <i class="${item.icon}" aria-hidden="true"></i>
          <span>${item.title}</span>
        </a>
      </li>
    `).join('');
  }
  
  /**
   * Render navigation actions (theme toggle, etc.)
   */
  renderNavigationActions() {
    const navActions = document.getElementById('nav-actions');
    const actions = this.data.navigation.actions || [];
    
    navActions.innerHTML = actions.map(action => {
      if (action.type === 'button') {
        return `
          <button class="${action.id}" 
                  aria-label="${action.title}" 
                  title="${action.title}"
                  data-action="${action.action}">
            <i class="${action.icon}" aria-hidden="true"></i>
          </button>
        `;
      }
      return '';
    }).join('');
  }
  
  /**
   * Initialize hero section with dynamic data
   */
  initializeHero() {
    const hero = this.data.hero;
    if (!hero) return;
    
    // Update hero text content
    document.getElementById('hero-greeting').textContent = hero.greeting;
    document.getElementById('hero-name').textContent = hero.name;
    document.getElementById('hero-subtitle').textContent = hero.title;
    document.getElementById('hero-description').textContent = hero.description;
    
    // Update hero image
    const heroImage = document.getElementById('hero-image');
    heroImage.src = hero.image.src;
    heroImage.alt = hero.image.alt;
    
    // Update status badge
    this.updateStatusBadge(hero.status);
    
    // Render hero actions
    this.renderHeroActions(hero.actions);
    
    // Render hero stats
    this.renderHeroStats(hero.stats);
  }
  
  /**
   * Update status badge
   */
  updateStatusBadge(status) {
    if (!status || !status.show) return;
    
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    
    statusDot.className = `status-dot ${status.type}`;
    statusText.textContent = status.text;
  }
  
  /**
   * Render hero action buttons
   */
  renderHeroActions(actions) {
    const heroActions = document.getElementById('hero-actions');
    if (!actions || !Array.isArray(actions)) return;
    
    heroActions.innerHTML = actions
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map(action => `
        <a href="${action.url}" 
           class="btn btn-${action.variant}" 
           ${action.external ? 'target="_blank" rel="noopener"' : ''}>
          <i class="${action.icon}"></i>
          <span>${action.text}</span>
        </a>
      `).join('');
  }
  
  /**
   * Render hero statistics
   */
  renderHeroStats(stats) {
    const heroStats = document.getElementById('hero-stats');
    if (!stats || !Array.isArray(stats)) return;
    
    heroStats.innerHTML = stats
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map(stat => `
        <div class="stat">
          <span class="stat-number" 
                data-count="${stat.number}"
                ${stat.countAnimation ? 'data-animate="true"' : ''}>
            ${stat.countAnimation ? '0' : stat.number}${stat.suffix || ''}
          </span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `).join('');
    
    // Initialize counter animations if needed
    if (stats.some(stat => stat.countAnimation)) {
      this.initializeCounterAnimations();
    }
  }
  
  /**
   * Initialize footer with dynamic data
   */
  initializeFooter() {
    const site = this.data.site;
    if (!site) return;
    
    this.renderFooterContent();
    this.renderFooterBottom();
  }
  
  /**
   * Render footer main content
   */
  renderFooterContent() {
    const footerContent = document.getElementById('footer-content');
    const site = this.data.site;
    
    const socialLinks = Object.entries(site.social).map(([key, social]) => `
      <a href="${social.url}" 
         target="_blank" 
         rel="noopener" 
         aria-label="${key.charAt(0).toUpperCase() + key.slice(1)}" 
         class="btn-social btn-${key}">
        <i class="${social.icon}"></i>
      </a>
    `).join('');
    
    footerContent.innerHTML = `
      <div class="footer-section">
        <h3>Connect</h3>
        <div class="social-links">
          ${socialLinks}
        </div>
      </div>
      
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul class="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Latest</h3>
        <div class="footer-update">
          <p>${site.contact.availability.message}</p>
          <span class="status-indicator ${site.contact.availability.status}"></span>
        </div>
      </div>
    `;
  }
  
  /**
   * Render footer bottom
   */
  renderFooterBottom() {
    const footerBottom = document.getElementById('footer-bottom');
    const site = this.data.site;
    
    footerBottom.innerHTML = `
      <p>${site.legal.copyright}</p>
      <p>Built with passion and modern web technologies.</p>
    `;
  }
  
  /**
   * Initialize theme system
   */
  initializeTheme() {
    // Set initial theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    this.setTheme(theme);
  }
  
  /**
   * Set theme
   */
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    // Update theme toggle icon
    const themeToggle = document.querySelector('.theme-toggle i');
    if (themeToggle) {
      themeToggle.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
  
  /**
   * Toggle theme between light and dark
   */
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
  
  /**
   * Initialize counter animations
   */
  initializeCounterAnimations() {
    const counters = document.querySelectorAll('[data-animate="true"]');
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-count'));
      const suffix = counter.textContent.replace(/[0-9]/g, '') || '';
      let current = 0;
      const increment = target / 50;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current) + suffix;
        }
      }, 40);
    };
    
    // Use Intersection Observer to trigger animations when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    
    counters.forEach(counter => observer.observe(counter));
  }
  
  /**
   * Set up event listeners
   */
  setupEventListeners() {
    // Theme toggle button clicks
    document.addEventListener('click', (event) => {
      if (event.target.closest('.theme-toggle')) {
        event.preventDefault();
        this.toggleTheme();
      }
    });
  }
  
  /**
   * Utility method to update meta tag
   */
  updateMetaTag(id, attribute, value) {
    const element = document.getElementById(id);
    if (element && value) {
      element.setAttribute(attribute, value);
    }
  }
  
  /**
   * Show error message to user
   */
  showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-banner';
    errorDiv.innerHTML = `
      <div class="error-content">
        <i class="fas fa-exclamation-triangle"></i>
        <span>${message}</span>
        <button class="error-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
    
    document.body.insertBefore(errorDiv, document.body.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.remove();
      }
    }, 5000);
  }
}

// Initialize the application when DOM is ready
const app = new App();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

// Export for potential external use
window.App = app;