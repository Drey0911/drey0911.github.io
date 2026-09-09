export const site = {
  person: {
    fullName: "Andrey Stteven Mantilla León",
    displayName: "Andrey Mantilla",
    initials: "AM",
    role: {
      es: "Desarrollador de Software",
      en: "Software Developer"
    },
    headline: {
      es: "Ing. de Sistemas",
      en: "Systems Engineering"
    },
    location: {
      es: "Bucaramanga, Colombia",
      en: "Bucaramanga, Colombia"
    },
    age: "22",
    lead: {
      es: "Desarrollador junior enfocado en interfaces UI/UX, desarrollo Fullstack y creación de aplicaciones móviles. Construyo soluciones limpias, mantenibles y pensadas para el usuario final.",
      en: "Junior developer focused on UI/UX interfaces, Fullstack development and mobile applications. I build clean, maintainable solutions designed around the end user."
    },
    availability: {
      es: "Disponible para proyectos",
      en: "Available for projects"
    },
    cv: "pdf/CV HV Andrey Mantilla.pdf",
    photo: "img/profile/profile2.png"
  },

  contact: {
    email: "andrey0911a@gmail.com",
    phoneLabel: "+57 322 251 4185",
    phoneRaw: "573222514185",
    city: {
      es: "Girón, Santander",
      en: "Girón, Santander"
    },
    mailto: "mailto:andrey0911a@gmail.com",
    tel: "tel:+573222514185",
    whatsapp: "https://wa.me/573222514185"
  },

  socials: [
    { id: "github", label: "GitHub", icon: "fab fa-github", url: "https://github.com/Drey0911" },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/andrey-mantilla-5b7247291/"
    },
    { id: "mail", label: "Email", icon: "fas fa-envelope", url: "mailto:andrey0911a@gmail.com" },
    { id: "whatsapp", label: "WhatsApp", icon: "fab fa-whatsapp", url: "https://wa.me/573222514185" }
  ],

  badge: {
    org: {
      es: "Portafolio Profesional",
      en: "Professional Portfolio"
    },
    serial: "DEV-2026-0911",
    footer: {
      es: "drey.is-a.dev",
      en: "drey.is-a.dev"
    },
    rows: [
      {
        label: { es: "Área", en: "Field" },
        value: { es: "Fullstack / Mobile", en: "Fullstack / Mobile" }
      },
      {
        label: { es: "Ciudad", en: "City" },
        value: { es: "Bucaramanga, CO", en: "Bucaramanga, CO" }
      },
      {
        label: { es: "Estado", en: "Status" },
        value: { es: "Activo", en: "Active" },
        status: true
      }
    ]
  },

  typed: [
    { es: "Futuro Ingeniero de Sistemas", en: "Future Systems Engineer" },
    { es: "Desarrollador Fullstack", en: "Fullstack Developer" },
    { es: "Entusiasta del Frontend", en: "Frontend Enthusiast" },
    { es: "Desarrollador Móvil", en: "Mobile Developer" },
    { es: "Técnico en Software", en: "Software Technician" }
  ],

  stats: [
    { value: "6+", label: { es: "Proyectos", en: "Projects" } },
    { value: "15+", label: { es: "Tecnologías", en: "Technologies" } },
    { value: "3", label: { es: "Titulaciones", en: "Programs" } }
  ],

  quickAccess: [
    {
      index: "01",
      target: "#informacion",
      icon: "fas fa-id-card",
      title: { es: "Información", en: "About" },
      text: { es: "Perfil, estudios y experiencia laboral", en: "Profile, studies and work experience" }
    },
    {
      index: "02",
      target: "#conocimientos",
      icon: "fas fa-code",
      title: { es: "Conocimientos", en: "Skills" },
      text: { es: "Stack técnico y herramientas", en: "Technical stack and tooling" }
    },
    {
      index: "03",
      target: "#proyectos",
      icon: "fas fa-folder-open",
      title: { es: "Proyectos", en: "Projects" },
      text: { es: "Trabajos desarrollados y documentados", en: "Built and documented work" }
    },
    {
      index: "04",
      target: "#contacto",
      icon: "fas fa-paper-plane",
      title: { es: "Contacto", en: "Contact" },
      text: { es: "Canales directos de comunicación", en: "Direct communication channels" }
    }
  ],

  whatsappMessages: [
    {
      id: "collab",
      icon: "fab fa-whatsapp",
      title: { es: "Colaboración", en: "Collaboration" },
      text: { es: "Propuesta de trabajo o proyecto conjunto", en: "Job offer or joint project" },
      message: {
        es: "¡Hola Andrey! Me gustaría hablar sobre una oportunidad de colaboración.",
        en: "Hi Andrey! I would like to talk about a collaboration opportunity."
      }
    },
    {
      id: "info",
      icon: "fab fa-whatsapp",
      title: { es: "Más información", en: "More information" },
      text: { es: "Consultas sobre experiencia y perfil", en: "Questions about experience and profile" },
      message: {
        es: "¡Hola Andrey! Vi tu portafolio y me gustaría conocer más sobre tu experiencia.",
        en: "Hi Andrey! I saw your portfolio and would like to know more about your experience."
      }
    },
    {
      id: "custom",
      icon: "fas fa-pen",
      title: { es: "Mensaje personalizado", en: "Custom message" },
      text: { es: "Escribe tu propio mensaje", en: "Write your own message" },
      custom: true
    }
  ]
};
