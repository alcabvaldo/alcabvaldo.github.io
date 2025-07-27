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
      id: "freelance-developer-2024",
      company: "Freelance Developer",
      position: "Full-Stack Developer",
      duration: "2024 - Present",
      location: "Remote",
      type: "Freelance",
      status: "current", // current, completed
      
      description: "Working on various web development projects using modern technologies and frameworks. Focus on creating responsive, performant web applications with clean, maintainable code.",
      
      responsibilities: [
        "Develop custom web applications using React, Vue.js, and Astro",
        "Build responsive and mobile-first user interfaces",
        "Implement backend solutions with Node.js and Python",
        "Collaborate with clients to understand requirements and deliver solutions",
        "Optimize applications for performance and SEO"
      ],
      
      technologies: [
        "JavaScript", "TypeScript", "React", "Vue.js", "Astro", 
        "Node.js", "Python", "HTML5", "CSS3", "SASS", "Git"
      ],
      
      achievements: [
        "Successfully delivered 5+ client projects on time and within budget",
        "Improved website performance by 40% through optimization techniques",
        "Built responsive designs that work across all device types"
      ],
      
      // Company/client information
      companyInfo: {
        website: null,
        industry: "Web Development",
        size: "Individual"
      }
    },
    
    {
      id: "computer-science-student",
      company: "FP-UNA (Facultad Politécnica - Universidad Nacional de Asunción)",
      position: "Computer Science Student",
      duration: "2021 - Present",
      location: "Paraguay",
      type: "Education",
      status: "current",
      
      description: "Pursuing a degree in Computer Science with focus on software development, algorithms, and modern programming paradigms. Active participation in academic projects and coding challenges.",
      
      responsibilities: [
        "Study core computer science concepts including algorithms and data structures",
        "Develop projects using various programming languages and frameworks",
        "Participate in group projects and collaborative software development",
        "Research emerging technologies and best practices",
        "Maintain high academic performance while building practical skills"
      ],
      
      technologies: [
        "Java", "Python", "C++", "JavaScript", "HTML/CSS", 
        "Database Design", "Software Engineering", "Algorithms"
      ],
      
      achievements: [
        "Maintaining strong academic performance in computer science coursework",
        "Built multiple academic projects demonstrating programming proficiency",
        "Developed problem-solving skills through algorithmic challenges"
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
        "Built and deployed multiple web applications",
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
    clientProjects: 5,
    personalProjects: 3,
    technologiesUsed: 15,
    yearsOfExperience: "3+"
  },
  
  // Call to action for work section
  callToAction: {
    title: "Let's Work Together",
    description: "I'm always interested in new opportunities and challenging projects. Whether you need a full-stack developer or want to collaborate on an exciting project, I'd love to hear from you.",
    buttonText: "Get In Touch",
    buttonLink: "#contact"
  }
};