// Work Experience Data
export const workData = {
  // Section configuration
  sectionId: "work",
  title: "Work Experience",
  subtitle: "My professional journey and career highlights",
  
  // Layout configuration
  layout: {
    wrapperClass: "wrapper style1 fade-up",
    containerClass: "container"
  },
  
  // Work experiences (ordered by most recent first)
  experiences: [
    {
      id: "stoic-finch-data-engineer",
      company: "Stoic Finch",
      position: "Data Engineer",
      duration: "October 2024 - Present",
      location: "Alberta, Canada (Remote)",
      type: "Contract",
      status: "current", // current, completed
      
      description: "Contract Data Engineer specializing in data pipeline development and analytics. Working remotely for a Canadian company while maintaining academic studies in Paraguay.",
      
      responsibilities: [
        "Design and implement ETL data pipelines using Apache Spark",
        "Develop PySpark applications for large-scale data processing",
        "Work with Azure Databricks for cloud-based data engineering solutions",
        "Perform log analysis and data transformation operations",
        "Collaborate with international teams on data architecture decisions"
      ],
      
      technologies: [
        "Apache Spark", "PySpark", "Azure Databricks", "Python", 
        "ETL", "Data Pipelines", "Log Analysis", "Machine Learning"
      ],
      
      achievements: [
        "Successfully implemented scalable data processing pipelines",
        "Earned Databricks Certified Data Engineer Associate certification",
        "Contributing to international data engineering projects from Paraguay"
      ],
      
      // Company/client information
      companyInfo: {
        website: "https://www.linkedin.com/company/40891205/",
        industry: "Data Engineering",
        size: "Technology Company"
      }
    },
    
    {
      id: "etica-software-developer",
      company: "e-Tica",
      position: "Software Developer",
      duration: "March 2024 - September 2024",
      location: "Paraguay",
      type: "Full-time",
      status: "completed",
      
      description: "Backend software developer focusing on Java Spring applications with Oracle database connectivity. Responsible for API development, process automation, and production deployment validation.",
      
      responsibilities: [
        "Develop RESTful APIs using Java Spring framework connecting to Oracle DB via JDBC",
        "Optimize database queries and improve application performance using DBeaver",
        "Automate deployment processes through Bash scripting (reduced 5 commands to 1)",
        "Create Python automation scripts for server log analysis and API testing",
        "Conduct 2 AM smoke testing during low usage for production rollout validation",
        "Collaborate with frontend, QA, and product teams to deliver sprint objectives"
      ],
      
      technologies: [
        "Java", "Spring Framework", "Oracle Database", "JDBC", "RESTful APIs",
        "Python", "Bash", "Linux", "DBeaver", "Postman", "IntelliJ IDEA", "Maven", "JBoss"
      ],
      
      achievements: [
        "Automated deployment processes reducing manual steps by 80%",
        "Improved database query performance through optimization",
        "Successfully validated production deployments through comprehensive smoke testing",
        "Built reliable Python tools for server monitoring and troubleshooting"
      ],
      
      companyInfo: {
        website: "https://eko.com.py",
        industry: "Software Development",
        size: "Technology Company"
      }
    },
    
    {
      id: "wichita-state-exchange",
      company: "Wichita State University",
      position: "Exchange Student - Computer Science",
      duration: "August 2023 - December 2023",
      location: "Kansas, USA",
      type: "Education",
      status: "completed",
      
      description: "International exchange program funded by CPK Scholarship (BECAL and Paraguay-Kansas Committee). Specialized studies in Agile Product Management, Cybersecurity, and Ethical Hacking.",
      
      responsibilities: [
        "Study advanced Agile Product Management methodologies",
        "Participate in Cybersecurity and Ethical Hacking coursework",
        "Engage in CTF challenges focusing on cryptography and network analysis",
        "Tutor American students in data structures and algorithms",
        "Volunteer in tech outreach programs promoting STEM education"
      ],
      
      technologies: [
        "Cybersecurity Tools", "Ethical Hacking", "Cryptography", 
        "Network Analysis", "CTF Challenges", "Agile Methodologies", "OSINT"
      ],
      
      achievements: [
        "Awarded CPK Scholarship",
        "Successfully completed cybersecurity and ethical hacking curriculum",
        "Gained international experience and cross-cultural collaboration skills",
        "Contributed to STEM education outreach programs"
      ],
      
      companyInfo: {
        website: "https://www.wichita.edu",
        industry: "Higher Education",
        size: "University"
      }
    },
    
    {
      id: "computer-science-student",
      company: "FP-UNA (Facultad Politécnica - Universidad Nacional de Asunción)",
      position: "Computer Science Student",
      duration: "March 2019 - December 2025",
      location: "Paraguay",
      type: "Education", 
      status: "current",
      
      description: "Pursuing Ingeniería Informática (Computer Engineering) degree with exceptional academic performance (GPA: 4.57/5.00). Served as student instructor and participated in various programming competitions.",
      
      responsibilities: [
        "Study core computer science concepts including algorithms and data structures",
        "Develop projects using multiple programming languages and frameworks",
        "Serve as student instructor for C programming courses",
        "Participate in tech competitions and collaborative software development",
        "Research emerging technologies and maintain high academic standards"
      ],
      
      technologies: [
        "Java", "Python", "C", "Angular", "TypeScript", "Dart", "Flutter",
        "Django", "Hibernate", "EJB", "JavaScript", "Database Design", "Algorithms"
      ],
      
      achievements: [
        "Maintaining exceptional GPA of 4.57/5.00",
        "Served as student instructor for C programming",
        "Participated in programming competitions and group projects",
        "Selected for international exchange program based on academic merit"
      ],
      
      companyInfo: {
        website: "https://www.pol.una.py/",
        industry: "Higher Education", 
        size: "University"
      }
    },
    
    {
      id: "personal-projects",
      company: "Personal Projects",
      position: "Independent Developer",
      duration: "2020 - Present",
      location: "Remote",
      type: "Personal",
      status: "ongoing",
      
      description: "Continuously working on personal projects to expand skills and explore new technologies. Building portfolio projects that demonstrate various aspects of modern web development.",
      
      responsibilities: [
        "Design and develop personal portfolio website using modern frameworks",
        "Experiment with new technologies and development approaches",
        "Create open-source projects and contribute to the developer community",
        "Document learning progress and share knowledge through code",
        "Build projects that solve real-world problems or explore creative ideas"
      ],
      
      technologies: [
        "Astro", "React", "Vue.js", "JavaScript", "TypeScript", 
        "SASS", "CSS Grid", "Responsive Design", "Git", "GitHub Pages"
      ],
      
      achievements: [
        "Gained proficiency in modern web development frameworks",
        "Developed strong understanding of responsive design principles",
        "Created maintainable and scalable code architectures"
      ],
      
      companyInfo: {
        website: "https://github.com/alcabvaldo",
        industry: "Software Development",
        size: "Individual"
      }
    }
  ],
  
  // Skills gained through work experience
  skillsGained: [
    "Full-Stack Development",
    "Client Communication",
    "Project Management", 
    "Problem Solving",
    "Code Review",
    "Performance Optimization",
    "Responsive Design",
    "Version Control"
  ],
  
  // Work statistics
  statistics: {
    totalProjects: 8,
    professionalPositions: 2,
    personalProjects: 3,
    technologiesUsed: 20,
    yearsOfExperience: "5+",
    internationalExperience: 1
  },
  
  // Call to action for work section
  callToAction: {
    title: "Let's Work Together",
    description: "I'm always interested in new opportunities and challenging projects. Whether you need a full-stack developer or want to collaborate on an exciting project, I'd love to hear from you.",
    buttonText: "Get In Touch",
    buttonLink: "#contact"
  }
};