/**
 * Site Configuration Data
 * Main site settings and metadata
 */

export const siteData = {
  // Site Identity
  name: "Alejandro Cabral",
  title: "Full-Stack Developer & Software Engineer",
  tagline: "Building the future, one line of code at a time",
  description: "Full-stack developer specializing in React, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  
  // Contact Information
  contact: {
    email: "alejandrocabralvaldovinos@gmail.com",
    phone: "+595123456789",
    location: {
      city: "Asunción",
      country: "Paraguay",
      timezone: "GMT-3"
    },
    availability: {
      status: "available", // available, busy, away
      message: "Available for work",
      freelance: true,
      fullTime: true
    }
  },
  
  // URLs and Links
  urls: {
    domain: "https://alcabvaldo.github.io",
    repository: "https://github.com/alcabvaldo/alcabvaldo.github.io",
    images: {
      profile: "/images/programmer.jpg",
      ogImage: "/public/assets/images/og-image.jpg",
      favicon: "/images/favicon.svg"
    }
  },
  
  // Social Media
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
    instagram: {
      url: "https://www.instagram.com/ale_cabr4l/",
      username: "@ale_cabr4l",
      icon: "fab fa-instagram"
    },
    email: {
      url: "mailto:alejandrocabralvaldovinos@gmail.com",
      icon: "fas fa-envelope"
    }
  },
  
  // SEO and Meta Tags
  seo: {
    keywords: [
      "full-stack developer",
      "web developer", 
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Paraguay developer",
      "software engineer",
      "frontend developer",
      "backend developer"
    ],
    author: "Alejandro Cabral",
    robots: "index, follow",
    language: "en",
    alternateLanguages: [
      { code: "es", name: "Spanish" },
      { code: "en", name: "English" }
    ]
  },
  
  // Brand Colors and Theme
  brand: {
    colors: {
      primary: "#14B8A6", // Teal
      secondary: "#F59E0B", // Amber
      accent: "#EF4444", // Red
      text: "#111827", // Gray-900
      background: "#F9FAFB" // Gray-50
    },
    fonts: {
      primary: "'Inter', sans-serif",
      mono: "'Fira Code', monospace"
    },
    logo: {
      text: "AC",
      full: "Alejandro Cabral"
    }
  },
  
  // Analytics and Tracking
  analytics: {
    googleAnalytics: "GA_MEASUREMENT_ID", // Replace with actual ID
    gtag: true,
    hotjar: false,
    facebookPixel: false
  },
  
  // Features and Settings
  features: {
    darkMode: true,
    animations: true,
    lazyLoading: true,
    progressiveWebApp: false,
    serviceWorker: false,
    notifications: false,
    blog: true,
    portfolio: true,
    resume: true,
    contact: true
  },
  
  // Legal and Compliance
  legal: {
    copyright: "2024 Alejandro Cabral. All rights reserved.",
    privacyPolicy: "/privacy-policy",
    termsOfService: "/terms-of-service",
    cookies: true
  },
  
  // External Services
  services: {
    formspree: {
      endpoint: "https://formspree.io/f/YOUR_FORM_ID", // Replace with actual endpoint
      enabled: true
    },
    emailjs: {
      publicKey: "YOUR_EMAILJS_PUBLIC_KEY", // Replace with actual key
      serviceId: "YOUR_SERVICE_ID",
      templateId: "YOUR_TEMPLATE_ID",
      enabled: false
    },
    netlify: {
      forms: true,
      functions: false
    }
  }
};