// Skills and technologies data
export const skillsData = {
  // Section configuration
  sectionId: "skills",
  title: "Technical Skills",
  subtitle: "Data Engineering, Backend Development & Programming Technologies",
  
  // Skill categories
  categories: [
    {
      name: "Data Engineering & Analytics",
      skills: [
        {
          name: "Apache Spark",
          proficiency: "Intermediate",
          description: "Large-scale data processing, distributed computing, PySpark",
          icon: "fas fa-fire",
          techColor: "var(--color-spark)",
          specialties: ["PySpark", "Spark SQL", "Data Pipelines", "Distributed Computing"]
        },
        {
          name: "Azure Databricks",
          proficiency: "Intermediate",
          description: "Cloud-based data engineering and analytics platform",
          icon: "fas fa-cloud",
          techColor: "var(--color-azure)",
          specialties: ["Data Pipelines", "Notebooks", "Cluster Management", "ML Integration"]
        },
        {
          name: "ETL Pipelines",
          proficiency: "Intermediate",
          description: "Extract, Transform, Load data processing workflows",
          icon: "fas fa-cogs",
          techColor: "var(--color-etl)",
          specialties: ["Data Transformation", "Pipeline Design", "Automation", "Scheduling"]
        }
      ]
    },
    {
      name: "Programming Languages",
      skills: [
        {
          name: "Java",
          proficiency: "Intermediate",
          description: "Enterprise backend development, Spring framework",
          icon: "fab fa-java",
          techColor: "var(--color-java)",
          specialties: ["Spring Framework", "REST APIs", "Enterprise Apps", "JDBC"]
        },
        {
          name: "SQL",
          proficiency: "Intermediate",
          description: "Database querying and optimization",
          icon: "fas fa-database",
          techColor: "var(--color-sql)",
          specialties: ["Query Optimization", "Joins", "Stored Procedures", "Performance Tuning"]
        },
        {
          name: "C",
          proficiency: "Intermediate",
          description: "System programming, academic instruction",
          icon: "fas fa-code",
          techColor: "var(--color-c)",
          specialties: ["Systems Programming", "Memory Management", "Algorithms"]
        },
        {
          name: "JavaScript",
          proficiency: "Beginner",
          description: "Frontend development and automation",
          icon: "fab fa-js-square",
          techColor: "var(--color-javascript)",
          specialties: ["DOM Manipulation", "Frontend", "Async Programming"]
        },
        {
          name: "Python",
          proficiency: "Expert",
          description: "General-purpose programming, scripting, data engineering, automation",
          icon: "fab fa-python",
          techColor: "var(--color-python)",
          specialties: [
            "PySpark",
            "Data Analysis",
            "Automation",
            "Scripting",
            "OOP",
            "Testing"
          ]
        },
        
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        {
          name: "Spring Framework",
          proficiency: "Intermediate",
          description: "Enterprise Java backend development, REST APIs",
          icon: "fas fa-leaf",
          techColor: "var(--color-spring)",
          specialties: ["REST APIs", "JDBC", "Dependency Injection", "Enterprise Patterns"]
        },
        {
          name: "Oracle Database",
          proficiency: "Intermediate",
          description: "Enterprise database management and optimization",
          icon: "fas fa-database",
          techColor: "var(--color-oracle)",
          specialties: ["Query Optimization", "JDBC", "Performance Tuning", "Enterprise DB"]
        },
        {
          name: "PostgreSQL",
          proficiency: "Beginner",
          description: "Open-source relational database management",
          icon: "fas fa-elephant",
          techColor: "var(--color-postgresql)",
          specialties: ["Advanced SQL", "Query Optimization", "Performance"]
        },
        {
          name: "RESTful APIs",
          proficiency: "Advanced",
          description: "API design, development, and integration",
          icon: "fas fa-exchange-alt",
          techColor: "var(--color-api)",
          specialties: ["API Design", "JSON", "HTTP Methods", "Integration"]
        }
      ]
    },
    {
      name: "Development Tools & Platforms",
      skills: [
        {
          name: "IntelliJ IDEA",
          proficiency: "Advanced",
          description: "Professional Java development environment",
          icon: "fas fa-laptop-code",
          techColor: "var(--color-intellij)",
          specialties: ["Java Development", "Debugging", "Code Refactoring", "Maven Integration"]
        },
        {
          name: "DBeaver",
          proficiency: "Intermediate",
          description: "Universal database tool for SQL development",
          icon: "fas fa-database",
          techColor: "var(--color-dbeaver)",
          specialties: ["SQL Development", "Query Optimization", "Database Management", "Data Export"]
        },
        {
          name: "Linux",
          proficiency: "Intermediate",
          description: "System administration, scripting, server management",
          icon: "fab fa-linux",
          techColor: "var(--color-linux)",
          specialties: ["Bash Scripting", "System Admin", "Process Management", "File Systems"]
        },
        {
          name: "Docker",
          proficiency: "Beginner",
          description: "Containerization and deployment automation",
          icon: "fab fa-docker",
          techColor: "var(--color-docker)",
          specialties: ["Containerization", "Image Building", "Deployment", "Orchestration"]
        },
        {
          name: "Git & Version Control",
          proficiency: "Advanced",
          description: "Source code management and collaboration",
          icon: "fab fa-git-alt",
          techColor: "var(--color-git)",
          specialties: ["Branching Strategies", "Merging", "Collaboration", "GitHub"]
        }
      ]
    },
    {
      name: "Project Management & Methodologies",
      skills: [
        {
          name: "Agile/Scrum",
          proficiency: "Intermediate",
          description: "Certified Scrum Master, agile project management",
          icon: "fas fa-users",
          techColor: "var(--color-agile)",
          specialties: ["Sprint Planning", "Stakeholder Management", "Team Leadership", "Process Improvement"]
        },
        {
          name: "Jira",
          proficiency: "Intermediate",
          description: "Project tracking and agile workflow management",
          icon: "fas fa-tasks",
          techColor: "var(--color-jira)",
          specialties: ["Issue Tracking", "Sprint Management", "Reporting", "Workflow Configuration"]
        },
        {
          name: "Cybersecurity",
          proficiency: "Beginner",
          description: "Ethical hacking, digital forensics, security analysis",
          icon: "fas fa-shield-alt",
          techColor: "var(--color-security)",
          specialties: ["Ethical Hacking", "CTF Challenges", "Digital Forensics", "OSINT"]
        }
      ]
    }
  ],
  
  // Layout configuration
  layout: {
    wrapperClass: "wrapper style3",
    containerClass: "container",
    gridClass: "row gtr-uniform"
  }
};