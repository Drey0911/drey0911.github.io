const projectsData = {
    1: {
        title: "SpringMotors - Pagina Web de Concesionario",
        type: "backend",
        description: "Plataforma web para la gestion de un concesionario y todo su inventario, tanto vehiculos como repuestos, ademas de ser un inventario agil para el usuario, gestionando proveedores, fabricantes y clientes desde un panel de control exclusivo, manejando ademas un contexto de roles con su panel unico.",
        features: [
            "Registro y administración de Vehiculos y repuestos",
            "Catalogo con filtros para mejorar la busqueda",
            "Seguridad y control en el manejo de sesiones",
            "Gestion optima de proveedores, fabricantes y clientes",
            "Panel de control exclusivo para administradores",
            "Manejo de roles y permisos",
            "Interfaz amigable y responsiva"
        ],
        technologies: "Proyecto enfocado al desarrollo con SpringBoot y conexion a una base de datos PostgreSQL, utilizando Thymeleaf, HTML y CSS para la parte visual, JavaScript para mejorar la experiencia del usuario, contiene H2 console para pruebas y una conexion a Neon Database.",
        techTags: [
            { class: "tech-html", name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { class: "tech-css", name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { class: "tech-js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { class: "tech-spring", name: "SpringBoot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { class: "tech-java", name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { class: "tech-postgresql", name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/APP-SpringMotors-Concesionario",
        repoLink2: "",
        mockupLink: "img/projects/project1/mockup.png",
        deployLink: "",
        images: ["project1/project1-1.png", "project1/project1-2.jpg","project1/project1-3.jpg","project1/project1-4.png","project1/project1-5.png","project1/project1-6.png","project1/project1-7.png"]
    },

    2: {
        title: "MediFast App para dispensación digital de insumos médicos",
        type: "fullstack",
        description: "Aplicacion movil Fullstack desarrollada para la agenda de recolecciones de medicamentos e insumos medicos, con un sistema de recordatorios automaticos via WhatsApp y un dashboard administrativo web para la gestion completa del dispensario medico, este proyecto fue creado, desarrollado y documentado para mi proyecto de grado Tecnológico.",
        features: [
            "Webcoskets para actualizacion en tiempo real",
            "Jobs programados para el envio automatico de recordatorios",
            "Servicio de mensajeria con WhatsApp Business API",
            "Dashboard administrativo web",
            "Gestion de medicamentos, sedes, usuarios, recolecciones, historiales y favoritos",
            "Interfaz amigable y responsiva",
            "ChatBOT Basico para disponibilidad, medicamentos y ayuda al usuario (Prototipo)"
        ],
        technologies: "Para este proyecto se utilizó Python con Flask para el desarrollo backend (Rutas, modelos y servicios), acompañado de librerias utiles para Websockets, Schedulers y jobs, Autenticación JWT, plantillas JINJA2 para el dashboard administrativo con un frontend en react native para el desarrollo movil siguiendo la arquitectura MVP (Modelo-vista-presentador), ademas de una base de datos relacional en MySQL, consumo y desarrollo de API REST y conexion con WhatsApp Business API para el envio de notificaciones y recordatorios automáticos.",
        techTags: [
            { class: "tech-python", name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { class: "tech-flask", name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
            { class: "tech-reactnative", name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { class: "tech-typescript", name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { class: "tech-mysql", name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/TG-MediFast-Dispensario-BACKEND",
        repoLink2: "https://github.com/Drey0911/TG-MediFast-Dispensario-FRONTEND",
        mockupLink: "img/projects/project2/mockup.png",
        deployLink: "",
        images: ["project2/project2-1.png", "project2/project2-2.png","project2/project2-3.png","project2/project2-4.png","project2/project2-5.png","project2/project2-6.png","project2/project2-7.png"]
    },

    3: {
        title: "Football PRO - Proyecto de relaciones Spring",
        type: "backend",
        description: "Este proyecto es para el aprendizaje optimo de las relaciones con SpringBoot enfocado al mundo del futbol y la gestion de un club profesional, desarrollado para comprender mejor las relaciones Spring OneToOne, ManyToOne, ManyToMany, OneToMany.",
        features: [
            "Relaciones entre entidades",
            "CRUD completo para la gestion de cada entidad y sus relaciones",
            "Autenticación básica",
            "Interfaz amigable y responsiva",
        ],
        technologies: "Tecnologías utilizadas: HTML, CSS, JavaScript, SpringBoot, Java",
        techTags: [
            { class: "tech-html", name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { class: "tech-css", name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { class: "tech-js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { class: "tech-spring", name: "SpringBoot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { class: "tech-java", name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/APP-Football-Pro",
        repoLink2: "",
        mockupLink: "img/projects/project3/mockup.png",
        deployLink: "",
        images: ["project3/project3-1.png", "project3/project3-2.png","project3/project3-3.png","project3/project3-4.png","project3/project3-5.png","project3/project3-6.png","project3/project3-7.png"]
    },

    4: {
        title: "SmartPets - App de citas veterinarias",
        type: "frontend",
        description: "Aplicación para el control, agenda y gestion de citas veterinarias y mascotas en tiempo real y al alcance de un dispositivo movil iOS o Android.",
        features: [
            "Agendamiento de citas e historial médico",
            "Gestion de mascotas y profesionales veterinarios",
            "Panel de control para administradores",
            "Interfaz amigable tanto en modo claro como oscuro independiente para cada usuario",
            "Notificaciones push",
            "Autenticacion y registro de usuarios",
        ],
        technologies: "Para este proyecto se utilizó el framework Flutter para desarrollo movil junto a sus diversas configuraciones unicas tanto para iOS como Android, cuenta con una conexion a Firebase haciendo uso del Storage para el almacenamiento de imagenes y el authentication para el registro y autenticacion de usuarios, ademas de una base de datos en tiempo real para el almacenamiento de datos.",
        techTags: [
            { class: "tech-flutter", name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            { class: "tech-firebase", name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
        ],
        repoLink: "https://github.com/Drey0911/APP-Smart-Pets-Veterinaria",
        repoLink2: "",
        mockupLink: "img/projects/project4/mockup.jpg",
        deployLink: "",
        images: ["project4/project4-1.png", "project4/project4-2.png","project4/project4-3.png","project4/project4-4.png","project4/project4-5.png","project4/project4-6.png","project4/project4-7.png"]
    },

    5: {
        title: "INVDrey - Software para la gestión de inventarios",
        type: "backend",
        description: "Software basico para el control de productos, clientes, compras, ventas y proveedores dentro de un inventario digital, permitiendo la gestión y correcto almacenamiento de datos de cada modulo del inventario.",
        features: [
            "Control y gestión de productos, clientes, proveedores, usuarios y roles",
            "Control y gestión de compras y ventas relacionadas con productos, clientes y proveedores",
            "Manejo de roles y permisos",
            "Control de sesiones y autenticación de usuarios",
            "Interfaz amigable",
            "Sistema de Datatables para todo el inventario",
        ],
        technologies: "Para este proyecto se utilizó PHP para el desarrollo del backend, para el Frontend se utilizó HTML, CSS de la mano de su framewrok TailwindCSS, JavaScript para mejorar la experiencia del usuario, ademas de una base de datos MySQL para el almacenamiento de datos.",
        techTags: [
            { class: "tech-php", name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { class: "tech-js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { class: "tech-mysql", name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { class: "tech-css", name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/Inventario-Y-Gestion-De-Productos",
        repoLink2: "",
        mockupLink: "img/projects/project5/mockup.png",
        deployLink: "",
        images: ["project5/project5-1.png", "project5/project5-2.png","project5/project5-3.png","project5/project5-4.png","project5/project5-5.png","project5/project5-6.png","project5/project5-7.png"]
    },

    6: {
        title: "LibreCO E-commerce para la venta de E-Books",
        type: "fullstack",
        description: "Plataforma web SPA para la venta y distribucion de libros digitales (E-Books), catalogo dinamico alimentado por la BD, organizando por categorias, carrito de compras, UI/UX atractiva y moderna, ademas de contar con los servicios de autenticación de Supabase y su Storage para PDF, EPUB y PNG, todo, desarrollado con el stack MERN y API Rest.",
        features: [
            "Autenticación y registro de usuarios con Supabase Auth y JWT",
            "Guardado de EPUB, PDF e imagenes en Supabase Storage",
            "SPA con UI/UX moderna, atractiva y responsive",
            "Catalogo de libros con filtros por categorias de manera dinamica",
            "Carrito de compras funcional",
            "Validacion de tarjetas de credito con algoritmo Luhn",
            "Aplicacion de descuentos para la parte de destacados"
        ],
        technologies: "Proyecto desarrollado con el stack MERN (MongoDB, Express, React, Node.js) utilizando Vite como bundler para React en el frontend, TailwindCSS para la parte visual y de estilos, ademas de Supabase para la autenticación con JWT tambien y almacenamiento de archivos, creando una API REST personalizada con Express y Node.js para el manejo de datos y logica del negocio para guardar toda la informacion en el Storage de Supabase y en MongoDB NoSQL.",
        techTags: [
            { class: "tech-react", name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { class: "tech-js", name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { class: "tech-mongodb", name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { class: "tech-supabase", name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
            { class: "tech-nodejs", name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { class: "tech-express", name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
        ],
        repoLink: "https://github.com/Drey0911/Ebooks-LibreCO-BACKEND",
        repoLink2: "https://github.com/Drey0911/Ebooks-LibreCO-FRONTEND",
        mockupLink: "img/projects/project6/mockup.png",
        deployLink: "",
        images: ["project6/project6-1.png", "project6/project6-2.png","project6/project6-3.png","project6/project6-4.png","project6/project6-5.png","project6/project6-6.png","project6/project6-7.png"]
    },

};

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData };
}