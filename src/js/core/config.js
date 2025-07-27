/**
 * Application Configuration
 * Central configuration for the portfolio website
 */

const CONFIG = {
    // Site Information
    site: {
        name: "Alejandro Cabral",
        title: "Full-Stack Developer",
        description: "Full-stack developer specializing in React, Node.js, and modern web technologies",
        url: "https://alcabvaldo.github.io",
        author: "Alejandro Cabral",
        email: "alejandrocabralvaldovinos@gmail.com",
        location: "Asunción, Paraguay"
    },
    
    // Theme Configuration
    theme: {
        default: 'light',
        storageKey: 'portfolio-theme',
        themes: {
            light: {
                name: 'Light',
                icon: 'fa-sun'
            },
            dark: {
                name: 'Dark', 
                icon: 'fa-moon'
            },
            auto: {
                name: 'Auto',
                icon: 'fa-circle-half-stroke'
            }
        }
    },
    
    // Navigation Configuration
    navigation: {
        main: [
            { name: 'Home', path: '/', icon: 'fa-home' },
            { name: 'About', path: '/about', icon: 'fa-user' },
            { name: 'Portfolio', path: '/portfolio', icon: 'fa-briefcase' },
            { name: 'Resume', path: '/resume', icon: 'fa-file-alt' },
            { name: 'Blog', path: '/blog', icon: 'fa-blog' },
            { name: 'Contact', path: '/contact', icon: 'fa-envelope' }
        ]
    },
    
    // Social Media Links
    social: {
        github: {
            name: 'GitHub',
            url: 'https://github.com/alcabvaldo',
            icon: 'fab fa-github'
        },
        linkedin: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos-8253a9186/',
            icon: 'fab fa-linkedin-in'
        },
        twitter: {
            name: 'Twitter',
            url: 'https://twitter.com/alcabvaldo',
            icon: 'fab fa-twitter'
        },
        email: {
            name: 'Email',
            url: 'mailto:alejandrocabralvaldovinos@gmail.com',
            icon: 'fas fa-envelope'
        }
    },
    
    // API Configuration
    api: {
        baseUrl: window.location.origin,
        endpoints: {
            contact: '/contact',
            portfolio: '/portfolio',
            blog: '/blog'
        }
    },
    
    // Animation Configuration
    animations: {
        duration: {
            fast: 200,
            normal: 300,
            slow: 500
        },
        easing: {
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }
    },
    
    // Performance Configuration
    performance: {
        lazyLoad: true,
        preloadImages: true,
        cacheTimeout: 5 * 60 * 1000, // 5 minutes
        debounceDelay: 300
    },
    
    // SEO Configuration
    seo: {
        defaultTitle: "Alejandro Cabral - Full-Stack Developer",
        titleSeparator: " | ",
        defaultDescription: "Full-stack developer specializing in React, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
        keywords: [
            "full-stack developer",
            "web developer", 
            "React",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Paraguay developer",
            "software engineer"
        ],
        ogImage: "/public/assets/images/og-image.jpg"
    },
    
    // Contact Form Configuration
    contact: {
        emailjs: {
            serviceId: '',
            templateId: '',
            publicKey: ''
        },
        formspree: {
            endpoint: ''
        }
    },
    
    // Analytics Configuration
    analytics: {
        googleAnalytics: {
            measurementId: ''
        }
    },
    
    // Feature Flags
    features: {
        blog: true,
        darkMode: true,
        animations: true,
        progressiveWebApp: false,
        serviceWorker: false
    },
    
    // Development Configuration
    dev: {
        enableLogs: true,
        showPerformanceMetrics: false,
        mockApi: false
    }
};

// Freeze configuration to prevent accidental modifications
Object.freeze(CONFIG);

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}