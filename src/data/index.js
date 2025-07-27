// Main data export - central hub for all website content
// Import all data modules
import { siteConfig } from './config/site.js';
import { themeConfig } from './config/theme.js';
import { personalData } from './content/personal.js';
import { navigationData } from './content/navigation.js';
import { heroData } from './content/hero.js';
import { contactData } from './content/contact.js';
import { socialLinks } from './content/social.js';
import { images } from './assets/images.js';
import { scripts } from './assets/scripts.js';

// Export all data for components to use
export {
  siteConfig,
  themeConfig,
  personalData,
  navigationData,
  heroData,
  contactData,
  socialLinks,
  images,
  scripts
};

// Default export with all data
export default {
  site: siteConfig,
  theme: themeConfig,
  personal: personalData,
  navigation: navigationData,
  hero: heroData,
  contact: contactData,
  social: socialLinks,
  images,
  scripts
}; 