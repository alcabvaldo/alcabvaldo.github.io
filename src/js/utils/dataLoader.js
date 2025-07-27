/**
 * Data Loader Utility
 * Centralized data loading and management system
 */

import { siteData } from '../../data/site.js';
import { navigationData } from '../../data/navigation.js';
import { heroData } from '../../data/hero.js';
import { aboutData } from '../../data/about.js';
import { portfolioData } from '../../data/portfolio.js';
import { contactData } from '../../data/contact.js';

class DataLoader {
  constructor() {
    this.cache = new Map();
    this.loadedData = {};
  }
  
  /**
   * Initialize and load all essential data
   */
  async init() {
    try {
      // Load core site data
      this.loadedData = {
        site: siteData,
        navigation: navigationData,
        hero: heroData,
        about: aboutData,
        portfolio: portfolioData,
        contact: contactData
      };
      
      // Cache the loaded data
      this.cache.set('core_data', this.loadedData);
      
      console.log('✅ Data loaded successfully');
      return this.loadedData;
    } catch (error) {
      console.error('❌ Error loading data:', error);
      throw error;
    }
  }
  
  /**
   * Get all loaded data
   */
  getAll() {
    return this.loadedData;
  }
  
  /**
   * Get specific data section
   */
  get(section) {
    if (!this.loadedData[section]) {
      console.warn(`Data section '${section}' not found`);
      return null;
    }
    return this.loadedData[section];
  }
  
  /**
   * Get site-wide information
   */
  getSite() {
    return this.get('site');
  }
  
  /**
   * Get navigation data
   */
  getNavigation() {
    return this.get('navigation');
  }
  
  /**
   * Get hero section data
   */
  getHero() {
    return this.get('hero');
  }
  
  /**
   * Get about page data
   */
  getAbout() {
    return this.get('about');
  }
  
  /**
   * Get portfolio data
   */
  getPortfolio() {
    return this.get('portfolio');
  }
  
  /**
   * Get contact data
   */
  getContact() {
    return this.get('contact');
  }
  
  /**
   * Update specific data section (for dynamic updates)
   */
  updateSection(section, data) {
    if (this.loadedData[section]) {
      this.loadedData[section] = { ...this.loadedData[section], ...data };
      this.cache.set('core_data', this.loadedData);
      
      // Dispatch custom event for components to listen to
      window.dispatchEvent(new CustomEvent('dataUpdated', {
        detail: { section, data: this.loadedData[section] }
      }));
      
      console.log(`📝 Updated ${section} data`);
      return true;
    }
    return false;
  }
  
  /**
   * Get filtered portfolio projects
   */
  getPortfolioProjects(category = 'all', featured = null) {
    const portfolio = this.getPortfolio();
    if (!portfolio) return [];
    
    let projects = [...portfolio.projects];
    
    // Add featured projects to the main list
    if (portfolio.featured) {
      projects = [...portfolio.featured, ...projects];
    }
    
    // Remove duplicates based on ID
    projects = projects.filter((project, index, self) => 
      index === self.findIndex(p => p.id === project.id)
    );
    
    // Filter by category
    if (category && category !== 'all') {
      projects = projects.filter(project => project.category === category);
    }
    
    // Filter by featured status
    if (featured !== null) {
      projects = projects.filter(project => project.featured === featured);
    }
    
    return projects;
  }
  
  /**
   * Get portfolio categories with project counts
   */
  getPortfolioCategories() {
    const portfolio = this.getPortfolio();
    if (!portfolio) return [];
    
    const projects = this.getPortfolioProjects();
    const categories = [...portfolio.categories];
    
    // Update counts based on actual projects
    categories.forEach(category => {
      if (category.id === 'all') {
        category.count = projects.length;
      } else {
        category.count = projects.filter(p => p.category === category.id).length;
      }
    });
    
    return categories;
  }
  
  /**
   * Get navigation items with dynamic data
   */
  getNavigationItems(type = 'main') {
    const nav = this.getNavigation();
    if (!nav || !nav[type]) return [];
    
    return nav[type].map(item => ({
      ...item,
      // Add dynamic properties if needed
      count: this.getItemCount(item.id)
    }));
  }
  
  /**
   * Get item count for navigation badges
   */
  getItemCount(itemId) {
    switch (itemId) {
      case 'portfolio':
        return this.getPortfolioProjects().length;
      case 'blog':
        // This would come from blog data when implemented
        return 0;
      default:
        return null;
    }
  }
  
  /**
   * Get contact methods with availability status
   */
  getContactMethods() {
    const contact = this.getContact();
    if (!contact) return [];
    
    const site = this.getSite();
    const availability = contact.availability || {};
    
    return {
      ...contact.contact,
      availability: {
        ...availability,
        // Add dynamic status updates
        lastUpdated: new Date().toISOString()
      },
      social: contact.social.map(social => ({
        ...social,
        available: true // Could be dynamic based on API status
      }))
    };
  }
  
  /**
   * Get structured data for SEO
   */
  getStructuredData(pageType = 'person') {
    const site = this.getSite();
    const contact = this.getContact();
    
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${site.urls.domain}#person`,
      name: site.name,
      givenName: site.name.split(' ')[0],
      familyName: site.name.split(' ').slice(1).join(' '),
      jobTitle: site.title,
      description: site.description,
      url: site.urls.domain,
      image: `${site.urls.domain}${site.urls.images.profile}`,
      email: site.contact.email,
      telephone: site.contact.phone,
      sameAs: Object.values(site.social).map(social => social.url),
      address: {
        "@type": "PostalAddress",
        addressCountry: site.contact.location.country,
        addressLocality: site.contact.location.city
      }
    };
    
    // Add page-specific structured data
    switch (pageType) {
      case 'portfolio':
        const portfolio = this.getPortfolio();
        return {
          ...baseStructuredData,
          hasCredential: portfolio.projects.map(project => ({
            "@type": "EducationalOccupationalCredential",
            name: project.title,
            description: project.description,
            url: project.links?.live || project.links?.github
          }))
        };
        
      default:
        return baseStructuredData;
    }
  }
  
  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
    console.log('🗑️ Data cache cleared');
  }
}

// Create singleton instance
const dataLoader = new DataLoader();

// Auto-initialize when module is loaded
dataLoader.init().catch(error => {
  console.error('Failed to initialize data loader:', error);
});

export default dataLoader;