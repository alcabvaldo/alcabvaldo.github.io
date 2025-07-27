/**
 * Navigation Data
 * Site navigation structure and menu items
 */

export const navigationData = {
  // Main Navigation Menu
  main: [
    {
      id: "home",
      title: "Home",
      url: "/",
      icon: "fas fa-home",
      active: true,
      order: 1,
      description: "Welcome to my portfolio",
      external: false
    },
    {
      id: "about",
      title: "About",
      url: "/about",
      icon: "fas fa-user",
      active: false,
      order: 2,
      description: "Learn more about me",
      external: false
    },
    {
      id: "portfolio",
      title: "Portfolio",
      url: "/portfolio",
      icon: "fas fa-briefcase",
      active: false,
      order: 3,
      description: "View my work and projects",
      external: false
    },
    {
      id: "resume",
      title: "Resume",
      url: "/resume",
      icon: "fas fa-file-alt",
      active: false,
      order: 4,
      description: "My professional experience",
      external: false
    },
    {
      id: "blog",
      title: "Blog",
      url: "/blog",
      icon: "fas fa-blog",
      active: false,
      order: 5,
      description: "Thoughts and tutorials",
      external: false,
      badge: "New"
    },
    {
      id: "contact",
      title: "Contact",
      url: "/contact",
      icon: "fas fa-envelope",
      active: false,
      order: 6,
      description: "Get in touch with me",
      external: false
    }
  ],
  
  // Footer Navigation
  footer: [
    {
      id: "about",
      title: "About",
      url: "/about"
    },
    {
      id: "portfolio",
      title: "Portfolio", 
      url: "/portfolio"
    },
    {
      id: "resume",
      title: "Resume",
      url: "/resume"
    },
    {
      id: "contact",
      title: "Contact",
      url: "/contact"
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      url: "/privacy-policy"
    },
    {
      id: "terms",
      title: "Terms",
      url: "/terms"
    }
  ],
  
  // Breadcrumb Navigation
  breadcrumbs: {
    separator: "/",
    showHome: true,
    homeText: "Home",
    homeIcon: "fas fa-home"
  },
  
  // Mobile Navigation Settings
  mobile: {
    breakpoint: 768,
    hamburgerIcon: "fas fa-bars",
    closeIcon: "fas fa-times",
    overlay: true,
    slideDirection: "right" // left, right, top, bottom
  },
  
  // Skip Navigation
  skip: {
    enabled: true,
    text: "Skip to main content",
    target: "#main-content"
  },
  
  // Navigation Actions (buttons in nav)
  actions: [
    {
      id: "theme-toggle",
      type: "button",
      icon: "fas fa-moon",
      iconDark: "fas fa-sun",
      title: "Toggle dark mode",
      action: "toggleTheme",
      order: 1
    },
    {
      id: "download-resume",
      type: "link",
      text: "Resume",
      icon: "fas fa-download",
      url: "/assets/documents/alejandro-cabral-resume.pdf",
      external: true,
      target: "_blank",
      variant: "outline",
      order: 2,
      mobileHidden: true
    }
  ]
};