// Education and academic background data
export const educationData = {
  // Section configuration
  sectionId: "education",
  title: "Education",
  subtitle: "Academic background and continuous learning",
  
  // Primary education
  university: {
    institution: "Facultad Politécnica - Universidad Nacional de Asunción",
    shortName: "FP-UNA",
    degree: "Computer Science",
    status: "Current Student",
    location: "Paraguay",
    website: "https://www.pol.una.py/",
    logo: "/images/education/fp-una-logo.png",
    description: "Pursuing a comprehensive Computer Science education with focus on software engineering, algorithms, and modern programming practices.",
    startDate: "2022",
    expectedGraduation: "2026",
    highlights: [
      "Strong foundation in computer science fundamentals",
      "Hands-on programming experience across multiple languages",
      "Collaborative project work and team development",
      "Modern software engineering methodologies"
    ]
  },
  
  // Relevant coursework
  coursework: [
    {
      category: "Programming Fundamentals",
      courses: [
        {
          name: "Introduction to Programming",
          language: "Python",
          description: "Basic programming concepts, control structures, functions",
          skills: ["Variables", "Loops", "Functions", "Problem Solving"]
        },
        {
          name: "Object-Oriented Programming", 
          language: "Java",
          description: "OOP principles, classes, inheritance, polymorphism",
          skills: ["Classes", "Inheritance", "Encapsulation", "Design Patterns"]
        },
        {
          name: "Data Structures",
          language: "C++",
          description: "Arrays, linked lists, trees, graphs, hash tables",
          skills: ["Linear Structures", "Tree Structures", "Graph Algorithms", "Hashing"]
        }
      ]
    },
    {
      category: "Web Development",
      courses: [
        {
          name: "Web Programming",
          language: "JavaScript",
          description: "Frontend development, DOM manipulation, responsive design",
          skills: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"]
        },
        {
          name: "Database Systems",
          language: "SQL",
          description: "Relational databases, query optimization, database design",
          skills: ["SQL Queries", "Database Design", "Normalization", "Optimization"]
        }
      ]
    },
    {
      category: "Computer Science Theory",
      courses: [
        {
          name: "Algorithms and Complexity",
          language: "Multiple",
          description: "Algorithm design, analysis, complexity theory",
          skills: ["Algorithm Design", "Big O Analysis", "Optimization", "Problem Solving"]
        },
        {
          name: "Software Engineering",
          language: "Multiple",
          description: "Software development lifecycle, testing, documentation",
          skills: ["SDLC", "Testing", "Documentation", "Version Control"]
        }
      ]
    }
  ],
  
  // Academic projects
  academicProjects: [
    {
      title: "Student Management System",
      course: "Database Systems",
      description: "Full-stack web application for managing student records with CRUD operations",
      technologies: ["JavaScript", "Node.js", "SQL", "HTML/CSS"],
      highlights: ["Database design", "RESTful API", "User authentication", "Responsive UI"]
    },
    {
      title: "Sorting Algorithm Visualizer",
      course: "Algorithms and Complexity", 
      description: "Interactive web application visualizing different sorting algorithms",
      technologies: ["JavaScript", "Canvas API", "HTML/CSS"],
      highlights: ["Algorithm animation", "Performance comparison", "Interactive controls", "Educational tool"]
    },
    {
      title: "Library Management System",
      course: "Software Engineering",
      description: "Object-oriented application following software engineering best practices",
      technologies: ["Java", "MySQL", "JavaFX"],
      highlights: ["OOP design", "MVC architecture", "Unit testing", "Documentation"]
    }
  ],
  
  // Certifications and achievements
  certifications: [
    {
      title: "Web Development Fundamentals",
      provider: "Online Course Platform",
      date: "2023",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "Git and GitHub Workflow",
      provider: "GitHub Learning Lab",
      date: "2023",
      skills: ["Version Control", "Collaboration", "Open Source"]
    }
  ],
  
  // Learning goals
  learningGoals: [
    "Advanced JavaScript frameworks and libraries",
    "Backend development with modern technologies",
    "DevOps and deployment automation",
    "Mobile application development",
    "Machine learning fundamentals",
    "Open source contribution"
  ],
  
  // Layout configuration
  layout: {
    wrapperClass: "wrapper style2",
    containerClass: "container",
    timelineClass: "timeline"
  }
};