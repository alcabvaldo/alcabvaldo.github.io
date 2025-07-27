// Skills and technologies data
export const skillsData = {
  // Section configuration
  sectionId: "skills",
  title: "Technical Skills",
  subtitle: "Programming Languages, Frameworks & Tools",
  
  // Skill categories
  categories: [
    {
      name: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          proficiency: "Expert",
          yearsExperience: "3+",
          description: "Modern ES6+, DOM manipulation, async programming",
          icon: "fab fa-js-square",
          techColor: "var(--color-javascript)",
          specialties: ["ES6+", "Async/Await", "DOM APIs", "Modules"]
        },
        {
          name: "Python",
          proficiency: "Advanced",
          yearsExperience: "2+",
          description: "Object-oriented programming, algorithms, data structures",
          icon: "fab fa-python",
          techColor: "var(--color-python)",
          specialties: ["OOP", "Algorithms", "Data Structures", "Scripting"]
        },
        {
          name: "HTML/CSS",
          proficiency: "Expert",
          yearsExperience: "3+",
          description: "Semantic HTML5, modern CSS3, responsive design",
          icon: "fab fa-html5",
          techColor: "var(--color-html)",
          specialties: ["Semantic HTML", "CSS Grid", "Flexbox", "Responsive"]
        },
        {
          name: "Java",
          proficiency: "Intermediate",
          yearsExperience: "2+",
          description: "Object-oriented programming, enterprise patterns",
          icon: "fab fa-java",
          techColor: "var(--color-java)",
          specialties: ["OOP", "Spring", "Enterprise", "Design Patterns"]
        },
        {
          name: "TypeScript",
          proficiency: "Advanced",
          yearsExperience: "1+",
          description: "Type-safe JavaScript development",
          icon: "fas fa-code",
          techColor: "var(--color-typescript)",
          specialties: ["Type Safety", "Interfaces", "Generics", "Decorators"]
        }
      ]
    },
    {
      name: "Frontend Technologies",
      skills: [
        {
          name: "Astro",
          proficiency: "Expert",
          yearsExperience: "1+",
          description: "Static site generation, component architecture",
          icon: "fas fa-rocket",
          techColor: "var(--color-astro)",
          specialties: ["SSG", "Components", "Performance", "SEO"]
        },
        {
          name: "React",
          proficiency: "Advanced",
          yearsExperience: "2+",
          description: "Component-based development, hooks, state management",
          icon: "fab fa-react",
          techColor: "var(--color-react)",
          specialties: ["Hooks", "Context", "State Management", "JSX"]
        },
        {
          name: "Vue.js",
          proficiency: "Intermediate",
          yearsExperience: "1+",
          description: "Progressive framework, reactive data binding",
          icon: "fab fa-vuejs",
          techColor: "var(--color-vue)",
          specialties: ["Composition API", "Reactivity", "Templates", "Directives"]
        },
        {
          name: "SCSS/Sass",
          proficiency: "Expert",
          yearsExperience: "3+",
          description: "Advanced CSS preprocessing, modular styling",
          icon: "fab fa-sass",
          techColor: "var(--color-sass)",
          specialties: ["Mixins", "Variables", "Nesting", "Modules"]
        },
        {
          name: "CSS Grid & Flexbox",
          proficiency: "Expert",
          yearsExperience: "3+",
          description: "Modern layout systems, responsive design",
          icon: "fas fa-th",
          techColor: "var(--color-css)",
          specialties: ["Grid Layout", "Flexbox", "Responsive", "Mobile-First"]
        }
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        {
          name: "Node.js",
          proficiency: "Advanced",
          yearsExperience: "2+",
          description: "Server-side JavaScript, API development",
          icon: "fab fa-node-js",
          techColor: "var(--color-nodejs)",
          specialties: ["API Development", "Express", "Middleware", "NPM"]
        },
        {
          name: "REST APIs",
          proficiency: "Advanced",
          yearsExperience: "2+",
          description: "RESTful API design and implementation",
          icon: "fas fa-exchange-alt",
          techColor: "var(--color-info)",
          specialties: ["REST", "JSON", "HTTP Methods", "Status Codes"]
        },
        {
          name: "Databases",
          proficiency: "Intermediate",
          yearsExperience: "2+",
          description: "SQL and NoSQL database management",
          icon: "fas fa-database",
          techColor: "var(--color-primary)",
          specialties: ["SQL", "MongoDB", "Database Design", "Queries"]
        },
        {
          name: "Git & Version Control",
          proficiency: "Expert",
          yearsExperience: "3+",
          description: "Version control and collaboration workflows",
          icon: "fab fa-git-alt",
          techColor: "var(--color-git)",
          specialties: ["Git", "GitHub", "Branching", "Merging"]
        }
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        {
          name: "VS Code",
          proficiency: "Expert",
          yearsExperience: "3+",
          description: "Code editing, debugging, extensions, productivity",
          icon: "fas fa-code",
          techColor: "var(--color-info)",
          specialties: ["IntelliSense", "Extensions", "Debugging", "Git Integration"]
        },
        {
          name: "Linux",
          proficiency: "Advanced",
          yearsExperience: "2+",
          description: "Command line, system administration, scripting",
          icon: "fab fa-linux",
          techColor: "var(--color-linux)",
          specialties: ["Command Line", "Shell Scripting", "System Admin", "Package Management"]
        },
        {
          name: "GitHub Pages",
          proficiency: "Advanced",
          yearsExperience: "2+",
          description: "Static site deployment, CI/CD workflows",
          icon: "fab fa-github",
          techColor: "var(--color-github-icon)",
          specialties: ["Static Deployment", "Actions", "Pages", "Workflows"]
        },
        {
          name: "npm/yarn",
          proficiency: "Advanced",
          yearsExperience: "2+",
          description: "Package management, build tools, dependency management",
          icon: "fab fa-npm",
          techColor: "var(--color-npm)",
          specialties: ["Package Management", "Scripts", "Dependencies", "Build Tools"]
        }
      ]
    }
  ],
  
  // Additional technical areas
  learningAreas: [
    "Docker & Containerization",
    "Cloud Platforms (AWS, Azure)",
    "TypeScript",
    "GraphQL",
    "Test-Driven Development",
    "CI/CD Pipelines"
  ],
  
  // Layout configuration
  layout: {
    wrapperClass: "wrapper style3",
    containerClass: "container",
    gridClass: "row gtr-uniform"
  }
};