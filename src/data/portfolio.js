/**
 * Portfolio Data
 * Projects, case studies, and work showcase
 */

export const portfolioData = {
  // Page Meta
  title: "My Portfolio",
  subtitle: "A showcase of my recent work and projects",
  description: "Explore the projects I've worked on, from web applications to open-source contributions.",
  
  // Filter Categories
  categories: [
    {
      id: "all",
      name: "All Projects",
      count: 12,
      active: true
    },
    {
      id: "web-apps",
      name: "Web Applications",
      count: 6
    },
    {
      id: "websites",
      name: "Websites",
      count: 4
    },
    {
      id: "open-source",
      name: "Open Source",
      count: 2
    },
    {
      id: "mobile",
      name: "Mobile",
      count: 1
    }
  ],
  
  // Featured Projects
  featured: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      subtitle: "Full-stack online store solution",
      description: "A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      category: "web-apps",
      image: {
        thumbnail: "/images/portfolio/ecommerce-thumb.jpg",
        gallery: [
          "/images/portfolio/ecommerce-1.jpg",
          "/images/portfolio/ecommerce-2.jpg", 
          "/images/portfolio/ecommerce-3.jpg"
        ],
        alt: "E-Commerce Platform Screenshot"
      },
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Express"],
      links: {
        live: "https://ecommerce-demo.netlify.app",
        github: "https://github.com/alcabvaldo/ecommerce-platform",
        case_study: "/portfolio/ecommerce-platform"
      },
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment processing with Stripe",
        "Order tracking and management",
        "Admin dashboard for inventory management",
        "Responsive design for all devices",
        "SEO optimized product pages"
      ],
      challenges: "The main challenge was implementing a scalable payment system that could handle multiple currencies and payment methods while maintaining PCI compliance.",
      solution: "Integrated Stripe API with custom webhook handlers and implemented proper error handling and transaction logging.",
      results: "Successfully processed 500+ test transactions with 99.9% uptime and positive user feedback.",
      duration: "3 months",
      role: "Full-Stack Developer",
      client: "Startup Client",
      year: 2024,
      featured: true,
      status: "completed"
    },
    {
      id: "task-management-app",
      title: "Task Management SaaS",
      subtitle: "Collaborative project management tool",
      description: "A modern task management application with real-time collaboration, team workspaces, and advanced project tracking features.",
      category: "web-apps",
      image: {
        thumbnail: "/images/portfolio/task-app-thumb.jpg",
        gallery: [
          "/images/portfolio/task-app-1.jpg",
          "/images/portfolio/task-app-2.jpg",
          "/images/portfolio/task-app-3.jpg"
        ],
        alt: "Task Management App Screenshot"
      },
      technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB", "Redis"],
      links: {
        live: "https://taskmaster-demo.vercel.app",
        github: "https://github.com/alcabvaldo/task-management-saas"
      },
      features: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop task boards",
        "Team workspaces and permissions",
        "Time tracking and reporting",
        "File attachments and comments",
        "Email notifications and reminders",
        "Dark/light theme support",
        "Offline functionality with sync"
      ],
      duration: "4 months",
      role: "Full-Stack Developer & UI/UX Designer",
      year: 2024,
      featured: true,
      status: "completed"
    }
  ],
  
  // All Projects
  projects: [
    {
      id: "restaurant-website",
      title: "Restaurant Website & Ordering System",
      subtitle: "Modern restaurant web presence",
      description: "A beautiful, responsive website for a local restaurant with online menu, reservation system, and food ordering capabilities.",
      category: "websites",
      image: {
        thumbnail: "/images/portfolio/restaurant-thumb.jpg",
        gallery: ["/images/portfolio/restaurant-1.jpg"],
        alt: "Restaurant Website Screenshot"
      },
      technologies: ["React", "Next.js", "Sanity CMS", "Stripe", "Tailwind CSS"],
      links: {
        live: "https://restaurant-demo.vercel.app",
        github: "https://github.com/alcabvaldo/restaurant-website"
      },
      duration: "6 weeks",
      year: 2023,
      status: "completed"
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      subtitle: "Real-time weather application",
      description: "A comprehensive weather dashboard with 7-day forecasts, weather maps, and location-based recommendations.",
      category: "web-apps",
      image: {
        thumbnail: "/images/portfolio/weather-thumb.jpg",
        alt: "Weather Dashboard Screenshot"
      },
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
      links: {
        live: "https://weather-dashboard-demo.netlify.app",
        github: "https://github.com/alcabvaldo/weather-dashboard"
      },
      duration: "2 weeks",
      year: 2023,
      status: "completed"
    },
    {
      id: "portfolio-cms",
      title: "Portfolio CMS",
      subtitle: "Content management for portfolios",
      description: "A headless CMS specifically designed for developers and designers to manage their portfolio content easily.",
      category: "open-source",
      image: {
        thumbnail: "/images/portfolio/cms-thumb.jpg",
        alt: "Portfolio CMS Screenshot"
      },
      technologies: ["Node.js", "GraphQL", "React Admin", "PostgreSQL"],
      links: {
        github: "https://github.com/alcabvaldo/portfolio-cms",
        npm: "https://www.npmjs.com/package/portfolio-cms"
      },
      duration: "8 weeks",
      year: 2024,
      status: "active_development"
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracker Mobile App",
      subtitle: "Cross-platform fitness application",
      description: "A React Native app for tracking workouts, nutrition, and fitness goals with social features.",
      category: "mobile",
      image: {
        thumbnail: "/images/portfolio/fitness-thumb.jpg",
        alt: "Fitness Tracker App Screenshot"
      },
      technologies: ["React Native", "Expo", "Firebase", "Redux Toolkit"],
      links: {
        github: "https://github.com/alcabvaldo/fitness-tracker-app"
      },
      duration: "12 weeks",
      year: 2024,
      status: "in_progress"
    },
    {
      id: "blog-platform",
      title: "Developer Blog Platform",
      subtitle: "JAMstack blog with CMS",
      description: "A fast, SEO-friendly blog platform built with Gatsby and a headless CMS, optimized for developer content.",
      category: "web-apps",
      image: {
        thumbnail: "/images/portfolio/blog-thumb.jpg",
        alt: "Blog Platform Screenshot"
      },
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      links: {
        live: "https://dev-blog-platform.netlify.app",
        github: "https://github.com/alcabvaldo/developer-blog-platform"
      },
      duration: "4 weeks",
      year: 2023,
      status: "completed"
    }
  ],
  
  // Skills Demonstrated
  skillsShowcase: {
    title: "Skills Demonstrated",
    categories: [
      {
        name: "Frontend Development",
        skills: ["React", "Vue.js", "TypeScript", "Responsive Design", "Performance Optimization"],
        projects: 8
      },
      {
        name: "Backend Development", 
        skills: ["Node.js", "API Design", "Database Design", "Authentication", "Microservices"],
        projects: 6
      },
      {
        name: "Full-Stack Integration",
        skills: ["REST APIs", "GraphQL", "Real-time Features", "State Management", "Testing"],
        projects: 5
      },
      {
        name: "DevOps & Deployment",
        skills: ["Docker", "CI/CD", "Cloud Services", "Monitoring", "Security"],
        projects: 4
      }
    ]
  },
  
  // Testimonials from projects
  testimonials: [
    {
      id: "client-1",
      name: "María González",
      role: "Restaurant Owner",
      company: "La Cocina Auténtica",
      project: "restaurant-website",
      text: "Alejandro created a beautiful website that perfectly captures our restaurant's atmosphere. Online orders increased by 40% in the first month!",
      image: "/images/testimonials/maria-gonzalez.jpg",
      rating: 5
    },
    {
      id: "client-2",
      name: "Roberto Silva",
      role: "Startup Founder",
      company: "TechVenture",
      project: "task-management-app",
      text: "Working with Alejandro was fantastic. He delivered a high-quality product on time and was very communicative throughout the process.",
      image: "/images/testimonials/roberto-silva.jpg",
      rating: 5
    }
  ],
  
  // Process/Methodology
  process: {
    title: "My Development Process",
    steps: [
      {
        number: 1,
        title: "Discovery & Planning",
        description: "Understanding requirements, user needs, and project goals through detailed discussions and research.",
        icon: "fas fa-search"
      },
      {
        number: 2,
        title: "Design & Architecture",
        description: "Creating wireframes, designing the user interface, and planning the technical architecture.",
        icon: "fas fa-drafting-compass"
      },
      {
        number: 3,
        title: "Development",
        description: "Building the application with clean, maintainable code following best practices and industry standards.",
        icon: "fas fa-code"
      },
      {
        number: 4,
        title: "Testing & Quality Assurance",
        description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing.",
        icon: "fas fa-bug"
      },
      {
        number: 5,
        title: "Deployment & Launch",
        description: "Deploying to production with proper CI/CD pipelines and monitoring systems in place.",
        icon: "fas fa-rocket"
      },
      {
        number: 6,
        title: "Maintenance & Support",
        description: "Ongoing support, updates, and improvements based on user feedback and evolving needs.",
        icon: "fas fa-tools"
      }
    ]
  },
  
  // Call to Action
  cta: {
    title: "Ready to start your project?",
    description: "Let's work together to bring your ideas to life with modern, scalable solutions.",
    buttons: [
      {
        text: "Get In Touch",
        url: "/contact",
        variant: "primary"
      },
      {
        text: "View Resume",
        url: "/resume",
        variant: "outline"
      }
    ]
  }
};