/**
 * Main Application Script
 * Handles dynamic content loading and site functionality
 */

class PortfolioApp {
  constructor() {
    this.content = CONTENT;
    this.currentPage = 'home';
    this.isLoading = false;
    this.init();
  }

  init() {
    this.bindEvents();
    this.loadContent();
    this.initializeComponents();
  }

  bindEvents() {
    // Navigation handling
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1);
        this.navigateTo(target);
      }
    });

    // Theme toggle
    document.addEventListener('click', (e) => {
      if (e.target.matches('.theme-toggle')) {
        e.preventDefault();
        ThemeManager.toggleDarkMode();
      }
    });

    // Contact form submission
    document.addEventListener('submit', (e) => {
      if (e.target.matches('#contact-form')) {
        e.preventDefault();
        this.handleContactForm(e.target);
      }
    });

    // Portfolio filtering
    document.addEventListener('click', (e) => {
      if (e.target.matches('.portfolio-filter')) {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        this.filterPortfolio(category);
      }
    });

    // Search functionality
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }
  }

  navigateTo(section) {
    this.currentPage = section;
    
    // Update active navigation
    document.querySelectorAll('#nav a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${section}`) {
        link.classList.add('active');
      }
    });

    // Smooth scroll to section
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  loadContent() {
    this.loadNavigation();
    this.loadHeroSection();
    this.loadAboutSection();
    this.loadSkillsSection();
    this.loadExperienceSection();
    this.loadPortfolioSection();
    this.loadEducationSection();
    this.loadBlogSection();
    this.loadContactSection();
    this.loadFooter();
    this.updateSEO();
  }

  loadNavigation() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const navItems = this.content.navigation.map(item => `
      <li><a href="${item.href}" title="${item.name}">
        <i class="fas ${item.icon}"></i>
        <span>${item.name}</span>
      </a></li>
    `).join('');

    nav.innerHTML = `
      <ul class="container">
        ${navItems}
        <li class="theme-toggle-wrapper">
          <button class="theme-toggle" title="Toggle theme">
            <i class="fas fa-moon"></i>
          </button>
        </li>
      </ul>
    `;
  }

  loadHeroSection() {
    const heroSection = document.querySelector('#top .container');
    if (!heroSection) return;

    const { personal, social } = this.content;
    
    heroSection.innerHTML = `
      <div class="row">
        <div class="col-4 col-5-large col-12-medium">
          <span class="image fit blackAndWhite">
            <img src="${personal.profileImage}" alt="${personal.name}" loading="lazy" />
          </span>
        </div>
        <div class="col-8 col-7-large col-12-medium">
          <header>
            <h1>Hi. I'm <strong class="gradient-text">${personal.name}</strong></h1>
            <p class="tagline">${personal.tagline}</p>
          </header>
          <p class="description">${personal.description}</p>
          <div class="hero-actions">
            <a href="#contact" class="button primary large scrolly">
              <i class="fas fa-envelope"></i> Get In Touch
            </a>
            <a href="${personal.resumePDF}" class="button secondary large" target="_blank">
              <i class="fas fa-download"></i> Download Resume
            </a>
          </div>
          <ul class="social">
            ${social.map(link => `
              <li>
                <a href="${link.url}" class="icon brands ${link.icon}" title="${link.description}" target="_blank" rel="noopener">
                  <span class="label">${link.name}</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  loadAboutSection() {
    const aboutContainer = document.querySelector('#about');
    if (!aboutContainer) return;

    const { about } = this.content;
    
    aboutContainer.innerHTML = `
      <div class="container">
        <header>
          <h2>${about.title}</h2>
          <p>${about.subtitle}</p>
        </header>
        <div class="row">
          <div class="col-8 col-12-medium">
            <div class="about-content">
              ${about.paragraphs.map(p => `<p>${p}</p>`).join('')}
            </div>
          </div>
          <div class="col-4 col-12-medium">
            <div class="stats">
              ${about.stats.map(stat => `
                <div class="stat">
                  <div class="stat-number">${stat.value}</div>
                  <div class="stat-label">${stat.label}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  loadSkillsSection() {
    const skillsContainer = document.querySelector('#skills');
    if (!skillsContainer) return;

    const { skills } = this.content;
    
    skillsContainer.innerHTML = `
      <div class="container">
        <header>
          <h2>${skills.title}</h2>
          <p>${skills.subtitle}</p>
        </header>
        <div class="row">
          ${skills.categories.map(category => `
            <div class="col-4 col-12-medium">
              <section class="skill-category">
                <h3><i class="fas ${category.icon}"></i> ${category.name}</h3>
                <div class="skills-list">
                  ${category.skills.map(skill => `
                    <div class="skill-item">
                      <div class="skill-header">
                        <span class="skill-name">
                          <i class="${skill.icon}"></i> ${skill.name}
                        </span>
                        <span class="skill-level">${skill.level}%</span>
                      </div>
                      <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </section>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  loadExperienceSection() {
    const expContainer = document.querySelector('#experience');
    if (!expContainer) return;

    const { experience } = this.content;
    
    expContainer.innerHTML = `
      <div class="container">
        <header>
          <h2>${experience.title}</h2>
          <p>${experience.subtitle}</p>
        </header>
        <div class="timeline">
          ${experience.jobs.map((job, index) => `
            <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
              <div class="timeline-content">
                <div class="job-header">
                  <h3>${job.title}</h3>
                  <h4>${job.company}</h4>
                  <div class="job-meta">
                    <span class="period">${job.period}</span>
                    <span class="type">${job.type}</span>
                    <span class="location">${job.location}</span>
                  </div>
                </div>
                <p class="job-description">${job.description}</p>
                <ul class="achievements">
                  ${job.achievements.map(achievement => `
                    <li>${achievement}</li>
                  `).join('')}
                </ul>
                <div class="technologies">
                  ${job.technologies.map(tech => `
                    <span class="tech-tag">${tech}</span>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  loadPortfolioSection() {
    const portfolioContainer = document.querySelector('#portfolio');
    if (!portfolioContainer) return;

    const { portfolio } = this.content;
    
    portfolioContainer.innerHTML = `
      <div class="container">
        <header>
          <h2>${portfolio.title}</h2>
          <p>${portfolio.subtitle}</p>
        </header>
        <div class="portfolio-filters">
          ${portfolio.categories.map((category, index) => `
            <button class="portfolio-filter ${index === 0 ? 'active' : ''}" data-category="${category.toLowerCase().replace(/\s+/g, '-')}">
              ${category}
            </button>
          `).join('')}
        </div>
        <div class="row portfolio-grid" id="portfolio-grid">
          ${portfolio.projects.map(project => `
            <div class="col-4 col-6-medium col-12-small portfolio-item" data-category="${project.category.toLowerCase().replace(/\s+/g, '-')}">
              <article class="box style2">
                <div class="image-container">
                  <img src="${project.image}" alt="${project.title}" loading="lazy" />
                  <div class="overlay">
                    <div class="project-links">
                      ${project.links.demo !== '#' ? `<a href="${project.links.demo}" target="_blank" class="button small">Demo</a>` : ''}
                      <a href="${project.links.github}" target="_blank" class="button small">Code</a>
                    </div>
                  </div>
                </div>
                <div class="project-info">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                  <div class="project-tech">
                    ${project.technologies.slice(0, 3).map(tech => `
                      <span class="tech-tag small">${tech}</span>
                    `).join('')}
                  </div>
                  <div class="project-status">
                    <span class="status ${project.status}">${project.status}</span>
                    <span class="year">${project.year}</span>
                  </div>
                </div>
              </article>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  loadEducationSection() {
    const eduContainer = document.querySelector('#education');
    if (!eduContainer) return;

    const { education } = this.content;
    
    eduContainer.innerHTML = `
      <div class="container">
        <header>
          <h2>${education.title}</h2>
          <p>${education.subtitle}</p>
        </header>
        <div class="row">
          <div class="col-8 col-12-medium">
            <div class="education-content">
              ${education.degrees.map(degree => `
                <div class="degree-item">
                  <h3>${degree.degree}</h3>
                  <h4>${degree.institution}</h4>
                  <div class="degree-meta">
                    <span class="period">${degree.period}</span>
                    <span class="location">${degree.location}</span>
                    <span class="gpa">GPA: ${degree.gpa}</span>
                  </div>
                  <div class="courses">
                    <h5>Relevant Courses:</h5>
                    <div class="course-tags">
                      ${degree.relevantCourses.map(course => `
                        <span class="course-tag">${course}</span>
                      `).join('')}
                    </div>
                  </div>
                </div>
              `).join('')}
              
              <div class="achievements-section">
                <h3>Achievements</h3>
                <ul>
                  ${education.achievements.map(achievement => `
                    <li>${achievement}</li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
          <div class="col-4 col-12-medium">
            <div class="certifications">
              <h3>Certifications</h3>
              ${education.certifications.map(cert => `
                <div class="cert-item">
                  <h4>${cert.name}</h4>
                  <p class="issuer">${cert.issuer}</p>
                  <p class="date">${cert.date}</p>
                  <a href="${cert.link}" target="_blank" class="verify-link">Verify</a>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  loadBlogSection() {
    const blogContainer = document.querySelector('#blog');
    if (!blogContainer) return;

    const { blog } = this.content;
    
    blogContainer.innerHTML = `
      <div class="container">
        <header>
          <h2>${blog.title}</h2>
          <p>${blog.subtitle}</p>
        </header>
        <div class="row">
          ${blog.articles.map(article => `
            <div class="col-4 col-6-medium col-12-small">
              <article class="blog-post ${article.featured ? 'featured' : ''}">
                <div class="post-image">
                  <img src="${article.image}" alt="${article.title}" loading="lazy" />
                  ${article.featured ? '<span class="featured-badge">Featured</span>' : ''}
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="date">${new Date(article.publishedDate).toLocaleDateString()}</span>
                    <span class="read-time">${article.readTime}</span>
                    <span class="views">${article.views} views</span>
                  </div>
                  <h3><a href="/blog/${article.slug}">${article.title}</a></h3>
                  <p>${article.excerpt}</p>
                  <div class="post-tags">
                    ${article.tags.map(tag => `
                      <span class="tag">${tag}</span>
                    `).join('')}
                  </div>
                  <a href="/blog/${article.slug}" class="read-more">Read More</a>
                </div>
              </article>
            </div>
          `).join('')}
        </div>
        <div class="blog-footer">
          <a href="/blog" class="button large">View All Articles</a>
        </div>
      </div>
    `;
  }

  loadContactSection() {
    const contactContainer = document.querySelector('#contact');
    if (!contactContainer) return;

    const { contact } = this.content;
    
    contactContainer.innerHTML = `
      <div class="container medium">
        <header>
          <h2>${contact.title}</h2>
          <p>${contact.subtitle}</p>
        </header>
        
        <div class="row">
          <div class="col-6 col-12-small">
            <div class="contact-info">
              <p>${contact.description}</p>
              <div class="contact-methods">
                ${contact.methods.map(method => `
                  <div class="contact-method">
                    <i class="fas ${method.icon}"></i>
                    <div>
                      <strong>${method.label}</strong>
                      <a href="${method.link}">${method.value}</a>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="availability">
                <div class="status ${contact.availability.status}">
                  <i class="fas fa-circle"></i>
                  ${contact.availability.message}
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-6 col-12-small">
            <form id="contact-form" class="contact-form">
              <div class="row gtr-uniform gtr-50">
                <div class="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" required />
                </div>
                <div class="col-6 col-12-xsmall">
                  <input type="email" name="email" id="email" placeholder="Email" required />
                </div>
                <div class="col-12">
                  <input type="text" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="col-12">
                  <textarea name="message" id="message" placeholder="Message" rows="4" required></textarea>
                </div>
                <div class="col-12">
                  <ul class="actions">
                    <li><input type="submit" value="Send Message" class="button primary" /></li>
                    <li><input type="reset" value="Clear" /></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <footer>
          <h3 class="gradient-text">Find me on ...</h3>
          <ul class="social">
            ${this.content.social.map(link => `
              <li>
                <a href="${link.url}" class="icon brands ${link.icon}" title="${link.description}" target="_blank" rel="noopener">
                  <span class="label">${link.name}</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </footer>
      </div>
    `;
  }

  loadFooter() {
    const footer = document.querySelector('footer#main-footer') || document.querySelector('body > footer');
    if (!footer) return;

    const { footer: footerContent } = this.content;
    
    footer.innerHTML = `
      <div class="container">
        <hr>
        <ul id="copyright">
          <li>${footerContent.copyright}</li>
          <li>Design: <a href="http://html5up.net">${footerContent.credits}</a></li>
          <li>Last updated: ${footerContent.lastUpdated}</li>
        </ul>
      </div>
    `;
  }

  updateSEO() {
    const { seo } = this.content;
    
    // Update title
    document.title = seo.title;
    
    // Update meta tags
    const metaTags = [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { name: 'author', content: seo.author },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.image },
      { property: 'og:url', content: seo.url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: seo.image }
    ];
    
    metaTags.forEach(tag => {
      let element = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) element.name = tag.name;
        if (tag.property) element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });
  }

  initializeComponents() {
    // Initialize any additional components
    this.initializePortfolioFilters();
    this.initializeScrollAnimations();
  }

  initializePortfolioFilters() {
    // Portfolio filtering functionality will be handled by click events
  }

  initializeScrollAnimations() {
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-item, .timeline-item, .portfolio-item, .blog-post').forEach(el => {
      observer.observe(el);
    });
  }

  filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    const filters = document.querySelectorAll('.portfolio-filter');
    
    // Update active filter
    filters.forEach(filter => {
      filter.classList.remove('active');
      if (filter.getAttribute('data-category') === category) {
        filter.classList.add('active');
      }
    });
    
    // Filter items
    items.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block';
        setTimeout(() => item.classList.add('show'), 10);
      } else {
        item.classList.remove('show');
        setTimeout(() => item.style.display = 'none', 300);
      }
    });
  }

  handleContactForm(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = form.querySelector('input[type="submit"]');
    const originalText = submitButton.value;
    submitButton.value = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
      // Reset form
      form.reset();
      submitButton.value = originalText;
      submitButton.disabled = false;
      
      // Show success message
      this.showNotification('Message sent successfully!', 'success');
    }, 1000);
  }

  handleSearch(query) {
    // Implement search functionality
    console.log('Searching for:', query);
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});