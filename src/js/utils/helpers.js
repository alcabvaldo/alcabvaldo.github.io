/**
 * Helper Utilities
 * Common utility functions used throughout the application
 */

// DOM Utilities
export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

// Element creation helper
export const createElement = (tag, className = '', content = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
};

// Event delegation helper
export const delegate = (selector, event, handler) => {
  document.addEventListener(event, (e) => {
    if (e.target.matches(selector)) {
      handler(e);
    }
  });
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Format date utility
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
};

// Slugify function
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

// Smooth scroll to element
export const scrollToElement = (selector, offset = 0) => {
  const element = $(selector);
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Get URL parameters
export const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params) {
    result[key] = value;
  }
  return result;
};

// Set URL parameter
export const setUrlParam = (key, value) => {
  const url = new URL(window.location);
  url.searchParams.set(key, value);
  window.history.pushState({}, '', url);
};

// Storage helpers
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('Error reading from localStorage:', error);
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn('Error writing to localStorage:', error);
      return false;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('Error removing from localStorage:', error);
      return false;
    }
  }
};

// Animation helpers
export const fadeIn = (element, duration = 300) => {
  element.style.opacity = 0;
  element.style.display = 'block';
  
  const start = performance.now();
  
  const animate = (timestamp) => {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    
    element.style.opacity = progress;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};

export const fadeOut = (element, duration = 300) => {
  const start = performance.now();
  const startOpacity = parseFloat(getComputedStyle(element).opacity);
  
  const animate = (timestamp) => {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    
    element.style.opacity = startOpacity * (1 - progress);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
    }
  };
  
  requestAnimationFrame(animate);
};

// Loading state helpers
export const showLoading = (element, text = 'Loading...') => {
  element.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>${text}</p>
    </div>
  `;
};

export const hideLoading = (element) => {
  const loading = element.querySelector('.loading-spinner');
  if (loading) {
    loading.remove();
  }
};

// Error handling
export const showError = (message, container = document.body) => {
  const errorDiv = createElement('div', 'error-banner', `
    <div class="error-content">
      <i class="fas fa-exclamation-triangle"></i>
      <span>${message}</span>
      <button class="error-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `);
  
  container.insertBefore(errorDiv, container.firstChild);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove();
    }
  }, 5000);
};

// Device detection
export const device = {
  isMobile: () => window.innerWidth <= 768,
  isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
  isDesktop: () => window.innerWidth > 1024,
  isTouchDevice: () => 'ontouchstart' in window || navigator.maxTouchPoints > 0
};

// Browser detection
export const browser = {
  isChrome: () => /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
  isFirefox: () => /Firefox/.test(navigator.userAgent),
  isSafari: () => /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
  isEdge: () => /Edg/.test(navigator.userAgent)
};

// Performance helpers
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

// Default export for convenience
export default {
  $,
  $$,
  createElement,
  delegate,
  debounce,
  throttle,
  formatDate,
  slugify,
  scrollToElement,
  isInViewport,
  getUrlParams,
  setUrlParam,
  storage,
  fadeIn,
  fadeOut,
  showLoading,
  hideLoading,
  showError,
  device,
  browser,
  measurePerformance
};