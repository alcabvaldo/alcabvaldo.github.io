// Theme configuration and visual settings
export const themeConfig = {
  // Animation settings for SAL.js
  animations: {
    threshold: 0.2,
    once: true,
    duration: 600,
    
    // Specific animation configurations
    hero: {
      container: {
        animation: "fade",
        duration: 800
      },
      image: {
        animation: "slide-right",
        delay: 200,
        duration: 600
      },
      content: {
        animation: "slide-left", 
        delay: 400,
        duration: 600
      },
      social: {
        animation: "slide-up",
        delay: 600,
        duration: 400
      }
    },
    
    contact: {
      container: {
        animation: "fade",
        duration: 600
      },
      button: {
        animation: "zoom-in",
        delay: 200,
        duration: 500
      },
      title: {
        animation: "slide-up",
        delay: 300,
        duration: 400
      },
      social: {
        animation: "slide-up",
        delay: 400,
        duration: 500
      },
      hr: {
        animation: "slide-up",
        delay: 500,
        duration: 300
      },
      copyright: {
        animation: "fade",
        delay: 600,
        duration: 400
      }
    }
  },
  
  // CSS classes and styling
  classes: {
    gradientText: "gradient-text",
    imageFilter: "blackAndWhite",
    imageFit: "image fit"
  },
  
  // Layout settings
  layout: {
    containerClass: "container",
    wrapperClass: "wrapper style4",
    mediumContainer: "container medium"
  }
}; 