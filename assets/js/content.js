/**
 * Content Configuration for Portfolio Website
 * All static content and data for the website
 */

const CONTENT = {
  // Personal Information
  personal: {
    name: "Alejandro Cabral",
    title: "Software Developer",
    tagline: "Full-Stack Developer & Computer Science Student",
    description: "I'm a passionate Software Developer currently studying Computer Science at FP-UNA. I specialize in web development, mobile applications, and creating innovative solutions to complex problems.",
    location: "Paraguay",
    email: "alejandrocabralvaldovinos@gmail.com",
    profileImage: "images/programmer.jpg",
    resumePDF: "assets/documents/alejandro-cabral-resume.pdf"
  },

  // Navigation Menu
  navigation: [
    { name: "Home", href: "#top", icon: "fa-home" },
    { name: "About", href: "#about", icon: "fa-user" },
    { name: "Skills", href: "#skills", icon: "fa-code" },
    { name: "Experience", href: "#experience", icon: "fa-briefcase" },
    { name: "Portfolio", href: "#portfolio", icon: "fa-laptop" },
    { name: "Education", href: "#education", icon: "fa-graduation-cap" },
    { name: "Blog", href: "#blog", icon: "fa-blog" },
    { name: "Contact", href: "#contact", icon: "fa-envelope" }
  ],

  // Social Media Links
  social: [
    { 
      name: "GitHub", 
      url: "https://github.com/alcabvaldo", 
      icon: "fa-github",
      description: "Check out my code repositories"
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos-8253a9186/", 
      icon: "fa-linkedin-in",
      description: "Connect with me professionally"
    },
    { 
      name: "Twitter", 
      url: "https://twitter.com/alcabvaldo", 
      icon: "fa-twitter",
      description: "Follow my tech journey"
    },
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/ale_cabr4l/", 
      icon: "fa-instagram",
      description: "Personal moments and life"
    }
  ],

  // About Section
  about: {
    title: "About Me",
    subtitle: "Passionate developer with a love for clean code and innovative solutions",
    paragraphs: [
      "I'm a dedicated software developer with a strong foundation in computer science principles and a passion for creating efficient, scalable solutions. Currently pursuing my degree at FP-UNA, I combine academic knowledge with practical experience.",
      "My journey in programming started with curiosity about how things work, and has evolved into a comprehensive skill set spanning web development, mobile applications, and system architecture.",
      "I believe in continuous learning, clean code practices, and the power of technology to solve real-world problems. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
    ],
    stats: [
      { label: "Years of Experience", value: "3+" },
      { label: "Projects Completed", value: "25+" },
      { label: "Technologies Mastered", value: "15+" },
      { label: "Coffee Cups", value: "∞" }
    ]
  },

  // Skills Section
  skills: {
    title: "Technical Skills",
    subtitle: "Technologies and tools I work with",
    categories: [
      {
        name: "Frontend Development",
        icon: "fa-desktop",
        skills: [
          { name: "React", level: 90, icon: "fab fa-react" },
          { name: "JavaScript", level: 95, icon: "fab fa-js-square" },
          { name: "TypeScript", level: 85, icon: "fa-code" },
          { name: "HTML5/CSS3", level: 95, icon: "fab fa-html5" },
          { name: "Sass/SCSS", level: 90, icon: "fab fa-sass" },
          { name: "Vue.js", level: 80, icon: "fab fa-vuejs" }
        ]
      },
      {
        name: "Backend Development",
        icon: "fa-server",
        skills: [
          { name: "Node.js", level: 90, icon: "fab fa-node-js" },
          { name: "Python", level: 85, icon: "fab fa-python" },
          { name: "Java", level: 80, icon: "fab fa-java" },
          { name: "PHP", level: 75, icon: "fab fa-php" },
          { name: "Express.js", level: 90, icon: "fa-code" },
          { name: "Django", level: 75, icon: "fa-code" }
        ]
      },
      {
        name: "Database & Tools",
        icon: "fa-database",
        skills: [
          { name: "MongoDB", level: 85, icon: "fa-leaf" },
          { name: "PostgreSQL", level: 80, icon: "fa-database" },
          { name: "MySQL", level: 85, icon: "fa-database" },
          { name: "Git", level: 95, icon: "fab fa-git-alt" },
          { name: "Docker", level: 75, icon: "fab fa-docker" },
          { name: "AWS", level: 70, icon: "fab fa-aws" }
        ]
      }
    ]
  },

  // Experience Section
  experience: {
    title: "Work Experience",
    subtitle: "My professional journey and accomplishments",
    jobs: [
      {
        title: "Full-Stack Developer",
        company: "Tech Solutions Inc.",
        location: "Remote",
        period: "2023 - Present",
        type: "Full-time",
        description: "Lead developer for multiple client projects, specializing in React and Node.js applications.",
        achievements: [
          "Developed 5+ full-stack web applications serving 10,000+ users",
          "Reduced application load time by 40% through optimization techniques",
          "Mentored 3 junior developers and conducted code reviews",
          "Implemented CI/CD pipelines reducing deployment time by 60%"
        ],
        technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
      },
      {
        title: "Frontend Developer",
        company: "Digital Agency XYZ",
        location: "Asunción, Paraguay",
        period: "2022 - 2023",
        type: "Part-time",
        description: "Specialized in creating responsive web interfaces and improving user experience.",
        achievements: [
          "Built 10+ responsive websites with 98%+ lighthouse scores",
          "Collaborated with design team to implement pixel-perfect UI/UX",
          "Improved website accessibility compliance to WCAG 2.1 standards",
          "Integrated third-party APIs and payment gateways"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Sass"]
      },
      {
        title: "Web Developer Intern",
        company: "StartupHub Paraguay",
        location: "Asunción, Paraguay",
        period: "2021 - 2022",
        type: "Internship",
        description: "Gained hands-on experience in web development and agile methodologies.",
        achievements: [
          "Contributed to 3 major web application projects",
          "Learned modern development workflows and best practices",
          "Participated in daily standups and sprint planning",
          "Fixed 50+ bugs and implemented new features"
        ],
        technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "Git"]
      }
    ]
  },

  // Portfolio/Projects Section
  portfolio: {
    title: "Featured Projects",
    subtitle: "Some of my recent work and side projects",
    categories: ["All", "Web Apps", "Mobile", "APIs", "Open Source"],
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Apps",
        description: "Full-featured e-commerce platform with admin dashboard, payment integration, and inventory management.",
        image: "images/projects/ecommerce.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
        features: [
          "User authentication and authorization",
          "Product catalog with search and filtering",
          "Shopping cart and checkout process",
          "Admin dashboard for inventory management",
          "Payment processing with Stripe",
          "Order tracking and email notifications"
        ],
        links: {
          demo: "https://demo-ecommerce-alcab.herokuapp.com",
          github: "https://github.com/alcabvaldo/ecommerce-platform",
          case_study: "#"
        },
        status: "completed",
        year: 2023
      },
      {
        id: 2,
        title: "Task Management API",
        category: "APIs",
        description: "RESTful API for task management with team collaboration features and real-time updates.",
        image: "images/projects/task-api.jpg",
        technologies: ["Node.js", "Express", "PostgreSQL", "Socket.io", "JWT"],
        features: [
          "RESTful API design with comprehensive documentation",
          "Real-time updates using WebSockets",
          "Team collaboration and role-based permissions",
          "Task assignment and progress tracking",
          "File attachments and comments",
          "Integration with popular project management tools"
        ],
        links: {
          demo: "https://taskapi-docs.herokuapp.com",
          github: "https://github.com/alcabvaldo/task-management-api",
          case_study: "#"
        },
        status: "completed",
        year: 2023
      },
      {
        id: 3,
        title: "Portfolio Website Generator",
        category: "Open Source",
        description: "Open-source tool to generate customizable portfolio websites for developers.",
        image: "images/projects/portfolio-generator.jpg",
        technologies: ["React", "Node.js", "Markdown", "CSS3", "GitHub API"],
        features: [
          "Drag-and-drop interface for customization",
          "Multiple pre-built themes and templates",
          "GitHub integration for automatic project import",
          "SEO optimization and performance monitoring",
          "One-click deployment to various platforms",
          "Markdown support for blog posts"
        ],
        links: {
          demo: "https://portfolio-gen.netlify.app",
          github: "https://github.com/alcabvaldo/portfolio-generator",
          case_study: "#"
        },
        status: "in-progress",
        year: 2024
      },
      {
        id: 4,
        title: "Weather Mobile App",
        category: "Mobile",
        description: "Cross-platform weather application with location-based forecasts and interactive maps.",
        image: "images/projects/weather-app.jpg",
        technologies: ["React Native", "Redux", "OpenWeatherMap API", "Maps API"],
        features: [
          "Real-time weather data and forecasts",
          "Interactive weather maps and radar",
          "Location-based automatic updates",
          "Weather alerts and notifications",
          "Historical weather data analysis",
          "Offline support for saved locations"
        ],
        links: {
          demo: "#",
          github: "https://github.com/alcabvaldo/weather-mobile-app",
          case_study: "#"
        },
        status: "completed",
        year: 2022
      },
      {
        id: 5,
        title: "Learning Management System",
        category: "Web Apps",
        description: "Educational platform with course creation, student progress tracking, and interactive assessments.",
        image: "images/projects/lms.jpg",
        technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "WebRTC"],
        features: [
          "Course creation and content management",
          "Video lectures with interactive transcripts",
          "Real-time virtual classrooms",
          "Assignment submission and grading system",
          "Student progress analytics dashboard",
          "Discussion forums and peer-to-peer learning"
        ],
        links: {
          demo: "https://lms-demo.herokuapp.com",
          github: "https://github.com/alcabvaldo/learning-management-system",
          case_study: "#"
        },
        status: "completed",
        year: 2023
      },
      {
        id: 6,
        title: "Cryptocurrency Tracker",
        category: "Web Apps",
        description: "Real-time cryptocurrency tracking application with portfolio management and market analysis.",
        image: "images/projects/crypto-tracker.jpg",
        technologies: ["React", "TypeScript", "Chart.js", "CoinGecko API", "Firebase"],
        features: [
          "Real-time price tracking for 1000+ cryptocurrencies",
          "Portfolio management with profit/loss calculation",
          "Interactive charts and market analysis",
          "Price alerts and notifications",
          "News feed integration",
          "Social features for sharing insights"
        ],
        links: {
          demo: "https://crypto-tracker-alcab.netlify.app",
          github: "https://github.com/alcabvaldo/crypto-tracker",
          case_study: "#"
        },
        status: "completed",
        year: 2022
      }
    ]
  },

  // Education Section
  education: {
    title: "Education & Certifications",
    subtitle: "My academic background and continuous learning journey",
    degrees: [
      {
        degree: "Bachelor of Computer Science",
        institution: "Facultad Politécnica - Universidad Nacional de Asunción (FP-UNA)",
        location: "Asunción, Paraguay",
        period: "2020 - Present",
        status: "In Progress",
        gpa: "3.8/4.0",
        relevantCourses: [
          "Data Structures and Algorithms",
          "Software Engineering",
          "Database Management Systems",
          "Computer Networks",
          "Operating Systems",
          "Web Development"
        ]
      }
    ],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        credentialId: "AWS-CSA-2023-001",
        link: "https://aws.amazon.com/certification/"
      },
      {
        name: "React Developer Certification",
        issuer: "Meta (Facebook)",
        date: "2022",
        credentialId: "META-REACT-2022-456",
        link: "https://developers.facebook.com/developercircles/"
      },
      {
        name: "Full-Stack Web Development",
        issuer: "freeCodeCamp",
        date: "2021",
        credentialId: "FCC-FSWD-2021-789",
        link: "https://www.freecodecamp.org/certification/alcabvaldo/full-stack"
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "2021",
        credentialId: "FCC-JSADS-2021-123",
        link: "https://www.freecodecamp.org/certification/alcabvaldo/javascript-algorithms-and-data-structures"
      }
    ],
    achievements: [
      "Dean's List - 4 consecutive semesters",
      "Winner - University Hackathon 2023",
      "Computer Science Department Scholarship Recipient",
      "Teaching Assistant - Intro to Programming (2022-2023)"
    ]
  },

  // Blog Section
  blog: {
    title: "Latest Articles",
    subtitle: "Sharing knowledge and insights from my development journey",
    articles: [
      {
        id: 1,
        title: "Building Scalable APIs with Node.js and Express",
        slug: "building-scalable-apis-nodejs-express",
        excerpt: "Learn how to create robust and scalable REST APIs using Node.js, Express, and modern best practices.",
        content: "Full article content goes here...",
        image: "images/blog/nodejs-api.jpg",
        tags: ["Node.js", "Express", "API", "Backend"],
        publishedDate: "2024-01-15",
        readTime: "8 min read",
        views: 1250,
        featured: true
      },
      {
        id: 2,
        title: "React Performance Optimization Techniques",
        slug: "react-performance-optimization",
        excerpt: "Discover advanced techniques to optimize your React applications for better performance and user experience.",
        content: "Full article content goes here...",
        image: "images/blog/react-performance.jpg",
        tags: ["React", "Performance", "Frontend", "Optimization"],
        publishedDate: "2024-01-08",
        readTime: "12 min read",
        views: 2100,
        featured: true
      },
      {
        id: 3,
        title: "Database Design Best Practices",
        slug: "database-design-best-practices",
        excerpt: "A comprehensive guide to designing efficient and maintainable database schemas.",
        content: "Full article content goes here...",
        image: "images/blog/database-design.jpg",
        tags: ["Database", "SQL", "Design", "Backend"],
        publishedDate: "2023-12-22",
        readTime: "15 min read",
        views: 1800,
        featured: false
      }
    ]
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together to bring your ideas to life",
    description: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!",
    methods: [
      {
        type: "email",
        label: "Email",
        value: "alejandrocabralvaldovinos@gmail.com",
        icon: "fa-envelope",
        link: "mailto:alejandrocabralvaldovinos@gmail.com"
      },
      {
        type: "phone",
        label: "Phone",
        value: "+595 123 456 789",
        icon: "fa-phone",
        link: "tel:+595123456789"
      },
      {
        type: "location",
        label: "Location",
        value: "Asunción, Paraguay",
        icon: "fa-map-marker-alt",
        link: "https://maps.google.com/?q=Asunción,Paraguay"
      }
    ],
    availability: {
      status: "available",
      message: "Available for freelance projects and full-time opportunities"
    }
  },

  // Footer
  footer: {
    copyright: "© 2024 Alejandro Cabral. All rights reserved.",
    credits: "Design inspired by HTML5 UP",
    lastUpdated: "January 2024"
  },

  // SEO and Meta
  seo: {
    title: "Alejandro Cabral - Full-Stack Developer & Computer Science Student",
    description: "Full-stack developer specializing in React, Node.js, and modern web technologies. Computer Science student at FP-UNA with experience in web development, mobile apps, and API design.",
    keywords: "full-stack developer, web developer, React, Node.js, JavaScript, TypeScript, Paraguay developer, computer science student",
    author: "Alejandro Cabral",
    image: "images/og-image.jpg",
    url: "https://alcabvaldo.github.io"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONTENT;
}