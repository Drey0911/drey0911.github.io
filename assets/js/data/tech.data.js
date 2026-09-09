const icon = (path) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const tech = {
  html: { name: "HTML", logo: icon("html5/html5-original.svg") },
  css: { name: "CSS", logo: icon("css3/css3-original.svg") },
  js: { name: "JavaScript", logo: icon("javascript/javascript-original.svg") },
  ts: { name: "TypeScript", logo: icon("typescript/typescript-original.svg") },
  bootstrap: { name: "Bootstrap", logo: icon("bootstrap/bootstrap-original.svg") },
  tailwind: { name: "TailwindCSS", logo: icon("tailwindcss/tailwindcss-original.svg") },
  react: { name: "React", logo: icon("react/react-original.svg") },
  reactnative: { name: "React Native", logo: icon("react/react-original.svg") },
  angular: { name: "Angular", logo: icon("angularjs/angularjs-original.svg") },
  vite: { name: "Vite", logo: icon("vitejs/vitejs-original.svg") },
  java: { name: "Java", logo: icon("java/java-original.svg") },
  spring: { name: "SpringBoot", logo: icon("spring/spring-original.svg") },
  thymeleaf: { name: "Thymeleaf", logo: icon("thymeleaf/thymeleaf-original.svg") },
  php: { name: "PHP", logo: icon("php/php-original.svg") },
  laravel: { name: "Laravel", logo: icon("laravel/laravel-original.svg") },
  livewire: { name: "Livewire", logo: icon("laravel/laravel-original.svg") },
  filament: { name: "Filament", logo: icon("laravel/laravel-original.svg") },
  blade: { name: "Blade", logo: icon("laravel/laravel-original.svg") },
  python: { name: "Python", logo: icon("python/python-original.svg") },
  flask: { name: "Flask", logo: icon("flask/flask-original.svg") },
  jinja: { name: "Jinja2", logo: icon("jinja/jinja-original.svg") },
  node: { name: "Node.js", logo: icon("nodejs/nodejs-original.svg") },
  express: { name: "Express", logo: icon("express/express-original.svg") },
  mysql: { name: "MySQL", logo: icon("mysql/mysql-original.svg") },
  postgresql: { name: "PostgreSQL", logo: icon("postgresql/postgresql-original.svg") },
  mongodb: { name: "MongoDB", logo: icon("mongodb/mongodb-original.svg") },
  h2: { name: "H2 Database", logo: icon("datagrip/datagrip-original.svg") },
  neon: { name: "NeonDB", logo: icon("postgresql/postgresql-original.svg") },
  supabase: { name: "Supabase", logo: icon("supabase/supabase-original.svg") },
  firebase: { name: "Firebase", logo: icon("firebase/firebase-plain.svg") },
  flutter: { name: "Flutter", logo: icon("flutter/flutter-original.svg") },
  dart: { name: "Dart", logo: icon("dart/dart-original.svg") },
  git: { name: "Git", logo: icon("git/git-original.svg") },
  github: { name: "GitHub", logo: icon("github/github-original.svg") },
  figma: { name: "Figma", logo: icon("figma/figma-original.svg") },
  chartjs: { name: "Chart.js", logo: icon("chartjs/chartjs-original.svg") },
  rest: { name: "API REST", logo: icon("swagger/swagger-original.svg") },
  jwt: { name: "JWT Auth", logo: icon("jsonwebtokens/jsonwebtokens-original.svg") },
  websockets: { name: "WebSockets", logo: icon("socketio/socketio-original.svg") }
};

export const getTech = (key) => tech[key] || { name: key, logo: "" };

export const getTechList = (keys = []) => keys.map(getTech);
