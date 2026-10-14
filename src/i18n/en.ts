import type { Dictionary } from '../types/dictionary.ts'

export const en = {
  meta: {
    title: 'Jeffry Santiago | Full Stack Developer | AI & Automation',
    description:
      'Full Stack Developer and Software Engineer with 4+ years building enterprise web applications, REST APIs, digital products and automation. Based in Santo Domingo and open to remote work.',
    jobTitle: 'Full Stack Developer',
    ogLocale: 'en_US',
  },
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    skip: 'Skip to content',
    primary: 'Primary',
    languages: {
      en: 'English',
      es: 'Spanish',
    },
  },
  hero: {
    greeting: "Hi, I'm Jeffry Santiago",
    role: 'Full Stack Developer | AI & Automation | Software Engineer',
    description:
      'Software Engineer with 4+ years building enterprise web applications, REST APIs and integrations. Day-to-day stack: React, TypeScript, C#/.NET, Node.js, SQL and Azure DevOps CI/CD. Also ships independent products that connect web apps, PostgreSQL, WhatsApp and automation.',
    location: 'Santo Domingo, Dominican Republic',
    availability: 'Open to Remote & International Opportunities',
    status: 'Open to Remote Opportunities',
    viewWork: 'View My Work',
    contact: 'Contact Me',
    downloadCv: 'Download CV',
    photoAlt: 'Jeffry Santiago',
  },
  about: {
    eyebrow: 'About',
    title: 'Systems engineering, focused on software development',
    paragraphs: [
      'Jeffry Santiago is a Systems Engineer focused on software development, with 4+ years of professional experience. He earned his degree at Universidad Dominicana O&M.',
      'He builds enterprise web applications, interfaces and REST APIs, and also ships independent products for businesses that need a clearer digital presence or a tool shaped around their operation.',
      'That work uses React, TypeScript, C#/.NET, Node.js, SQL and Azure DevOps CI/CD, with code quality checks in SonarQube. He also works on mobile with React Native, Android and Kotlin, including deployments through Kubernetes and ArgoCD.',
    ],
    stackTitle: 'Professional experience includes',
    stack: [
      'React',
      'TypeScript',
      'Next.js',
      'Angular',
      'C# / .NET',
      'Java',
      'Node.js',
      'SQL',
      'PostgreSQL',
      'REST APIs',
      'Azure',
      'Azure DevOps',
      'CI/CD',
    ],
    independentTitle: 'Independent and freelance work',
    independent: [
      'Shopify',
      'SharePoint',
      'Business websites',
      'E-commerce solutions',
      'WhatsApp integrations',
      'Digital products',
      'Automation',
      'Custom software solutions',
    ],
    close:
      'The through-line is software engineering, business understanding, automation and modern technologies used together, so the result is software a team can actually run.',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Professional experience',
    intro:
      'Sustained work on enterprise software, together with independent products built for businesses and their customers.',
    humano: {
      company: 'Grupo Humano (Humano Seguros)',
      role: 'Programmer Analyst',
      period: 'Jul 2022 — Present',
      location: 'Santo Domingo, Dominican Republic',
      summary:
        'Enterprise web applications, mobile development and app support, REST APIs and integrations for insurance operations.',
      points: [
        'Build and maintain enterprise web applications used in insurance operations.',
        'Deliver interfaces with React and TypeScript, and backend services and REST APIs with C# / .NET.',
        'Integrate SQL databases and external REST services into those applications.',
        'Support mobile applications and deploy their Android releases.',
        'Release through Azure DevOps CI/CD, with code quality checks in SonarQube.',
        'Troubleshoot production issues and collaborate in Agile/Scrum teams.',
      ],
    },
    independent: {
      company: 'Independent Software Projects',
      role: 'Freelance software development',
      period: 'Selected projects',
      location: 'Santo Domingo, Dominican Republic',
      summary:
        'Products and websites built independently for businesses, from commerce to custom operations tools.',
      points: [
        'Shopify solutions',
        'SharePoint solutions',
        'Business websites',
        'E-commerce',
        'Custom web applications',
        'Automation',
        'WhatsApp integrations',
        'Digital products',
        'Freelance software development',
      ],
    },
    educationLabel: 'Education',
    education: {
      degree: 'Systems and Computing Engineering',
      school: 'Universidad Dominicana O&M',
      period: '2018 — 2022',
      location: 'Santo Domingo, Dominican Republic',
    },
    languagesLabel: 'Languages',
    languages: 'Spanish — Native · English',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Technologies used in practice',
    intro:
      'Core technologies are the ones used most in professional delivery. Additional technologies and platforms belong to a broader range. They are not presented as equal depth in every tool.',
    coreLabel: 'Core technologies',
    coreNote: 'The stack behind most of the professional work.',
    focusLabel: 'Expanding focus',
    focusNote: 'An active area of growth, not a claim of advanced AI research.',
    additionalLabel: 'Additional technologies & platforms',
    additionalNote: 'Used on specific projects.',
    groups: {
      frontend: {
        title: 'Frontend',
        items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'],
      },
      backend: {
        title: 'Backend',
        items: ['C#', 'ASP.NET', '.NET', 'Java', 'Node.js', 'Express', 'REST APIs'],
      },
      databases: {
        title: 'Databases',
        items: ['SQL', 'PostgreSQL', 'MongoDB', 'Relational Databases'],
      },
      cloud: {
        title: 'Cloud & DevOps',
        items: ['Microsoft Azure', 'Azure DevOps', 'CI/CD', 'Git', 'GitHub', 'Kubernetes', 'ArgoCD', 'SonarQube'],
      },
      ai: {
        title: 'AI & Automation',
        items: ['AI-assisted Development', 'LLMs', 'AI Agents', 'n8n', 'Cursor', 'ChatGPT', 'Claude'],
      },
      platforms: {
        title: 'Platforms',
        items: ['Microsoft SharePoint', 'Shopify', 'E-commerce Platforms'],
      },
      additional: {
        title: 'Additional experience',
        items: ['PHP', 'Kotlin', 'Android'],
      },
    },
  },
  ai: {
    eyebrow: 'Expanding focus',
    title: 'AI & Automation',
    paragraphs: [
      'Jeffry uses LLMs, AI agents and tools such as Cursor, ChatGPT and Claude to accelerate development, and n8n to automate workflows. This is a practical extension of the engineering work, not a claim of advanced AI research.',
      'The focus stays on useful software: API orchestration, prompt use inside real delivery, and business processes that can be automated without losing maintainability.',
    ],
    topics: [
      'LLM applications',
      'AI-assisted development',
      'AI agents',
      'Workflow automation',
      'n8n',
      'Cursor, ChatGPT and Claude',
      'API orchestration',
      'Prompt engineering',
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Featured projects',
    intro:
      'Selected products and business websites. Each one is scoped to a real use, from operations software to public information.',
    filters: {
      all: 'All',
      fullstack: 'Full Stack',
      saas: 'SaaS',
      business: 'Business',
      data: 'Data',
    },
    empty: 'No featured projects in this category yet.',
    liveDemo: 'Live Demo',
    github: 'GitHub',
    soon: 'Coming soon',
    technologies: 'Technologies',
    moreTitle: 'More projects',
    moreText: 'Additional repositories and experiments are on GitHub.',
    moreCta: 'View GitHub',
    items: {
      'rd-intelligence': {
        name: 'RDIntelligence',
        category: 'Data-driven Application',
        description:
          'A data-driven platform designed to help people discover and explore places and public spaces in the Dominican Republic. It integrates external APIs and open data for weather, maps, geographic information, natural events and public data. The platform is designed for locals and tourists.',
      },
      barbeross: {
        name: 'BarberOSS',
        category: 'SaaS / Business Management',
        description:
          'A full stack business management platform for barbers and stylists. It includes appointment management, client management, schedules, income tracking, reports, WhatsApp integrations and PDF/Excel exports.',
      },
      abbatech: {
        name: 'AbbaTech',
        category: 'Digital Solutions / Business',
        description:
          'A software development brand focused on helping businesses establish their digital presence and implement technology solutions.',
      },
      'farmacia-la-hoz': {
        name: 'Farmacia La Hoz',
        category: 'Business Website',
        description:
          'Professional pharmacy website focused on improving online presence and customer engagement through WhatsApp communication.',
      },
      'farmacia-maireni': {
        name: 'Farmacia Maireni',
        category: 'Business Website',
        description:
          'Custom pharmacy website designed to improve digital presence and facilitate customer communication through WhatsApp.',
      },
    },
  },
  build: {
    eyebrow: 'Scope',
    title: 'What I build',
    intro:
      'Software across web, mobile, enterprise, commerce, APIs, cloud, automation and early AI applications. The common thread is a product that fits a real operation.',
    items: {
      web: {
        title: 'Full Stack Web Applications',
        description: 'Web products built across the interface, the API and the data behind them.',
      },
      mobile: {
        title: 'Mobile Applications',
        description: 'Mobile software alongside web products, including Android experience.',
      },
      api: {
        title: 'REST APIs & Backend Services',
        description: 'Backend services and REST APIs that connect products, data and other systems.',
      },
      cloud: {
        title: 'Cloud Solutions',
        description: 'Delivery and deployment workflows, with experience on Microsoft Azure and Azure DevOps.',
      },
      ai: {
        title: 'AI & Automation Systems',
        description: 'Practical automation and a growing use of LLM-assisted workflows in real software work.',
      },
      commerce: {
        title: 'E-commerce Platforms',
        description: 'Online commerce experiences, including Shopify and custom storefront work.',
      },
      enterprise: {
        title: 'Enterprise Applications',
        description: 'Applications that support business operations, including Microsoft SharePoint.',
      },
      integrations: {
        title: 'System & API Integrations',
        description: 'Connections between internal systems, external APIs and the tools a team already uses.',
      },
      data: {
        title: 'Data-driven Applications',
        description: 'Applications that gather, organize and present data people can use.',
      },
      automation: {
        title: 'Business Process Automation',
        description: 'Workflows that reduce repetitive work across communication, data and business tools.',
      },
      saas: {
        title: 'Digital Products & SaaS',
        description: 'Product-shaped software around a specific operation, such as clients, schedules and reporting.',
      },
      custom: {
        title: 'Custom Business Solutions',
        description: 'Websites and tools shaped around how a particular business actually works.',
      },
    },
  },
  growing: {
    eyebrow: 'Development',
    title: 'Currently growing in',
    intro:
      'The engineering base is already in professional delivery. These are the areas being developed further, with the same practical standard.',
    items: {
      aiEngineering: 'AI Engineering',
      llm: 'LLM Applications',
      agents: 'AI Agents & Automation',
      cloud: 'Cloud & DevOps',
      python: 'Python',
      java: 'Java & Spring Boot',
      data: 'Data & AI Integrations',
      architecture: 'Scalable Software Architecture',
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's Build Something Useful",
    text: 'Interested in working together, discussing a software project, or exploring a remote opportunity? Let’s connect.',
    linkedin: 'LinkedIn',
    email: 'Email',
    github: 'GitHub',
  },
  footer: {
    role: 'Full Stack Developer | AI & Automation | Software Engineer',
    location: 'Santo Domingo, Dominican Republic',
    availability: 'Open to Remote & International Opportunities',
    rights: 'All rights reserved.',
  },
} satisfies Dictionary
