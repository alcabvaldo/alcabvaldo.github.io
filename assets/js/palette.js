/**
 * Color Palette and Theme Configuration
 * Centralized theming system for the portfolio website
 */

const PALETTE = {
  // Color Themes
  themes: {
    default: {
      name: "Default",
      primary: "#4acaa8",
      primaryDark: "#2a9d8f",
      primaryLight: "#6dd5c0",
      secondary: "#f4a261",
      secondaryDark: "#e76f51",
      secondaryLight: "#f9c74f",
      accent: "#e63946",
      
      // Text Colors
      textPrimary: "#333333",
      textSecondary: "#666666",
      textLight: "#999999",
      textWhite: "#ffffff",
      
      // Background Colors
      backgroundPrimary: "#ffffff",
      backgroundSecondary: "#f8f9fa",
      backgroundDark: "#2c3e50",
      backgroundOverlay: "rgba(0,0,0,0.8)",
      
      // Gradients
      gradientPrimary: "linear-gradient(135deg, #4acaa8 0%, #2a9d8f 100%)",
      gradientSecondary: "linear-gradient(135deg, #f4a261 0%, #e76f51 100%)",
      gradientText: "linear-gradient(135deg, #4acaa8 0%, #2a9d8f 50%, #f4a261 100%)",
      
      // UI Elements
      border: "#e1e1e1",
      borderLight: "#f0f0f0",
      shadow: "rgba(0,0,0,0.1)",
      shadowDark: "rgba(0,0,0,0.2)",
      
      // Status Colors
      success: "#28a745",
      warning: "#ffc107",
      error: "#dc3545",
      info: "#17a2b8"
    },
    
    dark: {
      name: "Dark",
      primary: "#4acaa8",
      primaryDark: "#2a9d8f",
      primaryLight: "#6dd5c0",
      secondary: "#f4a261",
      secondaryDark: "#e76f51",
      secondaryLight: "#f9c74f",
      accent: "#e63946",
      
      // Text Colors
      textPrimary: "#ffffff",
      textSecondary: "#cccccc",
      textLight: "#999999",
      textWhite: "#ffffff",
      
      // Background Colors
      backgroundPrimary: "#1a1a1a",
      backgroundSecondary: "#2d2d2d",
      backgroundDark: "#0f0f0f",
      backgroundOverlay: "rgba(0,0,0,0.9)",
      
      // Gradients
      gradientPrimary: "linear-gradient(135deg, #4acaa8 0%, #2a9d8f 100%)",
      gradientSecondary: "linear-gradient(135deg, #f4a261 0%, #e76f51 100%)",
      gradientText: "linear-gradient(135deg, #4acaa8 0%, #2a9d8f 50%, #f4a261 100%)",
      
      // UI Elements
      border: "#444444",
      borderLight: "#333333",
      shadow: "rgba(255,255,255,0.1)",
      shadowDark: "rgba(0,0,0,0.5)",
      
      // Status Colors
      success: "#28a745",
      warning: "#ffc107",
      error: "#dc3545",
      info: "#17a2b8"
    },
    
    ocean: {
      name: "Ocean",
      primary: "#0077be",
      primaryDark: "#005a8b",
      primaryLight: "#339acc",
      secondary: "#00a8cc",
      secondaryDark: "#007fa3",
      secondaryLight: "#33b8d4",
      accent: "#ff6b6b",
      
      // Text Colors
      textPrimary: "#2c3e50",
      textSecondary: "#34495e",
      textLight: "#7f8c8d",
      textWhite: "#ffffff",
      
      // Background Colors
      backgroundPrimary: "#f7fbfc",
      backgroundSecondary: "#ecf0f1",
      backgroundDark: "#34495e",
      backgroundOverlay: "rgba(52,73,94,0.8)",
      
      // Gradients
      gradientPrimary: "linear-gradient(135deg, #0077be 0%, #00a8cc 100%)",
      gradientSecondary: "linear-gradient(135deg, #00a8cc 0%, #ff6b6b 100%)",
      gradientText: "linear-gradient(135deg, #0077be 0%, #00a8cc 50%, #ff6b6b 100%)",
      
      // UI Elements
      border: "#bdc3c7",
      borderLight: "#ecf0f1",
      shadow: "rgba(52,73,94,0.1)",
      shadowDark: "rgba(52,73,94,0.2)",
      
      // Status Colors
      success: "#27ae60",
      warning: "#f39c12",
      error: "#e74c3c",
      info: "#3498db"
    },
    
    sunset: {
      name: "Sunset",
      primary: "#ff6b6b",
      primaryDark: "#ee5a52",
      primaryLight: "#ff8787",
      secondary: "#feca57",
      secondaryDark: "#ff9ff3",
      secondaryLight: "#fed330",
      accent: "#5f27cd",
      
      // Text Colors
      textPrimary: "#2c2c54",
      textSecondary: "#40407a",
      textLight: "#706fd3",
      textWhite: "#ffffff",
      
      // Background Colors
      backgroundPrimary: "#ffffff",
      backgroundSecondary: "#f1f2f6",
      backgroundDark: "#2c2c54",
      backgroundOverlay: "rgba(44,44,84,0.8)",
      
      // Gradients
      gradientPrimary: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
      gradientSecondary: "linear-gradient(135deg, #feca57 0%, #5f27cd 100%)",
      gradientText: "linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #5f27cd 100%)",
      
      // UI Elements
      border: "#ddd",
      borderLight: "#f1f2f6",
      shadow: "rgba(44,44,84,0.1)",
      shadowDark: "rgba(44,44,84,0.2)",
      
      // Status Colors
      success: "#00d2d3",
      warning: "#ff9f43",
      error: "#ff3838",
      info: "#5352ed"
    }
  },

  // Typography
  fonts: {
    primary: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Merriweather', serif",
    monospace: "'Fira Code', 'Monaco', 'Consolas', monospace",
    display: "'Poppins', sans-serif"
  },

  // Font Sizes (rem units)
  fontSizes: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem",    // 48px
    "6xl": "4rem"     // 64px
  },

  // Font Weights
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  // Spacing (rem units)
  spacing: {
    0: "0",
    1: "0.25rem",   // 4px
    2: "0.5rem",    // 8px
    3: "0.75rem",   // 12px
    4: "1rem",      // 16px
    5: "1.25rem",   // 20px
    6: "1.5rem",    // 24px
    8: "2rem",      // 32px
    10: "2.5rem",   // 40px
    12: "3rem",     // 48px
    16: "4rem",     // 64px
    20: "5rem",     // 80px
    24: "6rem",     // 96px
    32: "8rem",     // 128px
    40: "10rem",    // 160px
    48: "12rem",    // 192px
    56: "14rem",    // 224px
    64: "16rem"     // 256px
  },

  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.125rem",   // 2px
    base: "0.25rem",  // 4px
    md: "0.375rem",   // 6px
    lg: "0.5rem",     // 8px
    xl: "0.75rem",    // 12px
    "2xl": "1rem",    // 16px
    "3xl": "1.5rem",  // 24px
    full: "9999px"
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
  },

  // Breakpoints
  breakpoints: {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px"
  },

  // Z-Index
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070
  },

  // Animation Durations
  transitions: {
    fast: "150ms",
    base: "300ms",
    slow: "500ms",
    slower: "1000ms"
  },

  // Animation Easing
  easing: {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)"
  }
};

// Theme Management Functions
const ThemeManager = {
  currentTheme: 'default',
  
  // Initialize theme
  init() {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    this.setTheme(savedTheme);
  },
  
  // Set theme
  setTheme(themeName) {
    if (!PALETTE.themes[themeName]) {
      console.warn(`Theme "${themeName}" not found. Using default theme.`);
      themeName = 'default';
    }
    
    this.currentTheme = themeName;
    const theme = PALETTE.themes[themeName];
    
    // Apply CSS custom properties
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--color-${this.kebabCase(key)}`, value);
    });
    
    // Apply font and spacing variables
    Object.entries(PALETTE.fontSizes).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });
    
    Object.entries(PALETTE.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });
    
    Object.entries(PALETTE.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', themeName);
    
    // Dispatch theme change event
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: themeName, colors: theme }
    }));
  },
  
  // Get current theme
  getCurrentTheme() {
    return this.currentTheme;
  },
  
  // Get theme colors
  getTheme(themeName = null) {
    const name = themeName || this.currentTheme;
    return PALETTE.themes[name];
  },
  
  // Get all available themes
  getAvailableThemes() {
    return Object.keys(PALETTE.themes);
  },
  
  // Toggle between light and dark themes
  toggleDarkMode() {
    const currentTheme = this.getCurrentTheme();
    if (currentTheme === 'dark') {
      this.setTheme('default');
    } else {
      this.setTheme('dark');
    }
  },
  
  // Utility function to convert camelCase to kebab-case
  kebabCase(str) {
    return str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
  }
};

// Auto-initialize theme management when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
  });
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PALETTE, ThemeManager };
}