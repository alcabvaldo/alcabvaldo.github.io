// Hero section data (extracted from current Hero component)
export const heroData = {
  // Section configuration
  sectionId: "top",
  wrapperClass: "wrapper style4",
  
  // Text content - all text fragments
  greeting: "Hi, I'm",
  name: "Alejandro Cabral",
  role: "Data Engineer",
  subtitle: "Computer Science Student & Data Engineering Professional",
  
  // Description text fragments
  rolePrefix: "I'm a dedicated",
  roleIntroduction: " currently studying Computer Science at",
  
  // Complete description (alternative to fragments)
  fullDescription: "I'm a dedicated Data Engineer with expertise in Apache Spark and backend development, currently studying Computer Science at FP-UNA while working remotely for international companies.",
  
  // Additional professional info
  tagline: "Transforming data into insights, building scalable solutions",
  location: "Paraguay",
  
  // University information
  university: {
    name: "FP-UNA",
    url: "https://www.pol.una.py/"
  },
  
  // Image configuration
  image: {
    src: "/images/programmer.jpg",
    alt: "Computer with code",
    class: "image fit blackAndWhite"
  },
  
  // Layout classes
  layout: {
    imageColumn: "col-4 col-5-large col-12-medium",
    contentColumn: "col-8 col-7-large col-12-medium",
    containerClass: "container fadeIn"
  },
  
  // Social links (basic ones for hero)
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/alcabvaldo",
      icon: "fa-github",
      label: "Github"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos-8253a9186/",
      icon: "fa-linkedin-in",
      label: "LinkedIn"
    }
  ]
}; 