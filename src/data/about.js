/**
 * About Page Data
 * Personal information, biography, and professional details
 */

export const aboutData = {
  // Page Meta
  title: "About Me",
  subtitle: "Get to know the person behind the code",
  description: "Learn about my journey, skills, and passion for creating digital solutions.",
  
  // Personal Information
  personal: {
    fullName: "Alejandro Nicolás Cabral Valdovinos",
    nickname: "Alejandro",
    age: 25,
    location: {
      city: "Asunción",
      country: "Paraguay",
      timezone: "GMT-3"
    },
    languages: [
      {
        name: "Spanish",
        level: "Native",
        flag: "🇵🇾"
      },
      {
        name: "English",
        level: "Advanced",
        flag: "🇺🇸"
      },
      {
        name: "Portuguese",
        level: "Intermediate", 
        flag: "🇧🇷"
      }
    ]
  },
  
  // Biography/Story
  story: {
    introduction: "I'm a passionate full-stack developer with a love for creating digital solutions that make a real impact. My journey in technology began during my university years, where I discovered the power of code to transform ideas into reality.",
    
    sections: [
      {
        title: "The Beginning",
        content: "My fascination with technology started early, but it wasn't until I wrote my first 'Hello World' program that I knew I had found my calling. The ability to create something from nothing, to solve complex problems with elegant solutions, captured my imagination completely."
      },
      {
        title: "Education & Growth",
        content: "Currently pursuing my degree in Computer Science at FP-UNA, I've complemented my formal education with countless hours of self-learning, online courses, and hands-on projects. I believe in the power of continuous learning in our ever-evolving field."
      },
      {
        title: "Professional Journey",
        content: "Over the past 3 years, I've worked on diverse projects ranging from small business websites to complex web applications. Each project has taught me something new and reinforced my belief that good code is not just functional, but also maintainable and scalable."
      },
      {
        title: "Philosophy",
        content: "I believe in writing clean, efficient code and creating user experiences that are both beautiful and functional. My approach combines technical excellence with a deep understanding of user needs and business objectives."
      }
    ]
  },
  
  // Current Status
  status: {
    title: "What I'm doing now",
    items: [
      "🎓 Completing my Computer Science degree at FP-UNA",
      "💼 Available for freelance projects and full-time opportunities",
      "📚 Learning React Native and mobile development",
      "🏗️ Building a SaaS product for small businesses",
      "✍️ Writing technical articles and tutorials",
      "🌱 Contributing to open-source projects"
    ]
  },
  
  // Skills & Technologies
  skills: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Frontend",
        icon: "fas fa-desktop",
        color: "#3B82F6",
        skills: [
          { name: "React", level: 90, icon: "fab fa-react" },
          { name: "JavaScript", level: 95, icon: "fab fa-js" },
          { name: "TypeScript", level: 85, icon: "fab fa-js" },
          { name: "HTML5", level: 95, icon: "fab fa-html5" },
          { name: "CSS3", level: 90, icon: "fab fa-css3" },
          { name: "Sass", level: 85, icon: "fab fa-sass" },
          { name: "Tailwind CSS", level: 80, icon: "fas fa-palette" },
          { name: "Vue.js", level: 70, icon: "fab fa-vuejs" }
        ]
      },
      {
        name: "Backend",
        icon: "fas fa-server",
        color: "#10B981",
        skills: [
          { name: "Node.js", level: 88, icon: "fab fa-node-js" },
          { name: "Express.js", level: 85, icon: "fas fa-code" },
          { name: "Python", level: 80, icon: "fab fa-python" },
          { name: "PostgreSQL", level: 75, icon: "fas fa-database" },
          { name: "MongoDB", level: 70, icon: "fas fa-leaf" },
          { name: "Redis", level: 65, icon: "fas fa-memory" },
          { name: "GraphQL", level: 70, icon: "fas fa-project-diagram" },
          { name: "REST APIs", level: 90, icon: "fas fa-exchange-alt" }
        ]
      },
      {
        name: "Tools & DevOps",
        icon: "fas fa-tools",
        color: "#F59E0B",
        skills: [
          { name: "Git", level: 95, icon: "fab fa-git-alt" },
          { name: "Docker", level: 75, icon: "fab fa-docker" },
          { name: "AWS", level: 70, icon: "fab fa-aws" },
          { name: "Netlify", level: 85, icon: "fas fa-cloud" },
          { name: "Vercel", level: 80, icon: "fas fa-bolt" },
          { name: "GitHub Actions", level: 70, icon: "fab fa-github" },
          { name: "VS Code", level: 95, icon: "fas fa-code" },
          { name: "Figma", level: 75, icon: "fab fa-figma" }
        ]
      }
    ]
  },
  
  // Education
  education: [
    {
      id: "fp-una",
      institution: "Facultad Politécnica - Universidad Nacional de Asunción",
      degree: "Bachelor of Computer Science",
      period: "2020 - Present",
      location: "Asunción, Paraguay",
      status: "In Progress",
      description: "Focusing on software engineering, algorithms, and system design. Relevant coursework includes Data Structures, Web Development, Database Systems, and Software Engineering Principles.",
      logo: "/images/education/fp-una.png",
      website: "https://www.una.py/"
    },
    {
      id: "certifications",
      institution: "Various Online Platforms",
      degree: "Professional Certifications",
      period: "2019 - Present",
      location: "Online",
      status: "Ongoing",
      description: "Continuous learning through platforms like Coursera, Udemy, and freeCodeCamp. Completed certifications in React, Node.js, AWS Cloud Practitioner, and more.",
      courses: [
        "Full Stack Web Development - freeCodeCamp",
        "React - The Complete Guide - Udemy",
        "AWS Cloud Practitioner - AWS",
        "JavaScript Algorithms and Data Structures - freeCodeCamp"
      ]
    }
  ],
  
  // Experience Timeline
  experience: [
    {
      id: "freelance",
      title: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "2021 - Present",
      location: "Paraguay (Remote)",
      type: "Freelance",
      current: true,
      description: "Developing custom web applications for various clients, from small businesses to startups. Specializing in React, Node.js, and modern web technologies.",
      achievements: [
        "Successfully delivered 15+ projects on time and within budget",
        "Built responsive web applications serving 10,000+ monthly users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Achieved 95% client satisfaction rate with excellent feedback"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      id: "intern",
      title: "Web Development Intern",
      company: "TechStart Paraguay",
      period: "2020 - 2021",
      location: "Asunción, Paraguay",
      type: "Internship",
      current: false,
      description: "Assisted in developing web applications and learning industry best practices under senior developer mentorship.",
      achievements: [
        "Contributed to 3 major client projects",
        "Learned Agile development methodologies",
        "Implemented responsive design principles",
        "Gained experience with version control and team collaboration"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  
  // Personal Interests
  interests: {
    title: "When I'm not coding",
    items: [
      {
        name: "Technology Trends",
        icon: "fas fa-microchip",
        description: "Following the latest developments in AI, web technologies, and software architecture"
      },
      {
        name: "Photography",
        icon: "fas fa-camera",
        description: "Capturing moments and exploring creative composition techniques"
      },
      {
        name: "Gaming",
        icon: "fas fa-gamepad",
        description: "Strategy games and indie titles that showcase creative game design"
      },
      {
        name: "Music Production",
        icon: "fas fa-music",
        description: "Creating electronic music and learning audio production techniques"
      },
      {
        name: "Fitness",
        icon: "fas fa-dumbbell",
        description: "Staying active with weightlifting and outdoor activities"
      },
      {
        name: "Reading",
        icon: "fas fa-book",
        description: "Technical books, science fiction, and personal development literature"
      }
    ]
  },
  
  // Fun Facts
  funFacts: {
    title: "Fun Facts About Me",
    facts: [
      "☕ I've consumed approximately 2,190 cups of coffee while coding",
      "🌙 I'm most productive between 10 PM and 2 AM",
      "🎵 I have over 50 playlists optimized for different types of coding tasks",
      "📚 I've read over 30 programming books in the last 3 years",
      "🎮 I built my first game at age 16 using Python and Pygame",
      "🌍 I dream of working remotely while traveling the world",
      "🤖 I have a personal AI assistant that I built to manage my daily tasks"
    ]
  },
  
  // Values & Principles
  values: {
    title: "My Core Values",
    principles: [
      {
        name: "Quality First",
        description: "I believe in doing things right the first time, with attention to detail and commitment to excellence."
      },
      {
        name: "Continuous Learning",
        description: "Technology evolves rapidly, and staying current is essential for delivering the best solutions."
      },
      {
        name: "User-Centric Design",
        description: "Every line of code should serve the end user and enhance their experience."
      },
      {
        name: "Collaboration",
        description: "The best results come from working together, sharing knowledge, and supporting each other."
      },
      {
        name: "Innovation",
        description: "I'm always looking for new ways to solve problems and improve existing solutions."
      }
    ]
  }
};