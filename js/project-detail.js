// project-detail.js

// Variables globales
let currentImageIndex = 0;
let projectImages = [];

// Obtener el ID del proyecto de la URL
function getProjectIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Obtener el nombre del tipo en español
function getTypeName(type) {
    const typeNames = {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'fullstack': 'Fullstack'
    };
    return typeNames[type] || type;
}

// Cargar datos del proyecto
function loadProjectData() {
    const projectId = getProjectIdFromURL();
    
    if (!projectId || !projectsData[projectId]) {
        window.location.href = 'index.html';
        return;
    }
    
    const project = projectsData[projectId];
    
    // Actualizar título de la página
    document.getElementById('page-title').textContent = `${project.title} | Andrey Mantilla`;
    
    // Hero section
    document.getElementById('project-type').textContent = getTypeName(project.type);
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.description;
    
    // Cargar imágenes
    projectImages = project.images.filter(img => img);
    loadGallery();
    
    // Características
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Tecnologías
    document.getElementById('tech-description').textContent = project.technologies;
    
    const techTags = document.getElementById('tech-tags');
    techTags.innerHTML = '';
    project.techTags.forEach(tech => {
        const tag = document.createElement('div');
        // Aplicar la clase específica de la tecnología + tech-tag-detail
        tag.className = `tech-tag-detail ${tech.class}`;
        tag.innerHTML = `
            <img src="${tech.logo}" alt="${tech.name}" class="tech-logo-detail">
            <span>${tech.name}</span>
        `;
        techTags.appendChild(tag);
    });
    
    // Botones de acción
    const buttonsContainer = document.getElementById('action-buttons');
    buttonsContainer.innerHTML = '';
    
    if (project.type === 'fullstack') {
        if (project.repoLink) {
            const btnBackend = document.createElement('a');
            btnBackend.href = project.repoLink;
            btnBackend.target = '_blank';
            btnBackend.className = 'btn-action btn-repo-backend';
            btnBackend.innerHTML = '<i class="fab fa-github"></i><span>Repositorio Back</span>';
            buttonsContainer.appendChild(btnBackend);
        }
        
        if (project.repoLink2 && project.repoLink2.trim() !== '') {
            const btnFrontend = document.createElement('a');
            btnFrontend.href = project.repoLink2;
            btnFrontend.target = '_blank';
            btnFrontend.className = 'btn-action btn-repo-frontend';
            btnFrontend.innerHTML = '<i class="fab fa-github"></i><span>Repositorio Front</span>';
            buttonsContainer.appendChild(btnFrontend);
        }
    } else {
        if (project.repoLink) {
            const btnRepo = document.createElement('a');
            btnRepo.href = project.repoLink;
            btnRepo.target = '_blank';
            btnRepo.className = 'btn-action btn-repo-general';
            btnRepo.innerHTML = '<i class="fab fa-github"></i><span>Ver Repositorio</span>';
            buttonsContainer.appendChild(btnRepo);
        }
    }
    
    if (project.mockupLink && project.mockupLink.trim() !== '') {
        const btnMockup = document.createElement('a');
        btnMockup.href = project.mockupLink;
        btnMockup.target = '_blank';
        btnMockup.className = 'btn-action btn-mockup';
        btnMockup.innerHTML = '<i class="fas fa-image"></i><span>Ver Mockup</span>';
        buttonsContainer.appendChild(btnMockup);
    }
    
    if (project.deployLink && project.deployLink.trim() !== '') {
        const btnDeploy = document.createElement('a');
        btnDeploy.href = project.deployLink;
        btnDeploy.target = '_blank';
        btnDeploy.className = 'btn-action btn-deploy';
        btnDeploy.innerHTML = '<i class="fas fa-rocket"></i><span>Ver Despliegue</span>';
        buttonsContainer.appendChild(btnDeploy);
    }
}

// Cargar galería de imágenes
function loadGallery() {
    const mainImage = document.getElementById('main-image');
    const indicators = document.getElementById('gallery-indicators');
    const thumbnails = document.getElementById('thumbnails');
    
    // Imagen principal
    if (projectImages.length > 0) {
        mainImage.src = `../img/projects/${projectImages[0]}`;
    }
    
    // Crear indicadores
    indicators.innerHTML = '';
    projectImages.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'gallery-indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToImage(index));
        indicators.appendChild(indicator);
    });
    
    // Crear miniaturas
    thumbnails.innerHTML = '';
    projectImages.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        const img = document.createElement('img');
        img.src = `../img/projects/${image}`;
        img.alt = `Miniatura ${index + 1}`;
        
        thumbnail.appendChild(img);
        thumbnail.addEventListener('click', () => goToImage(index));
        thumbnails.appendChild(thumbnail);
    });
    
    // Event listeners para botones
    document.getElementById('prev-btn').addEventListener('click', prevImage);
    document.getElementById('next-btn').addEventListener('click', nextImage);
    
    // Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
}

// Navegar a una imagen específica
function goToImage(index) {
    currentImageIndex = index;
    updateGallery();
}

// Imagen anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
    updateGallery();
}

// Imagen siguiente
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % projectImages.length;
    updateGallery();
}

// Actualizar galería
function updateGallery() {
    const mainImage = document.getElementById('main-image');
    const indicators = document.querySelectorAll('.gallery-indicator');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Actualizar imagen principal
    mainImage.style.opacity = '0';
    setTimeout(() => {
        mainImage.src = `../img/projects/${projectImages[currentImageIndex]}`;
        mainImage.style.opacity = '1';
    }, 200);
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentImageIndex);
    });
    
    // Actualizar miniaturas
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentImageIndex);
    });
}

// Agregar transición suave a la imagen
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    mainImage.style.transition = 'opacity 0.3s ease';
    
    loadProjectData();
});