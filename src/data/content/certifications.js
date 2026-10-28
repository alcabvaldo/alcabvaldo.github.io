// Professional Certifications and Credentials Data
export const certificationsData = {
  // Section configuration
  sectionId: "certifications",
  title: "Certifications & Credentials",
  subtitle: "Professional certifications and academic achievements",

  // Layout configuration
  layout: {
    wrapperClass: "wrapper style2 fade-up",
    containerClass: "container",
  },

  // Public wallet (both Databricks Associates)
  walletUrl:
    "https://credentials.databricks.com/profile/alejandrocabral157828/wallet",

  // Professional Certifications (ordered by importance/recency)
  // Titles are rendered as the clickable credential link in the UI (no separate "View" text).
  certifications: [
    {
      id: "databricks-data-engineer",
      title: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      issueDate: "June 5, 2025",
      expires: "June 2027",
      status: "active",
      credentialUrl:
        "https://credentials.databricks.com/338f2867-d22a-4892-be9c-251cb928e914",
      walletUrl:
        "https://credentials.databricks.com/profile/alejandrocabral157828/wallet",
      category: "Data Engineering",
      logo: "/images/logos/databricks_logo.jpg",
      description:
        "Professional certification validating expertise in data engineering using Databricks platform, Apache Spark, and cloud-based data processing.",
      skills: [
        "Apache Spark",
        "Data Engineering",
        "ETL Pipelines",
        "Azure Databricks",
        "Data Processing",
        "Cloud Architecture",
      ],
      icon: "fa-database",
      badgeColor: "primary",
    },

    {
      id: "databricks-spark-developer",
      title:
        "Databricks Certified Associate Developer for Apache Spark — Python",
      issuer: "Databricks",
      issueDate: "April 2025",
      expires: "April 2027",
      status: "active",
      credentialUrl:
        "https://credentials.databricks.com/1dae1481-a3ee-4214-a35a-9dc904c7a4f9",
      walletUrl:
        "https://credentials.databricks.com/profile/alejandrocabral157828/wallet",
      category: "Data Engineering",
      logo: "/images/logos/databricks_logo.jpg",
      description:
        "Certification demonstrating proficiency in developing applications using Apache Spark and PySpark for large-scale data processing.",
      skills: [
        "Apache Spark",
        "PySpark",
        "Spark SQL",
        "Data Processing",
        "Distributed Computing",
        "Python",
      ],
      icon: "fa-fire",
      badgeColor: "accent",
    },

    {
      id: "psm-i",
      title: "Professional Scrum Master™ I (PSM I)",
      issuer: "Scrum.org",
      issueDate: "November 2023",
      status: "active",
      credentialUrl:
        "https://credly.com/badges/55251470-4517-4f86-a457-939dc6835d95/linked_in_profile",
      secondaryCredentialUrl: "https://www.scrum.org/certificates/1029205",
      category: "Project Management",
      logo: "/images/logos/scrum_org_logo.jpg",
      description:
        "Industry-recognized certification demonstrating fundamental knowledge of Scrum framework and agile project management principles.",
      skills: [
        "Scrum Framework",
        "Agile Methodologies",
        "Team Leadership",
        "Sprint Planning",
        "Product Management",
        "Stakeholder Communication",
      ],
      icon: "fa-users",
      badgeColor: "secondary",
    },

    {
      id: "efset-english",
      title: "EFSET English Certificate (C2 Proficient)",
      issuer: "EF Education First",
      issueDate: "January 2024",
      score: "76/100",
      level: "C2 Proficient",
      status: "active",
      credentialUrl: "https://efset.org/cert/d3Yz9k",
      category: "Language",
      logo: "/images/logos/efset_logo.jpg",
      description:
        "Internationally recognized English proficiency certification demonstrating advanced C2 level competency in professional and academic contexts.",
      skills: [
        "Advanced English",
        "Professional Communication",
        "Technical Writing",
        "International Collaboration",
        "Cross-cultural Communication",
      ],
      icon: "fa-globe",
      badgeColor: "tertiary",
    },

    {
      id: "teamops-foundations",
      title: "TeamOps Foundations",
      issuer: "GitLab",
      issueDate: "September 2024",
      status: "active",
      credentialUrl: "https://university.gitlab.com/c/K7WQG3T5QBqewzDrcD0nog",
      category: "Collaboration",
      logo: "/images/logos/gitlab_com_logo.jpg",
      description:
        "Foundations credential covering TeamOps practices for collaboration and delivery.",
      skills: ["TeamOps", "Collaboration", "Delivery practices"],
      icon: "fa-gitlab",
      badgeColor: "secondary",
    },

    {
      id: "python-training",
      title: "Python Essential Training",
      issuer: "LinkedIn Learning",
      issueDate: "February 2024",
      status: "active",
      credentialUrl:
        "https://linkedin.com/learning/certificates/3535be6eac08d32e6b285cbf531807d3112263aec69bcc46c6968403017dd9c1",
      category: "Programming",
      logo: "/images/logos/linkedin_logo.jpg",
      description:
        "Comprehensive training covering Python programming fundamentals, data structures, and best practices for professional development.",
      skills: [
        "Python Programming",
        "Data Structures",
        "Algorithm Implementation",
        "Object-Oriented Programming",
        "Code Optimization",
      ],
      icon: "fa-code",
      badgeColor: "accent",
    },

    {
      id: "ai-foundations-ml",
      title: "Artificial Intelligence Foundations: Machine Learning",
      issuer: "LinkedIn Learning",
      issueDate: "June 2023",
      status: "active",
      credentialUrl:
        "https://linkedin.com/learning/certificates/eeb4780998a12f0342108c28ec3bd71d39f413141aff54c64be422c6ee65f793",
      category: "Machine Learning",
      logo: "/images/logos/linkedin_logo.jpg",
      description:
        "Foundational knowledge in machine learning concepts, algorithms, and practical applications in AI development.",
      skills: [
        "Machine Learning",
        "AI Fundamentals",
        "Data Analysis",
        "Predictive Modeling",
        "Algorithm Selection",
      ],
      icon: "fa-brain",
      badgeColor: "primary",
    },

    {
      id: "cpk-english-c2",
      title:
        "Institutional Examination of Proficiency in English — C2, 141/150",
      issuer: "Paraguay–Kansas Committee",
      issueDate: "May 2023",
      level: "C2",
      status: "active",
      credentialUrl:
        "https://github.com/alcabvaldo/alcabvaldo.github.io/blob/main/docs/certificates/CPK_English_Proficiency_C2.pdf",
      category: "Language",
      logo: "/images/logos/cpk_logo.jpg",
      description: "Institutional English proficiency exam — C2 (141/150).",
      skills: ["English C2", "Professional Communication"],
      icon: "fa-language",
      badgeColor: "tertiary",
    },

    {
      id: "databricks-fundamentals",
      title: "Databricks Fundamentals Accreditation",
      issuer: "Databricks",
      issueDate: "October 2024",
      status: "active",
      credentialUrl:
        "https://github.com/alcabvaldo/alcabvaldo.github.io/blob/main/docs/certificates/Databricks_Fundamentals_Accreditation.pdf",
      category: "Data Engineering",
      logo: "/images/logos/databricks_logo.jpg",
      description:
        "Introductory Databricks Academy accreditation (onboarding completion).",
      skills: ["Databricks", "Lakehouse fundamentals"],
      icon: "fa-certificate",
      badgeColor: "accent",
    },

    {
      id: "databricks-intro-python",
      title: "Introduction to Python for Data Science & Data Engineering",
      issuer: "Databricks",
      issueDate: "October 2024",
      status: "active",
      credentialUrl:
        "https://github.com/alcabvaldo/alcabvaldo.github.io/blob/main/docs/certificates/Databricks_Intro_Python_Data_Science_Engineering.pdf",
      category: "Data Engineering",
      logo: "/images/logos/databricks_logo.jpg",
      description:
        "Databricks Academy introductory Python for data science and data engineering.",
      skills: ["Python", "Data Science", "Data Engineering"],
      icon: "fa-python",
      badgeColor: "accent",
    },

    {
      id: "ncl-cybersecurity",
      title: "NCL Fall 2023 Individual Game Certificate of Participation",
      issuer: "National Cyber League",
      issueDate: "November 2023",
      status: "active",
      credentialUrl: "https://nationalcyberleague.org",
      category: "Cybersecurity",
      description:
        "Participation in competitive cybersecurity challenges including cryptography, digital forensics, and network security analysis.",
      skills: [
        "Cybersecurity",
        "Digital Forensics",
        "Cryptography",
        "Network Analysis",
        "Ethical Hacking",
        "CTF Challenges",
      ],
      icon: "fa-shield-alt",
      badgeColor: "secondary",
    },
  ],

  // Skill assessments and badges
  skillAssessments: [
    {
      id: "linkedin-c-programming",
      title: "C Programming Language",
      platform: "LinkedIn Skill Assessment",
      status: "passed",
      badgeEarned: true,
      category: "Programming",
      description:
        "Passed LinkedIn's standardized assessment demonstrating proficiency in C programming language.",
      icon: "fa-check-circle",
      badgeColor: "success",
    },
  ],

  // Awards and recognitions
  awards: [
    {
      id: "cpk-scholarship",
      title: "CPK Scholarship",
      issuer: "BECAL & Paraguay-Kansas Committee",
      issueDate: "August 2023",
      status: "completed",
      url: "https://linktr.ee/ComitePyKansas",
      category: "Academic Achievement",
      logo: "/images/logos/cpk_logo.jpg",
      description:
        "Scholarship awarded by BECAL and Paraguay-Kansas Committee, funding international exchange program at Wichita State University.",
      achievements: [
        "Selected based on academic merit and leadership potential",
        "Funded full exchange program in Kansas, USA",
        "Represented Paraguay in international academic exchange",
      ],
      icon: "fa-trophy",
      badgeColor: "gold",
    },
  ],

  // Certification statistics
  statistics: {
    totalCertifications: 9,
    activeCertifications: 9,
    categories: [
      "Data Engineering",
      "Programming",
      "Project Management",
      "Language",
      "Collaboration",
      "Cybersecurity",
    ],
    institutionalCredentials: 4,
    industryRecognized: 5,
  },

  // Call to action
  callToAction: {
    title: "Continuous Learning",
    description:
      "I'm committed to staying current with industry trends and continuously expanding my professional capabilities through ongoing education and certification.",
    buttonText: "Databricks public wallet",
    buttonLink:
      "https://credentials.databricks.com/profile/alejandrocabral157828/wallet",
    secondaryButtonText: "LinkedIn",
    secondaryButtonLink:
      "https://www.linkedin.com/in/alejandro-nicolas-cabral-valdovinos",
  },
};
