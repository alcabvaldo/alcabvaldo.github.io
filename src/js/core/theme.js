/**
 * Theme Management System
 * Handles dark/light theme switching and persistence
 */

class ThemeManager {
  constructor() {
    this.currentTheme = 'light';
    this.storageKey = 'portfolio-theme';
    this.themes = {
      light: {
        name: 'Light',
        icon: 'fas fa-sun'
      },
      dark: {
        name: 'Dark',
        icon: 'fas fa-moon'
      }
    };
    
    this.init();
  }
  
  /**
   * Initialize theme system
   */
  init() {
    // Get saved theme or use system preference
    const savedTheme = this.getSavedTheme();
    const systemTheme = this.getSystemTheme();
    const initialTheme = savedTheme || systemTheme;
    
    this.setTheme(initialTheme);
    this.setupEventListeners();
    
    console.log('🎨 Theme system initialized');
  }
  
  /**
   * Get saved theme from localStorage
   */
  getSavedTheme() {
    try {
      return localStorage.getItem(this.storageKey);
    } catch (error) {
      console.warn('Error reading theme from localStorage:', error);
      return null;
    }
  }
  
  /**
   * Get system color scheme preference
   */
  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  /**
   * Set theme
   */
  setTheme(theme) {
    if (!this.themes[theme]) {
      console.warn(`Theme '${theme}' not found, falling back to light`);
      theme = 'light';
    }
    
    this.currentTheme = theme;
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    try {
      localStorage.setItem(this.storageKey, theme);
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
    
    // Update theme toggle button
    this.updateThemeToggle();
    
    // Dispatch theme change event
    window.dispatchEvent(new CustomEvent('themeChange', {
      detail: { theme, previousTheme: this.currentTheme }
    }));
    
    console.log(`🎨 Theme changed to: ${theme}`);
  }
  
  /**
   * Toggle between light and dark themes
   */
  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
  
  /**
   * Update theme toggle button icon
   */
  updateThemeToggle() {
    const toggleButtons = document.querySelectorAll('.theme-toggle');
    const isDark = this.currentTheme === 'dark';
    
    toggleButtons.forEach(button => {
      const icon = button.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
      }
      
      // Update aria-label
      button.setAttribute('aria-label', 
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
      );
      
      // Update title
      button.setAttribute('title', 
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
      );
    });
  }
  
  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Theme toggle button clicks
    document.addEventListener('click', (event) => {
      if (event.target.closest('.theme-toggle')) {
        event.preventDefault();
        this.toggleTheme();
      }
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only update if user hasn't manually set a theme
      if (!this.getSavedTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
    
    // Keyboard shortcut (Ctrl/Cmd + Shift + D)
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'D') {
        event.preventDefault();
        this.toggleTheme();
      }
    });
  }
  
  /**
   * Get current theme
   */
  getCurrentTheme() {
    return this.currentTheme;
  }
  
  /**
   * Check if current theme is dark
   */
  isDarkTheme() {
    return this.currentTheme === 'dark';
  }
  
  /**
   * Get available themes
   */
  getAvailableThemes() {
    return Object.keys(this.themes);
  }
  
  /**
   * Get theme info
   */
  getThemeInfo(theme = this.currentTheme) {
    return this.themes[theme] || null;
  }
  
  /**
   * Reset theme to system preference
   */
  resetToSystemTheme() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (error) {
      console.warn('Error removing theme from localStorage:', error);
    }
    
    const systemTheme = this.getSystemTheme();
    this.setTheme(systemTheme);
  }
}

// Create global theme manager instance
const themeManager = new ThemeManager();

// Export for use in other modules
export default themeManager;

// Also attach to window for backward compatibility
window.ThemeManager = themeManager;