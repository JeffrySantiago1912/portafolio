import type { Dictionary } from '../types/dictionary.ts'

export const es = {
  meta: {
    title: 'Jeffry Santiago | Desarrollador Full Stack | IA y Automatización',
    description:
      'Desarrollador Full Stack e ingeniero en sistemas con más de 4 años de experiencia construyendo aplicaciones empresariales, APIs, productos digitales, soluciones de automatización y software moderno.',
    jobTitle: 'Desarrollador Full Stack',
    ogLocale: 'es_ES',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    switchToLight: 'Cambiar a modo claro',
    switchToDark: 'Cambiar a modo oscuro',
    skip: 'Saltar al contenido',
    primary: 'Principal',
    languages: {
      en: 'Inglés',
      es: 'Español',
    },
  },
  hero: {
    greeting: 'Hola, soy Jeffry Santiago',
    role: 'Desarrollador Full Stack | IA y Automatización | Ingeniero en Sistemas',
    description:
      'Ingeniero en sistemas y desarrollador de software con más de 4 años construyendo aplicaciones web empresariales, APIs REST e integraciones. Stack del día a día: React, TypeScript, C#/.NET, Node.js, SQL y CI/CD en Azure DevOps. También entrega productos independientes que conectan aplicaciones web, PostgreSQL, WhatsApp y automatización.',
    location: 'Santo Domingo, República Dominicana',
    availability: 'Abierto a oportunidades remotas e internacionales',
    viewWork: 'Ver mi trabajo',
    contact: 'Contáctame',
    downloadCv: 'Descargar CV',
    photoAlt: 'Jeffry Santiago',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Ingeniería en sistemas, enfocada en el desarrollo de software',
    paragraphs: [
      'Jeffry Santiago es Ingeniero en Sistemas, enfocado en el desarrollo de software, con más de 4 años de experiencia profesional. Obtuvo el título en la Universidad Dominicana O&M.',
      'Construye aplicaciones web empresariales, interfaces y APIs REST, y también entrega productos independientes para negocios que necesitan una presencia digital más clara o una herramienta ajustada a su operación.',
      'Ese trabajo usa React, TypeScript, C#/.NET, Node.js, SQL y CI/CD en Azure DevOps, con revisión de calidad en SonarQube. También trabaja en móvil con React Native, Android y Kotlin, incluyendo despliegues con Kubernetes y ArgoCD.',
    ],
    stackTitle: 'La experiencia profesional incluye',
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
      'APIs REST',
      'Azure',
      'Azure DevOps',
      'CI/CD',
    ],
    independentTitle: 'Trabajo independiente y freelance',
    independent: [
      'Shopify',
      'SharePoint',
      'Sitios web para negocios',
      'Soluciones de comercio electrónico',
      'Integraciones con WhatsApp',
      'Productos digitales',
      'Automatización',
      'Software a medida',
    ],
    close:
      'El hilo conductor es la ingeniería de software, la comprensión del negocio, la automatización y las tecnologías modernas usadas en conjunto, para que el resultado sea software que un equipo pueda operar.',
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Experiencia profesional',
    intro:
      'Trabajo sostenido en software empresarial, junto con productos independientes construidos para negocios y sus clientes.',
    humano: {
      company: 'Grupo Humano (Humano Seguros)',
      role: 'Analista Programador',
      period: 'Jul 2022 — Actualidad',
      location: 'Santo Domingo, República Dominicana',
      summary:
        'Aplicaciones web empresariales, desarrollo y soporte de aplicaciones móviles, APIs REST e integraciones para operaciones de seguros.',
      points: [
        'Construir y mantener aplicaciones web empresariales usadas en operaciones de seguros.',
        'Entregar interfaces con React y TypeScript, y servicios backend y APIs REST con C# / .NET.',
        'Integrar bases de datos SQL y servicios REST externos en esas aplicaciones.',
        'Dar soporte a aplicaciones móviles y desplegar sus versiones en Android.',
        'Publicar mediante CI/CD en Azure DevOps, con revisión de calidad en SonarQube.',
        'Diagnosticar incidencias en producción y colaborar en equipos Agile/Scrum.',
      ],
    },
    independent: {
      company: 'Proyectos de software independientes',
      role: 'Desarrollo de software freelance',
      period: 'Proyectos seleccionados',
      location: 'Santo Domingo, República Dominicana',
      summary:
        'Productos y sitios construidos de forma independiente para negocios, desde comercio hasta herramientas de operación.',
      points: [
        'Soluciones en Shopify',
        'Soluciones en SharePoint',
        'Sitios web para negocios',
        'Comercio electrónico',
        'Aplicaciones web a medida',
        'Automatización',
        'Integraciones con WhatsApp',
        'Productos digitales',
        'Desarrollo de software freelance',
      ],
    },
    educationLabel: 'Formación',
    education: {
      degree: 'Ingeniería en Sistemas y Computación',
      school: 'Universidad Dominicana O&M',
      period: '2018 — 2022',
      location: 'Santo Domingo, República Dominicana',
    },
    languagesLabel: 'Idiomas',
    languages: 'Español — Nativo · Inglés',
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Tecnologías usadas en la práctica',
    intro:
      'Las tecnologías principales son las que más se usan en la entrega profesional. Las tecnologías y plataformas adicionales forman un rango más amplio. No se presentan como el mismo nivel de profundidad en cada herramienta.',
    coreLabel: 'Tecnologías principales',
    coreNote: 'El stack detrás de la mayor parte del trabajo profesional.',
    focusLabel: 'Enfoque en expansión',
    focusNote: 'Un área activa de crecimiento, no una afirmación de investigación avanzada en IA.',
    additionalLabel: 'Tecnologías y plataformas adicionales',
    additionalNote: 'Usadas en proyectos concretos.',
    groups: {
      frontend: {
        title: 'Frontend',
        items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'],
      },
      backend: {
        title: 'Backend',
        items: ['C#', 'ASP.NET', '.NET', 'Java', 'Node.js', 'Express', 'APIs REST'],
      },
      databases: {
        title: 'Bases de datos',
        items: ['SQL', 'PostgreSQL', 'MongoDB', 'Bases de datos relacionales'],
      },
      cloud: {
        title: 'Nube y DevOps',
        items: ['Microsoft Azure', 'Azure DevOps', 'CI/CD', 'Git', 'GitHub', 'Kubernetes', 'ArgoCD', 'SonarQube'],
      },
      ai: {
        title: 'IA y automatización',
        items: ['Desarrollo asistido por IA', 'LLMs', 'Agentes de IA', 'n8n', 'Cursor', 'ChatGPT', 'Claude'],
      },
      platforms: {
        title: 'Plataformas',
        items: ['Microsoft SharePoint', 'Shopify', 'Plataformas de e-commerce'],
      },
      additional: {
        title: 'Experiencia adicional',
        items: ['PHP', 'Kotlin', 'Android'],
      },
    },
  },
  ai: {
    eyebrow: 'Enfoque en expansión',
    title: 'IA y automatización',
    paragraphs: [
      'Jeffry usa LLMs, agentes de IA y herramientas como Cursor, ChatGPT y Claude para acelerar el desarrollo, y n8n para automatizar flujos. Es una extensión práctica del trabajo de ingeniería, no una afirmación de investigación avanzada en IA.',
      'El foco sigue en software útil: orquestación de APIs, uso de prompts dentro de la entrega real y procesos de negocio que se pueden automatizar sin perder mantenibilidad.',
    ],
    topics: [
      'Aplicaciones con LLMs',
      'Desarrollo asistido por IA',
      'Agentes de IA',
      'Automatización de flujos',
      'n8n',
      'Cursor, ChatGPT y Claude',
      'Orquestación de APIs',
      'Ingeniería de prompts',
    ],
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Proyectos destacados',
    intro:
      'Productos y sitios de negocio seleccionados. Cada uno responde a un uso real, desde software de operaciones hasta información pública.',
    filters: {
      all: 'Todos',
      fullstack: 'Full Stack',
      saas: 'SaaS',
      business: 'Negocios',
      data: 'Datos',
    },
    empty: 'Todavía no hay proyectos destacados en esta categoría.',
    liveDemo: 'Demo en vivo',
    github: 'GitHub',
    soon: 'Próximamente',
    technologies: 'Tecnologías',
    moreTitle: 'Más proyectos',
    moreText: 'Repositorios y experimentos adicionales están en GitHub.',
    moreCta: 'Ver GitHub',
    items: {
      'rd-intelligence': {
        name: 'RDIntelligence',
        category: 'Aplicación basada en datos',
        description:
          'Una plataforma basada en datos para descubrir y explorar lugares y espacios públicos en la República Dominicana. Integra APIs externas y datos abiertos de clima, mapas, información geográfica, eventos naturales y datos públicos. Está pensada para residentes y turistas.',
      },
      barbeross: {
        name: 'BarberOSS',
        category: 'SaaS / Gestión de negocio',
        description:
          'Una plataforma full stack de gestión para barberos y estilistas. Incluye gestión de citas, clientes, horarios, seguimiento de ingresos, reportes, integraciones con WhatsApp y exportaciones a PDF/Excel.',
      },
      abbatech: {
        name: 'AbbaTech',
        category: 'Soluciones digitales / Negocio',
        description:
          'Una marca de desarrollo de software enfocada en ayudar a los negocios a establecer su presencia digital e implementar soluciones tecnológicas.',
      },
      'farmacia-la-hoz': {
        name: 'Farmacia La Hoz',
        category: 'Sitio web de negocio',
        description:
          'Sitio web profesional para una farmacia, orientado a mejorar la presencia en línea y la comunicación con clientes a través de WhatsApp.',
      },
      'farmacia-maireni': {
        name: 'Farmacia Maireni',
        category: 'Sitio web de negocio',
        description:
          'Sitio web a medida para una farmacia, diseñado para mejorar la presencia digital y facilitar la comunicación con clientes a través de WhatsApp.',
      },
    },
  },
  build: {
    eyebrow: 'Alcance',
    title: 'Qué construyo',
    intro:
      'Software para web, móvil, empresa, comercio, APIs, nube, automatización y aplicaciones iniciales de IA. El hilo común es un producto que encaja en una operación real.',
    items: {
      web: {
        title: 'Aplicaciones web full stack',
        description: 'Productos web construidos entre la interfaz, la API y los datos que las sostienen.',
      },
      mobile: {
        title: 'Aplicaciones móviles',
        description: 'Software móvil junto a productos web, incluida experiencia en Android.',
      },
      api: {
        title: 'APIs REST y servicios backend',
        description: 'Servicios backend y APIs REST que conectan productos, datos y otros sistemas.',
      },
      cloud: {
        title: 'Soluciones en la nube',
        description: 'Flujos de entrega y despliegue, con experiencia en Microsoft Azure y Azure DevOps.',
      },
      ai: {
        title: 'Sistemas de IA y automatización',
        description: 'Automatización práctica y un uso creciente de flujos asistidos por LLMs en trabajo real.',
      },
      commerce: {
        title: 'Plataformas de e-commerce',
        description: 'Experiencias de comercio en línea, incluidas Shopify y tiendas a medida.',
      },
      enterprise: {
        title: 'Aplicaciones empresariales',
        description: 'Aplicaciones que apoyan la operación del negocio, incluido Microsoft SharePoint.',
      },
      integrations: {
        title: 'Integraciones de sistemas y APIs',
        description: 'Conexiones entre sistemas internos, APIs externas y las herramientas que el equipo ya usa.',
      },
      data: {
        title: 'Aplicaciones basadas en datos',
        description: 'Aplicaciones que reúnen, organizan y presentan datos que las personas pueden usar.',
      },
      automation: {
        title: 'Automatización de procesos de negocio',
        description: 'Flujos que reducen trabajo repetitivo entre comunicación, datos y herramientas del negocio.',
      },
      saas: {
        title: 'Productos digitales y SaaS',
        description: 'Software con forma de producto alrededor de una operación, como clientes, horarios y reportes.',
      },
      custom: {
        title: 'Soluciones de negocio a medida',
        description: 'Sitios y herramientas ajustados a cómo trabaja realmente un negocio.',
      },
    },
  },
  growing: {
    eyebrow: 'Desarrollo',
    title: 'En crecimiento actual',
    intro:
      'La base de ingeniería ya está en la entrega profesional. Estas son las áreas que se siguen desarrollando, con el mismo criterio práctico.',
    items: {
      aiEngineering: 'Ingeniería de IA',
      llm: 'Aplicaciones con LLMs',
      agents: 'Agentes de IA y automatización',
      cloud: 'Nube y DevOps',
      python: 'Python',
      java: 'Java y Spring Boot',
      data: 'Integraciones de datos e IA',
      architecture: 'Arquitectura de software escalable',
    },
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Construyamos algo útil',
    text: '¿Te interesa trabajar juntos, conversar sobre un proyecto de software o explorar una oportunidad remota? Conversemos.',
    linkedin: 'LinkedIn',
    email: 'Correo',
    github: 'GitHub',
  },
  footer: {
    role: 'Desarrollador Full Stack | IA y Automatización | Ingeniero en Sistemas',
    location: 'Santo Domingo, República Dominicana',
    availability: 'Abierto a oportunidades remotas e internacionales',
    rights: 'Todos los derechos reservados.',
  },
} satisfies Dictionary
