export const projects = [
  {
    id: "springmotors",
    legacyId: 1,
    folder: "project1",
    type: "backend",
    year: "2025",
    title: {
      es: "SpringMotors — Página web de concesionario",
      en: "SpringMotors — Car dealership website"
    },
    summary: {
      es: "Plataforma web para la gestión de un concesionario, su inventario de vehículos y repuestos, con panel de control y control de roles.",
      en: "Web platform to manage a car dealership, its vehicle and spare-part inventory, with an admin panel and role control."
    },
    description: {
      es: "Plataforma web para la gestión de un concesionario y todo su inventario, tanto vehículos como repuestos, además de ser un inventario ágil para el usuario, gestionando proveedores, fabricantes y clientes desde un panel de control exclusivo, manejando además un contexto de roles con su panel único.",
      en: "Web platform for managing a car dealership and its full inventory of vehicles and spare parts, offering an agile inventory experience while handling suppliers, manufacturers and customers from a dedicated control panel with role-based access."
    },
    role: { es: "Desarrollo Backend y vistas", en: "Backend development and views" },
    features: [
      { es: "Registro y administración de vehículos y repuestos", en: "Vehicle and spare-part registration and management" },
      { es: "Catálogo con filtros para mejorar la búsqueda", en: "Catalog with filters to improve search" },
      { es: "Seguridad y control en el manejo de sesiones", en: "Security and session handling control" },
      { es: "Gestión óptima de proveedores, fabricantes y clientes", en: "Optimized supplier, manufacturer and customer management" },
      { es: "Panel de control exclusivo para administradores", en: "Dedicated admin control panel" },
      { es: "Manejo de roles y permisos", en: "Roles and permissions handling" },
      { es: "Interfaz amigable y responsiva", en: "Friendly and responsive interface" }
    ],
    stackNote: {
      es: "Proyecto enfocado al desarrollo con SpringBoot y conexión a una base de datos PostgreSQL, utilizando Thymeleaf, HTML y CSS para la parte visual, JavaScript para mejorar la experiencia del usuario, con H2 console para pruebas y conexión a Neon Database.",
      en: "Project built with SpringBoot and a PostgreSQL database, using Thymeleaf, HTML and CSS for the interface, JavaScript to improve the user experience, an H2 console for testing and a Neon Database connection."
    },
    stack: ["html", "css", "js", "spring", "java", "postgresql", "thymeleaf", "neon", "h2"],
    preview: ["html", "css", "js", "spring", "java", "postgresql"],
    links: {
      repo: "https://github.com/Drey0911/APP-SpringMotors-Concesionario",
      repoFront: "",
      mockup: "mockup.png",
      deploy: ""
    },
    cover: "project1.png",
    images: [
      "project1-1.png",
      "project1-2.jpg",
      "project1-3.jpg",
      "project1-4.png",
      "project1-5.png",
      "project1-6.png",
      "project1-7.png"
    ]
  },

  {
    id: "medifast",
    legacyId: 2,
    folder: "project2",
    type: "fullstack",
    year: "2025",
    title: {
      es: "MediFast — Dispensación digital de insumos médicos",
      en: "MediFast — Digital dispensing of medical supplies"
    },
    summary: {
      es: "App móvil Fullstack para agendar recolecciones de medicamentos, con recordatorios por WhatsApp y dashboard administrativo web.",
      en: "Fullstack mobile app to schedule medication pickups, with WhatsApp reminders and a web admin dashboard."
    },
    description: {
      es: "Aplicación móvil Fullstack desarrollada para la agenda de recolecciones de medicamentos e insumos médicos, con un sistema de recordatorios automáticos vía WhatsApp y un dashboard administrativo web para la gestión completa del dispensario médico. Este proyecto fue creado, desarrollado y documentado como proyecto de grado tecnológico.",
      en: "Fullstack mobile application built to schedule pickups of medication and medical supplies, with automatic WhatsApp reminders and a web admin dashboard for full management of the medical dispensary. It was created, developed and documented as a technologist degree project."
    },
    role: { es: "Proyecto de grado — Fullstack", en: "Degree project — Fullstack" },
    features: [
      { es: "WebSockets para actualización en tiempo real", en: "WebSockets for real-time updates" },
      { es: "Jobs programados para el envío automático de recordatorios", en: "Scheduled jobs for automatic reminder delivery" },
      { es: "Servicio de mensajería con WhatsApp Business API", en: "Messaging service through WhatsApp Business API" },
      { es: "Dashboard administrativo web", en: "Web administrative dashboard" },
      { es: "Gestión de medicamentos, sedes, usuarios, recolecciones e historiales", en: "Management of medication, branches, users, pickups and histories" },
      { es: "ChatBot básico de disponibilidad y ayuda al usuario", en: "Basic chatbot for availability and user support" },
      { es: "Arquitectura Modelo-Vista-Presentador", en: "Model-View-Presenter architecture" }
    ],
    stackNote: {
      es: "Se utilizó Python con Flask para el backend (rutas, modelos y servicios), con librerías para websockets, schedulers y autenticación JWT, plantillas Jinja2 para el dashboard administrativo y React Native en el frontend móvil, además de MySQL como base de datos relacional, API REST y conexión con WhatsApp Business API.",
      en: "Built with Python and Flask on the backend (routes, models and services), using libraries for websockets, schedulers and JWT authentication, Jinja2 templates for the admin dashboard and React Native for the mobile frontend, plus MySQL as the relational database, a REST API and a WhatsApp Business API connection."
    },
    stack: ["python", "flask", "reactnative", "ts", "mysql", "jinja", "rest", "jwt", "websockets"],
    preview: ["python", "flask", "reactnative", "mysql"],
    links: {
      repo: "https://github.com/Drey0911/TG-MediFast-Dispensario-BACKEND",
      repoFront: "https://github.com/Drey0911/TG-MediFast-Dispensario-FRONTEND",
      mockup: "mockup.png",
      deploy: ""
    },
    cover: "project2.png",
    images: [
      "project2-1.png",
      "project2-2.png",
      "project2-3.png",
      "project2-4.png",
      "project2-5.png",
      "project2-6.png",
      "project2-7.png"
    ]
  },

  {
    id: "football-pro",
    legacyId: 3,
    folder: "project3",
    type: "backend",
    year: "2024",
    title: {
      es: "Football PRO — Relaciones con Spring",
      en: "Football PRO — Spring relationships project"
    },
    summary: {
      es: "Proyecto de aprendizaje sobre relaciones JPA en SpringBoot aplicado a la gestión de un club profesional de fútbol.",
      en: "Learning project about JPA relationships in SpringBoot applied to managing a professional football club."
    },
    description: {
      es: "Proyecto orientado al aprendizaje de las relaciones con SpringBoot enfocado al mundo del fútbol y la gestión de un club profesional, desarrollado para comprender mejor las relaciones OneToOne, ManyToOne, ManyToMany y OneToMany.",
      en: "Project focused on learning SpringBoot entity relationships in the context of football and professional club management, built to better understand OneToOne, ManyToOne, ManyToMany and OneToMany mappings."
    },
    role: { es: "Práctica académica", en: "Academic practice" },
    features: [
      { es: "Relaciones entre entidades JPA", en: "JPA entity relationships" },
      { es: "CRUD completo para cada entidad y sus relaciones", en: "Full CRUD for each entity and its relationships" },
      { es: "Autenticación básica", en: "Basic authentication" },
      { es: "Interfaz amigable y responsiva", en: "Friendly and responsive interface" }
    ],
    stackNote: {
      es: "Desarrollado con SpringBoot y Java en el backend, Thymeleaf y Bootstrap para las vistas, con H2 Database para las pruebas locales.",
      en: "Built with SpringBoot and Java on the backend, Thymeleaf and Bootstrap for the views, and H2 Database for local testing."
    },
    stack: ["html", "css", "js", "spring", "java", "bootstrap", "thymeleaf", "h2"],
    preview: ["html", "css", "js", "spring", "java", "bootstrap"],
    links: {
      repo: "https://github.com/Drey0911/APP-Football-Pro",
      repoFront: "",
      mockup: "mockup.png",
      deploy: ""
    },
    cover: "project3.png",
    images: [
      "project3-1.png",
      "project3-2.png",
      "project3-3.png",
      "project3-4.png",
      "project3-5.png",
      "project3-6.png",
      "project3-7.png"
    ]
  },

  {
    id: "smartpets",
    legacyId: 4,
    folder: "project4",
    type: "frontend",
    year: "2024",
    title: {
      es: "SmartPets — App de citas veterinarias",
      en: "SmartPets — Veterinary appointments app"
    },
    summary: {
      es: "Aplicación móvil para el control y agenda de citas veterinarias y mascotas en tiempo real, en iOS y Android.",
      en: "Mobile app to manage and schedule veterinary appointments and pets in real time, on iOS and Android."
    },
    description: {
      es: "Aplicación para el control, agenda y gestión de citas veterinarias y mascotas en tiempo real y al alcance de un dispositivo móvil iOS o Android.",
      en: "Application for tracking, scheduling and managing veterinary appointments and pets in real time from any iOS or Android device."
    },
    role: { es: "Desarrollo móvil con Flutter", en: "Mobile development with Flutter" },
    features: [
      { es: "Agendamiento de citas e historial médico", en: "Appointment scheduling and medical history" },
      { es: "Gestión de mascotas y profesionales veterinarios", en: "Management of pets and veterinary professionals" },
      { es: "Panel de control para administradores", en: "Admin control panel" },
      { es: "Modo claro y oscuro independiente por usuario", en: "Light and dark mode per user" },
      { es: "Notificaciones push", en: "Push notifications" },
      { es: "Autenticación y registro de usuarios", en: "User authentication and registration" }
    ],
    stackNote: {
      es: "Desarrollado con Flutter para móvil, con configuraciones específicas para iOS y Android, conexión a Firebase usando Storage para imágenes, Authentication para el registro de usuarios y una base de datos en tiempo real.",
      en: "Built with Flutter for mobile, with platform-specific setups for iOS and Android, connected to Firebase using Storage for images, Authentication for user sign-up and a realtime database."
    },
    stack: ["flutter", "dart", "firebase"],
    preview: ["flutter", "dart", "firebase"],
    links: {
      repo: "https://github.com/Drey0911/APP-Smart-Pets-Veterinaria",
      repoFront: "",
      mockup: "mockup.jpg",
      deploy: ""
    },
    cover: "project4.png",
    images: [
      "project4-1.png",
      "project4-2.png",
      "project4-3.png",
      "project4-4.png",
      "project4-5.png",
      "project4-6.png",
      "project4-7.png"
    ]
  },

  {
    id: "inventario-filament",
    legacyId: 5,
    folder: "project5",
    type: "backend",
    year: "2025",
    title: {
      es: "Dashboard para gestión de inventarios",
      en: "Inventory management dashboard"
    },
    summary: {
      es: "Software de control de categorías, productos, clientes, compras, ventas y proveedores con reportes y gráficas dinámicas.",
      en: "Software to control categories, products, customers, purchases, sales and suppliers with reports and dynamic charts."
    },
    description: {
      es: "Software para el control de categorías, productos, clientes, compras, ventas y proveedores dentro de un inventario digital, permitiendo la gestión y el correcto almacenamiento de datos de cada módulo, con visualización gráfica mediante gráficas dinámicas.",
      en: "Software to control categories, products, customers, purchases, sales and suppliers inside a digital inventory, enabling proper data management for every module with visual reporting through dynamic charts."
    },
    role: { es: "Desarrollo backend con Laravel", en: "Backend development with Laravel" },
    features: [
      { es: "Gestión de categorías, productos, clientes, proveedores y usuarios", en: "Management of categories, products, customers, suppliers and users" },
      { es: "Control de compras y ventas relacionadas entre módulos", en: "Purchase and sales control linked across modules" },
      { es: "Gráficas dinámicas para la visualización de datos", en: "Dynamic charts for data visualization" },
      { es: "Autenticación y registro de usuarios con Filament", en: "User authentication and registration with Filament" },
      { es: "Sistema de reportes en PDF y Excel", en: "PDF and Excel reporting system" },
      { es: "Dashboard administrativo con estadísticas", en: "Administrative dashboard with statistics" },
      { es: "Arquitectura Modelo-Vista-Controlador", en: "Model-View-Controller architecture" }
    ],
    stackNote: {
      es: "Desarrollado con PHP y Laravel en el backend, Blade para las vistas, TailwindCSS y Vite para los estilos, JavaScript para los gráficos, MySQL como base de datos y librerías como Livewire, Filament y Chart.js.",
      en: "Built with PHP and Laravel on the backend, Blade for views, TailwindCSS and Vite for styling, JavaScript for charts, MySQL as the database and libraries such as Livewire, Filament and Chart.js."
    },
    stack: ["php", "laravel", "js", "mysql", "tailwind", "vite", "livewire", "filament", "chartjs", "blade"],
    preview: ["php", "laravel", "js", "mysql", "tailwind"],
    links: {
      repo: "https://github.com/Drey0911/Dashboard-De-Inventario-Con-Filament",
      repoFront: "",
      mockup: "mockup.png",
      deploy: ""
    },
    cover: "project5.png",
    images: [
      "project5-1.png",
      "project5-2.png",
      "project5-3.png",
      "project5-4.png",
      "project5-5.png",
      "project5-6.png",
      "project5-7.png"
    ]
  },

  {
    id: "libreco",
    legacyId: 6,
    folder: "project6",
    type: "fullstack",
    year: "2026",
    title: {
      es: "LibreCO — E-commerce de E-Books",
      en: "LibreCO — E-Book e-commerce"
    },
    summary: {
      es: "Plataforma SPA para la venta de libros digitales con catálogo dinámico, carrito de compras y almacenamiento en Supabase.",
      en: "SPA platform to sell digital books with a dynamic catalog, shopping cart and Supabase storage."
    },
    description: {
      es: "Plataforma web SPA para la venta y distribución de libros digitales (E-Books), con catálogo dinámico alimentado por la base de datos, organización por categorías, carrito de compras y una UI/UX moderna, además de autenticación con Supabase y Storage para PDF, EPUB y PNG, desarrollado con el stack MERN y API REST.",
      en: "SPA web platform for selling and distributing digital books (E-Books), with a dynamic catalog fed by the database, category organization, shopping cart and a modern UI/UX, plus Supabase authentication and Storage for PDF, EPUB and PNG files, built with the MERN stack and a REST API."
    },
    role: { es: "Desarrollo Fullstack MERN", en: "MERN Fullstack development" },
    features: [
      { es: "Autenticación y registro de usuarios con Supabase Auth y JWT", en: "User authentication and registration with Supabase Auth and JWT" },
      { es: "Almacenamiento de EPUB, PDF e imágenes en Supabase Storage", en: "EPUB, PDF and image storage in Supabase Storage" },
      { es: "SPA con UI/UX moderna y responsive", en: "SPA with modern, responsive UI/UX" },
      { es: "Catálogo de libros con filtros dinámicos por categoría", en: "Book catalog with dynamic category filters" },
      { es: "Carrito de compras funcional", en: "Functional shopping cart" },
      { es: "Validación de tarjetas de crédito con algoritmo Luhn", en: "Credit card validation using the Luhn algorithm" },
      { es: "Aplicación de descuentos en libros destacados", en: "Discounts applied to featured books" }
    ],
    stackNote: {
      es: "Desarrollado con el stack MERN (MongoDB, Express, React, Node.js) usando Vite como bundler, TailwindCSS para los estilos y Supabase para autenticación con JWT y almacenamiento de archivos, con una API REST propia en Express y Node.js para la lógica de negocio.",
      en: "Built with the MERN stack (MongoDB, Express, React, Node.js) using Vite as the bundler, TailwindCSS for styling and Supabase for JWT authentication and file storage, with a custom REST API in Express and Node.js for business logic."
    },
    stack: ["react", "vite", "js", "mongodb", "supabase", "node", "express", "tailwind", "rest", "jwt"],
    preview: ["react", "js", "mongodb", "supabase", "node", "express"],
    links: {
      repo: "https://github.com/Drey0911/Ebooks-LibreCO-BACKEND",
      repoFront: "https://github.com/Drey0911/Ebooks-LibreCO-FRONTEND",
      mockup: "mockup.png",
      deploy: ""
    },
    cover: "project6.png",
    images: [
      "project6-1.png",
      "project6-2.png",
      "project6-3.png",
      "project6-4.png",
      "project6-5.png",
      "project6-6.png",
      "project6-7.png"
    ]
  }
];

export const projectTypes = [
  { id: "all", icon: "fas fa-layer-group" },
  { id: "frontend", icon: "fas fa-palette" },
  { id: "backend", icon: "fas fa-server" },
  { id: "fullstack", icon: "fas fa-cubes" }
];

export const findProject = (key) => {
  if (!key) return null;
  const byId = projects.find((project) => project.id === key);
  if (byId) return byId;
  return projects.find((project) => String(project.legacyId) === String(key)) || null;
};
