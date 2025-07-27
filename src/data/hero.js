/**
 * Hero Section Data
 * Landing page hero content and configuration
 */

export const heroData = {
  // Main Content
  greeting: "Hi, I'm",
  name: "Alejandro Cabral",
  title: "Full-Stack Developer & Software Engineer",
  
  // Description/Bio
  description: [
    "I create bekhgjk,hautiful, functional, and user-centered digital experiences.",
    "Currently studying Computer Science at FP-UNA while building innovative",
    "web applications with modern technologies."
  ].join(" "),
  
  // Alternative descriptions for rotation/variety
  alternativeDescriptions: [
    "Passionate about crafting elegant solutions to complex problems using cutting-edge web technologies.",
    "Dedicated to building scalable applications that make a difference in users' lives.",
    "Focused on creating seamless digital experiences through clean code and thoughtful design."
  ],
  
  // Profile Image
  image: {
    src: "/images/programmer.jpg",
    alt: "Alejandro Cabral",
    lazy: false, // Hero image should load immediately
    effects: {
      grayscale: 20,
      hover: {
        grayscale: 0,
        scale: 1.1
      }
    }
  },
  
  // Status Badge
  status: {
    show: true,
    type: "available", // available, busy, away
    text: "Available for work",
    position: "bottom-right" // bottom-right, top-right, bottom-left, top-left
  },
  
  // Call-to-Action Buttons
  actions: [
    {
      id: "view-work",
      text: "View My Work",
      icon: "fas fa-briefcase",
      url: "/portfolio",
      variant: "primary",
      order: 1
    },
    {
      id: "get-in-touch",
      text: "Get In Touch",
      icon: "fas fa-envelope",
      url: "/contact",
      variant: "secondary",
      order: 2
    },
    {
      id: "download-resume",
      text: "Download Resume",
      icon: "fas fa-download",
      url: "/assets/documents/alejandro-cabral-resume.pdf",
      variant: "outline",
      external: true,
      target: "_blank",
      order: 3
    }
  ],
  
  // Statistics/Metrics
  stats: [
    {
      id: "experience",
      number: 3,
      label: "Years Experience",
      suffix: "+",
      countAnimation: true,
      order: 1
    },
    {
      id: "projects",
      number: 25,
      label: "Projects Completed",
      suffix: "+",
      countAnimation: true,
      order: 2
    },
    {
      id: "technologies",
      number: 15,
      label: "Technologies",
      suffix: "+",
      countAnimation: true,
      order: 3
    }
  ],
  
  // Background Animation
  background: {
    enabled: true,
    type: "floating-shapes", // floating-shapes, particles, gradient
    shapes: [
      {
        id: "shape-1",
        size: { width: 100, height: 100 },
        position: { top: "20%", left: "10%" },
        animation: { duration: 6, type: "float1" }
      },
      {
        id: "shape-2", 
        size: { width: 150, height: 150 },
        position: { top: "60%", right: "20%" },
        animation: { duration: 8, type: "float2" }
      },
      {
        id: "shape-3",
        size: { width: 80, height: 80 },
        position: { bottom: "30%", left: "20%" },
        animation: { duration: 7, type: "float3" }
      },
      {
        id: "shape-4",
        size: { width: 120, height: 120 },
        position: { top: "40%", right: "10%" },
        animation: { duration: 9, type: "float4" }
      },
      {
        id: "shape-5",
        size: { width: 90, height: 90 },
        position: { bottom: "20%", right: "40%" },
        animation: { duration: 5, type: "float5" }
      }
    ]
  },
  
  // Animation Settings
  animations: {
    enabled: true,
    staggerDelay: 200, // ms between element animations
    elements: [
      {
        selector: ".greeting",
        animation: "slideUp",
        delay: 200
      },
      {
        selector: ".name",
        animation: "slideUp", 
        delay: 400
      },
      {
        selector: ".hero-subtitle",
        animation: "slideUp",
        delay: 600
      },
      {
        selector: ".hero-description",
        animation: "slideUp",
        delay: 800
      },
      {
        selector: ".hero-actions",
        animation: "slideUp",
        delay: 1000
      },
      {
        selector: ".hero-stats",
        animation: "slideUp",
        delay: 1200
      }
    ]
  },
  
  // Layout Settings
  layout: {
    variant: "split", // split, centered, full-width
    imagePosition: "left", // left, right (for split layout)
    textAlignment: "left", // left, center, right
    verticalAlignment: "center", // top, center, bottom
    minHeight: "100vh",
    padding: {
      desktop: "var(--space-20) 0",
      mobile: "var(--space-16) 0"
    }
  },
  
  // Responsive Behavior
  responsive: {
    stackOnMobile: true,
    mobileImageOrder: "first", // first, last
    mobileTextAlign: "center"
  },
  
  // Social Proof Elements (optional)
  socialProof: {
    enabled: false,
    testimonial: {
      text: "Alejandro is an exceptional developer with great attention to detail.",
      author: "Client Name",
      company: "Company Name",
      image: "/images/testimonials/client-1.jpg"
    },
    logos: [
      {
        name: "Company 1",
        image: "/images/logos/company-1.svg",
        url: "https://company1.com"
      }
    ]
  }
};