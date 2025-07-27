/**
 * Contact Page Data
 * Contact information, forms, and communication preferences
 */

export const contactData = {
  // Page Meta
  title: "Get In Touch",
  subtitle: "Let's discuss your next project or just say hello",
  description: "I'm always interested in new opportunities and interesting projects. Whether you have a project in mind or just want to connect, I'd love to hear from you.",
  
  // Contact Information
  contact: {
    email: {
      address: "alejandrocabralvaldovinos@gmail.com",
      display: "alejandrocabralvaldovinos@gmail.com",
      subject: "Project Inquiry",
      icon: "fas fa-envelope",
      preferred: true
    },
    phone: {
      number: "+595123456789",
      display: "+595 123 456 789",
      whatsapp: true,
      icon: "fas fa-phone",
      availability: "9 AM - 6 PM (GMT-3)"
    },
    location: {
      city: "Asunción",
      country: "Paraguay",
      timezone: "GMT-3 (Paraguay Time)",
      icon: "fas fa-map-marker-alt"
    }
  },
  
  // Availability & Status
  availability: {
    status: "available", // available, busy, booked
    message: "Currently available for new projects",
    responseTime: "Usually responds within 24 hours",
    workingHours: {
      timezone: "GMT-3",
      schedule: [
        { day: "Monday", hours: "9:00 AM - 6:00 PM" },
        { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
        { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
        { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
        { day: "Friday", hours: "9:00 AM - 6:00 PM" },
        { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
        { day: "Sunday", hours: "Unavailable" }
      ]
    }
  },
  
  // Social Media Links
  social: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos-8253a9186/",
      icon: "fab fa-linkedin-in",
      username: "@alejandro-nicolas-cabral-valdovinos",
      color: "#0077b5",
      description: "Connect with me professionally"
    },
    {
      platform: "GitHub",
      url: "https://github.com/alcabvaldo",
      icon: "fab fa-github",
      username: "@alcabvaldo",
      color: "#333",
      description: "Check out my code and projects"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/alcabvaldo",
      icon: "fab fa-twitter",
      username: "@alcabvaldo",
      color: "#1da1f2",
      description: "Follow for tech updates and thoughts"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/ale_cabr4l/",
      icon: "fab fa-instagram", 
      username: "@ale_cabr4l",
      color: "#e4405f",
      description: "See my life behind the scenes"
    }
  ],
  
  // Contact Form Configuration
  contactForm: {
    title: "Send me a message",
    description: "Fill out the form below and I'll get back to you as soon as possible.",
    
    // Form Service (choose one)
    service: {
      provider: "formspree", // formspree, netlify, emailjs, custom
      endpoint: "https://formspree.io/f/YOUR_FORM_ID", // Replace with actual endpoint
      method: "POST"
    },
    
    // Form Fields
    fields: [
      {
        id: "name",
        name: "name",
        type: "text",
        label: "Full Name",
        placeholder: "Your full name",
        required: true,
        validation: {
          minLength: 2,
          maxLength: 50,
          pattern: "^[a-zA-Z\\s]+$"
        },
        grid: "col-md-6"
      },
      {
        id: "email",
        name: "email",
        type: "email",
        label: "Email Address",
        placeholder: "your@email.com",
        required: true,
        validation: {
          pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
        },
        grid: "col-md-6"
      },
      {
        id: "company",
        name: "company",
        type: "text",
        label: "Company (Optional)",
        placeholder: "Your company name",
        required: false,
        grid: "col-md-6"
      },
      {
        id: "phone",
        name: "phone",
        type: "tel",
        label: "Phone Number (Optional)",
        placeholder: "+1 (555) 123-4567",
        required: false,
        grid: "col-md-6"
      },
      {
        id: "project_type",
        name: "project_type",
        type: "select",
        label: "Project Type",
        required: true,
        options: [
          { value: "", label: "Select a project type" },
          { value: "web_app", label: "Web Application" },
          { value: "website", label: "Website Design & Development" },
          { value: "mobile_app", label: "Mobile Application" },
          { value: "consulting", label: "Technical Consulting" },
          { value: "maintenance", label: "Website Maintenance" },
          { value: "other", label: "Other" }
        ],
        grid: "col-md-6"
      },
      {
        id: "budget",
        name: "budget",
        type: "select",
        label: "Project Budget",
        required: false,
        options: [
          { value: "", label: "Select budget range" },
          { value: "under_5k", label: "Under $5,000" },
          { value: "5k_10k", label: "$5,000 - $10,000" },
          { value: "10k_25k", label: "$10,000 - $25,000" },
          { value: "25k_50k", label: "$25,000 - $50,000" },
          { value: "over_50k", label: "Over $50,000" },
          { value: "discuss", label: "Let's discuss" }
        ],
        grid: "col-md-6"
      },
      {
        id: "timeline",
        name: "timeline",
        type: "select",
        label: "Project Timeline",
        required: false,
        options: [
          { value: "", label: "Select timeline" },
          { value: "asap", label: "ASAP" },
          { value: "1_month", label: "Within 1 month" },
          { value: "2_3_months", label: "2-3 months" },
          { value: "3_6_months", label: "3-6 months" },
          { value: "6_months_plus", label: "6+ months" },
          { value: "flexible", label: "Flexible" }
        ],
        grid: "col-md-6"
      },
      {
        id: "message",
        name: "message",
        type: "textarea",
        label: "Project Details",
        placeholder: "Tell me about your project, goals, and any specific requirements...",
        required: true,
        validation: {
          minLength: 20,
          maxLength: 1000
        },
        rows: 6,
        grid: "col-12"
      },
      {
        id: "newsletter",
        name: "newsletter",
        type: "checkbox",
        label: "I'd like to receive updates about your work and new articles",
        required: false,
        grid: "col-12"
      }
    ],
    
    // Form Messages
    messages: {
      success: {
        title: "Message sent successfully!",
        text: "Thank you for reaching out. I'll get back to you within 24 hours."
      },
      error: {
        title: "Oops! Something went wrong.",
        text: "Please try again later or send me an email directly."
      },
      loading: "Sending your message..."
    },
    
    // Submit Button
    submitButton: {
      text: "Send Message",
      loadingText: "Sending...",
      icon: "fas fa-paper-plane"
    }
  },
  
  // Alternative Contact Methods
  alternativeContact: {
    title: "Other ways to reach me",
    methods: [
      {
        name: "Schedule a Call",
        description: "Book a free 30-minute consultation call to discuss your project",
        icon: "fas fa-calendar-alt",
        url: "https://calendly.com/alcabvaldo/consultation",
        external: true,
        available: true
      },
      {
        name: "WhatsApp",
        description: "Send me a message on WhatsApp for quick questions",
        icon: "fab fa-whatsapp",
        url: "https://wa.me/595123456789?text=Hi%20Alejandro,%20I%20found%20your%20portfolio",
        external: true,
        available: true
      },
      {
        name: "Telegram",
        description: "Reach out via Telegram for secure messaging",
        icon: "fab fa-telegram",
        url: "https://t.me/alcabvaldo",
        external: true,
        available: false
      }
    ]
  },
  
  // FAQ Section
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        id: "response_time",
        question: "How quickly do you respond to inquiries?",
        answer: "I typically respond to all inquiries within 24 hours during business days. For urgent matters, feel free to call or message me directly."
      },
      {
        id: "project_types",
        question: "What types of projects do you work on?",
        answer: "I work on a variety of projects including web applications, websites, mobile apps, and technical consulting. I'm particularly experienced with React, Node.js, and full-stack development."
      },
      {
        id: "pricing",
        question: "How do you structure your pricing?",
        answer: "My pricing depends on the project scope, complexity, and timeline. I offer both fixed-price project quotes and hourly rates for ongoing work. I'm happy to discuss your budget and find a solution that works for both of us."
      },
      {
        id: "timeline",
        question: "What's your typical project timeline?",
        answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-4 months. I'll provide a detailed timeline estimate after understanding your requirements."
      },
      {
        id: "location",
        question: "Do you work with clients internationally?",
        answer: "Yes! While I'm based in Paraguay, I work with clients globally. I'm comfortable with remote collaboration and have experience working across different time zones."
      },
      {
        id: "process",
        question: "What's your development process?",
        answer: "I follow an agile approach with regular check-ins and updates. The process typically includes discovery, design, development, testing, and deployment phases with client feedback incorporated throughout."
      }
    ]
  },
  
  // Call to Action
  cta: {
    title: "Ready to start your project?",
    description: "Let's turn your ideas into reality. I'm here to help you build something amazing.",
    primaryButton: {
      text: "Start a Conversation",
      action: "scroll_to_form" // scroll_to_form, email, or url
    },
    secondaryButton: {
      text: "View My Work",
      url: "/portfolio"
    }
  }
};