export const marqueeKeys = [
  "html",
  "css",
  "js",
  "ts",
  "bootstrap",
  "tailwind",
  "react",
  "angular",
  "java",
  "spring",
  "php",
  "laravel",
  "python",
  "flask",
  "node",
  "express",
  "mysql",
  "postgresql",
  "mongodb",
  "flutter",
  "firebase",
  "supabase",
  "git",
  "figma"
];

export const skillGroups = [
  {
    id: "frontend",
    icon: "fas fa-palette",
    kicker: { es: "Desarrollo", en: "Development" },
    title: "Frontend",
    subtitle: { es: "Lenguajes, frameworks y librerías", en: "Languages, frameworks and libraries" },
    items: [
      {
        key: "html",
        detail: { es: "Maquetación semántica, formularios y accesibilidad.", en: "Semantic markup, forms and accessibility." }
      },
      {
        key: "css",
        detail: { es: "Flexbox, Grid, animaciones y diseño responsive.", en: "Flexbox, Grid, animations and responsive design." }
      },
      {
        key: "js",
        detail: { es: "Manipulación del DOM, eventos, módulos y animaciones.", en: "DOM manipulation, events, modules and animations." }
      },
      {
        key: "react",
        detail: { es: "Componentes JSX, manejo de estados, hooks y rutas.", en: "JSX components, state management, hooks and routing." }
      },
      {
        key: "bootstrap",
        detail: { es: "Componentes, grid system y personalización de temas.", en: "Components, grid system and theme customization." }
      },
      {
        key: "tailwind",
        detail: { es: "Utilidades, configuración y diseño responsive.", en: "Utility classes, configuration and responsive design." }
      }
    ]
  },
  {
    id: "backend",
    icon: "fas fa-server",
    kicker: { es: "Desarrollo", en: "Development" },
    title: "Backend",
    subtitle: { es: "Lenguajes, frameworks y librerías", en: "Languages, frameworks and libraries" },
    items: [
      {
        key: "java",
        detail: { es: "POO, estructuras de datos, Java Web y JSTL.", en: "OOP, data structures, Java Web and JSTL." }
      },
      {
        key: "spring",
        detail: { es: "JPA, servlets, Thymeleaf y conexión a bases de datos.", en: "JPA, servlets, Thymeleaf and database connections." }
      },
      {
        key: "php",
        detail: { es: "Desarrollo web, seguridad y autenticación por sesiones.", en: "Web development, security and session authentication." }
      },
      {
        key: "laravel",
        detail: { es: "MVC, rutas, Blade, middleware, Filament y Livewire.", en: "MVC, routing, Blade, middleware, Filament and Livewire." }
      },
      {
        key: "python",
        detail: { es: "Bases de programación, scripts, bots y MicroPython para IoT.", en: "Programming fundamentals, scripts, bots and MicroPython for IoT." }
      },
      {
        key: "flask",
        detail: { es: "Jinja2, rutas, servicios, API REST, websockets y JWT.", en: "Jinja2, routing, services, REST API, websockets and JWT." }
      }
    ]
  },
  {
    id: "mobile",
    icon: "fas fa-mobile-screen",
    kicker: { es: "Desarrollo", en: "Development" },
    title: "Mobile",
    subtitle: { es: "Aplicaciones multiplataforma", en: "Cross-platform applications" },
    items: [
      {
        key: "flutter",
        detail: { es: "Desarrollo multiplataforma, widgets y build para iOS/Android.", en: "Cross-platform development, widgets and iOS/Android builds." }
      },
      {
        key: "reactnative",
        detail: { es: "Componentes, navegación y arquitectura MVP.", en: "Components, navigation and MVP architecture." }
      },
      {
        key: "dart",
        detail: { es: "Lenguaje base para el desarrollo con Flutter.", en: "Core language for Flutter development." }
      }
    ]
  },
  {
    id: "database",
    icon: "fas fa-database",
    kicker: { es: "Diseño y manejo", en: "Design and management" },
    title: "Database",
    subtitle: { es: "Motores relacionales y NoSQL", en: "Relational and NoSQL engines" },
    items: [
      {
        key: "mysql",
        detail: { es: "Consultas complejas, funciones, triggers y procedimientos.", en: "Complex queries, functions, triggers and procedures." }
      },
      {
        key: "postgresql",
        detail: { es: "Modelado relacional, consultas avanzadas y funciones.", en: "Relational modeling, advanced queries and functions." }
      },
      {
        key: "mongodb",
        detail: { es: "Documentos, consultas y agregaciones para proyectos MERN.", en: "Documents, queries and aggregations for MERN projects." }
      }
    ]
  },
  {
    id: "tools",
    icon: "fas fa-toolbox",
    kicker: { es: "Herramientas", en: "Tooling" },
    title: "Dev Utilities",
    subtitle: { es: "Servicios y herramientas de trabajo", en: "Services and working tools" },
    items: [
      {
        key: "firebase",
        detail: { es: "Auth, storage, realtime database y cloud messaging.", en: "Auth, storage, realtime database and cloud messaging." }
      },
      {
        key: "supabase",
        detail: { es: "Base relacional, triggers, autenticación y storage.", en: "Relational database, triggers, auth and storage." }
      },
      {
        key: "figma",
        detail: { es: "Prototipos UI/UX, mockups y wireframes.", en: "UI/UX prototypes, mockups and wireframes." }
      },
      {
        key: "git",
        detail: { es: "Ramas, merges, pull requests y trabajo colaborativo.", en: "Branches, merges, pull requests and collaborative work." }
      },
      {
        key: "rest",
        detail: { es: "Consumo y creación de servicios RESTful seguros.", en: "Consuming and building secure RESTful services." }
      }
    ]
  },
  {
    id: "learning",
    icon: "fas fa-graduation-cap",
    kicker: { es: "En formación", en: "Learning" },
    title: "Learning",
    subtitle: { es: "Tecnologías en estudio", en: "Technologies in progress" },
    items: [
      {
        key: "angular",
        detail: { es: "CLI, componentes, servicios y manejo de rutas.", en: "CLI, components, services and routing." }
      },
      {
        key: "node",
        detail: { es: "Servidores, paquetes npm y APIs RESTful.", en: "Servers, npm packages and RESTful APIs." }
      },
      {
        key: "express",
        detail: { es: "Rutas, middleware y estructura de servidores.", en: "Routing, middleware and server structure." }
      },
      {
        key: "ts",
        detail: { es: "Tipado estático aplicado a proyectos React y Node.", en: "Static typing applied to React and Node projects." }
      }
    ]
  }
];
