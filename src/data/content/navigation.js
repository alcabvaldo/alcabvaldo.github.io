// Navigation data - updated for multi-page structure
export const navigationData = {
  // Main navigation menu items
  mainMenu: [
    {
      label: "Home",
      href: "/",
      active: true
    },
    {
      label: "About Me",
      href: "/about",
      active: true
    },
    {
      label: "Skills",
      href: "/about#skills",
      active: true
    },
    {
      label: "Projects",
      href: "/about#projects",
      active: true
    },
    {
      label: "Work",
      href: "/about#work",
      active: true
    },
    {
      label: "Contact", 
      href: "/about#contact",
      active: true
    }
  ],
  
  // Future sections that are currently commented out
  futureMenuItems: [
    {
      label: "Blog",
      href: "/blog", 
      active: false
    }
  ],
  
  // Navigation settings
  navId: "nav",
  containerClass: "container"
}; 