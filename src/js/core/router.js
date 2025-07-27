/**
 * Simple Router
 * Basic client-side routing for single-page application
 */

class SimpleRouter {
  constructor() {
    this.routes = new Map();
    this.currentPage = 'home';
    this.init();
  }
  
  /**
   * Initialize router
   */
  init() {
    // Register default routes
    this.addRoute('', () => this.loadPage('home'));
    this.addRoute('home', () => this.loadPage('home'));
    this.addRoute('about', () => this.loadPage('about'));
    this.addRoute('portfolio', () => this.loadPage('portfolio'));
    this.addRoute('resume', () => this.loadPage('resume'));
    this.addRoute('blog', () => this.loadPage('blog'));
    this.addRoute('contact', () => this.loadPage('contact'));
    
    // Handle initial route
    this.handleRoute();
    
    // Listen for navigation events
    this.setupEventListeners();
    
    console.log('🧭 Router initialized');
  }
  
  /**
   * Add a route
   */
  addRoute(path, handler) {
    this.routes.set(path, handler);
  }
  
  /**
   * Handle current route
   */
  handleRoute() {
    const path = this.getCurrentPath();
    const handler = this.routes.get(path) || this.routes.get('home');
    
    if (handler) {
      try {
        handler();
      } catch (error) {
        console.error('Route handler error:', error);
        this.showError('Failed to load page. Please try again.');
      }
    } else {
      console.warn('No handler found for path:', path);
      this.loadPage('home');
    }
  }
  
  /**
   * Get current path
   */
  getCurrentPath() {
    const hash = window.location.hash.replace('#', '');
    const path = window.location.pathname.replace('/', '');
    return hash || path || 'home';
  }
  
  /**
   * Navigate to a page
   */
  navigate(path) {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }
    
    window.location.hash = path;
    this.handleRoute();
  }
  
  /**
   * Load a page
   */
  async loadPage(pageName) {
    try {
      console.log(`Loading page: ${pageName}`);
      
      // Update active navigation
      this.updateActiveNavigation(pageName);
      
      // For now, just update the current page
      this.currentPage = pageName;
      
      // Show page content based on current page
      this.showPageContent(pageName);
      
    } catch (error) {
      console.error('Error loading page:', error);
      this.showError('Failed to load page. Please try again.');
    }
  }
  
  /**
   * Show page content
   */
  showPageContent(pageName) {
    // For the home page, just ensure content is visible
    if (pageName === 'home') {
      // The content is already on the page, so nothing more to do
      return;
    }
    
    // For other pages, we would load different content
    // For now, just show a placeholder
    const pageContent = document.getElementById('page-content');
    if (pageContent) {
      pageContent.innerHTML = `
        <div class="page-placeholder">
          <div class="container">
            <h2>${pageName.charAt(0).toUpperCase() + pageName.slice(1)} Page</h2>
            <p>Content for the ${pageName} page will be loaded here.</p>
            <a href="#home" class="btn btn-primary">Back to Home</a>
          </div>
        </div>
      `;
    }
  }
  
  /**
   * Update active navigation
   */
  updateActiveNavigation(pageName) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    
    // Add active class to current nav link
    const activeLink = document.querySelector(`[data-page="${pageName}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
  
  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Handle hash changes
    window.addEventListener('hashchange', () => {
      this.handleRoute();
    });
    
    // Handle navigation clicks
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[data-page]');
      if (link) {
        event.preventDefault();
        const page = link.getAttribute('data-page');
        this.navigate(page);
      }
    });
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });
  }
  
  /**
   * Show error message
   */
  showError(message) {
    console.error(message);
    
    // You could show a toast notification here
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #f44336;
      color: white;
      padding: 15px;
      border-radius: 5px;
      z-index: 10000;
    `;
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.remove();
      }
    }, 5000);
  }
  
  /**
   * Get current page
   */
  getCurrentPage() {
    return this.currentPage;
  }
}

// Create router instance
const router = new SimpleRouter();

// Export for use in other modules
export default router;

// Also attach to window for backward compatibility
window.Router = router;