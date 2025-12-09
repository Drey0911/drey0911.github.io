// Variables globales para controlar el carrusel
let carouselInterval;
let currentImageIndex = 0;
let totalImages = 0;

// Detectar si es dispositivo móvil
const isMobile = () => window.innerWidth <= 768;

// Función para detener el carrusel
function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

// Función para iniciar el carrusel
function startCarousel(modalImages) {
    stopCarousel();
    
    carouselInterval = setInterval(() => {
        nextImage(modalImages);
    }, 4000);
}

// Función para cambiar a la siguiente imagen
function nextImage(modalImages) {
    modalImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    modalImages[currentImageIndex].classList.add('active');
    updateIndicators();
}

// Función para cambiar a la imagen anterior
function prevImage(modalImages) {
    modalImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    modalImages[currentImageIndex].classList.add('active');
    updateIndicators();
}

// Función para ir a una imagen específica
function goToImage(index, modalImages) {
    modalImages[currentImageIndex].classList.remove('active');
    currentImageIndex = index;
    modalImages[currentImageIndex].classList.add('active');
    updateIndicators();
}

// Función para actualizar los indicadores
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentImageIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Función para crear los indicadores del carrusel
function createIndicators(imageCount) {
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i < imageCount; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            const modalImages = document.querySelectorAll('.modal-images img');
            goToImage(i, modalImages);
            stopCarousel();
            startCarousel(modalImages);
        });
        indicatorsContainer.appendChild(indicator);
    }
}

// Función para manejar el scroll en móviles
function handleMobileScroll() {
    if (!isMobile()) return;
    
    const projectCards = document.querySelectorAll('.project-card');
    const windowHeight = window.innerHeight;
    
    projectCards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
        const cardBottom = cardRect.bottom;
        const cardCenter = (cardTop + cardBottom) / 2;
        
        // centro de la tarjeta está en el viewport central (40% superior y 40% inferior)
        if (cardCenter > windowHeight * 0.3 && cardCenter < windowHeight * 0.7) {
            card.classList.add('active');
            card.classList.add('show-hover');
        } else {
            card.classList.remove('active');
            card.classList.remove('show-hover');
        }
    });
}

// Función para inicializar los proyectos
function initProjects() {
    renderProjects('all');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterType = button.getAttribute('data-filter');
            renderProjects(filterType);
        });
    });
    
    setupModalListeners();
    
    // Agregar event listener para scroll en móviles
    if (isMobile()) {
        window.addEventListener('scroll', handleMobileScroll);
        // Ejecutar una vez al cargar
        setTimeout(handleMobileScroll, 100);
    }
}

// Función para obtener el nombre del tipo en español
function getTypeName(type) {
    const typeNames = {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'fullstack': 'Fullstack'
    };
    return typeNames[type] || type;
}

// Función para renderizar proyectos según el filtro
function renderProjects(filterType) {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    let filteredProjects = Object.entries(projectsData);
    
    if (filterType !== 'all') {
        filteredProjects = filteredProjects.filter(([id, project]) => project.type === filterType);
    }
    
    filteredProjects.forEach(([id, project]) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const imageUrl = `img/projects/project${id}/project${id}.png`;
        
        const sourceLogos = project.previewTechs && project.previewTechs.length ? project.previewTechs : project.techTags.slice(0, 3);
        const techLogosHTML = sourceLogos.map(tech => {
            return `<img src="${tech.logo}" alt="${tech.name}" class="tech-logo-card" title="${tech.name}">`;
        }).join('');
        
        // Obtener descripción corta (primeros 120 caracteres)
        const shortDescription = project.description.length > 120 
            ? project.description.substring(0, 120) + '...' 
            : project.description;
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${imageUrl}" alt="${project.title}">
            </div>
            <div class="project-content">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p class="project-description">${shortDescription}</p>
                </div>
                <div class="project-tech">
                    ${techLogosHTML}
                </div>
                <button class="btn-view-more" data-project="${id}">
                    <span>Ver más</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
    
    setupCardListeners();
    
    // Si es móvil, activar el scroll handler
    if (isMobile()) {
        setTimeout(handleMobileScroll, 100);
    }
}

// Función para configurar event listeners de las tarjetas
function setupCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // En móviles, usar click para abrir modal directamente
        if (isMobile()) {
            card.addEventListener('click', (e) => {
                const btn = card.querySelector('.btn-view-more');
                if (btn) {
                    openProjectModal(btn.getAttribute('data-project'));
                }
            });
        } else {
            // En desktop, mantener el hover
            card.addEventListener('click', (e) => {
                // Solo abrir modal si se hace click en el botón específicamente
                if (e.target.closest('.btn-view-more')) {
                    const btn = e.target.closest('.btn-view-more');
                    openProjectModal(btn.getAttribute('data-project'));
                }
            });
        }
    });
}

// Función para abrir el modal del proyecto
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    const projectModal = document.querySelector('.project-modal');
    const modalImages = document.querySelectorAll('.modal-images img');
    
    // Actualizar título y badge
    document.querySelector('.modal-title').textContent = project.title;
    const typeBadge = document.querySelector('.modal-type-badge');
    typeBadge.textContent = getTypeName(project.type);
    
    // Actualizar descripción
    document.querySelector('.description-text').textContent = project.description;
    
    // Actualizar características
    const featuresList = document.querySelector('.features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Actualizar tecnologías
    document.querySelector('.technologies-text').textContent = project.technologies;
    
    // Actualizar tags de tecnología en el modal
    const techTagsModal = document.querySelector('.tech-tags-modal');
    techTagsModal.innerHTML = '';
    project.techTags.forEach(tech => {
        const span = document.createElement('span');
        span.className = tech.class;
        span.innerHTML = `
            <img src="${tech.logo}" alt="${tech.name}" class="tech-logo-modal">
            ${tech.name}
        `;
        techTagsModal.appendChild(span);
    });
    
    // Crear botones dinámicamente según el tipo de proyecto
    const buttonsContainer = document.querySelector('.modal-project-buttons');
    buttonsContainer.innerHTML = '';
    
    if (project.type === 'fullstack') {
        if (project.repoLink) {
            const btnBackend = document.createElement('a');
            btnBackend.href = project.repoLink;
            btnBackend.target = '_blank';
            btnBackend.className = 'btn-repository btn-repo-backend';
            btnBackend.innerHTML = '<i class="fab fa-github"></i><span>Backend</span>';
            buttonsContainer.appendChild(btnBackend);
        }
        
        if (project.repoLink2 && project.repoLink2.trim() !== '') {
            const btnFrontend = document.createElement('a');
            btnFrontend.href = project.repoLink2;
            btnFrontend.target = '_blank';
            btnFrontend.className = 'btn-repository btn-repo-frontend';
            btnFrontend.innerHTML = '<i class="fab fa-github"></i><span>Frontend</span>';
            buttonsContainer.appendChild(btnFrontend);
        }
    } else {
        if (project.repoLink) {
            const btnRepo = document.createElement('a');
            btnRepo.href = project.repoLink;
            btnRepo.target = '_blank';
            btnRepo.className = 'btn-repository btn-repo-general';
            btnRepo.innerHTML = '<i class="fab fa-github"></i><span>Repositorio</span>';
            buttonsContainer.appendChild(btnRepo);
        }
    }
    
    if (project.mockupLink && project.mockupLink.trim() !== '') {
        const btnMockup = document.createElement('a');
        btnMockup.href = project.mockupLink;
        btnMockup.target = '_blank';
        btnMockup.className = 'btn-repository btn-mockup';
        btnMockup.innerHTML = '<i class="fas fa-image"></i><span>Ver Mockup</span>';
        buttonsContainer.appendChild(btnMockup);
    }
    
    if (project.deployLink && project.deployLink.trim() !== '') {
        const btnDeploy = document.createElement('a');
        btnDeploy.href = project.deployLink;
        btnDeploy.target = '_blank';
        btnDeploy.className = 'btn-repository btn-deploy';
        btnDeploy.innerHTML = '<i class="fas fa-rocket"></i><span>Ver Despliegue</span>';
        buttonsContainer.appendChild(btnDeploy);
    }

    // Contar imágenes disponibles
    totalImages = project.images.filter(img => img).length;
    
    // Actualizar imágenes
    modalImages.forEach((img, index) => {
        if (project.images[index]) {
            img.src = `img/projects/${project.images[index]}`;
            img.alt = `${project.title} - Captura ${index + 1}`;
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
    
    // Crear indicadores
    createIndicators(totalImages);
    
    // Resetear el carrusel
    currentImageIndex = 0;
    modalImages.forEach(img => img.classList.remove('active'));
    if (modalImages[0]) modalImages[0].classList.add('active');
    
    // Iniciar carrusel solo si hay más de una imagen
    if (totalImages > 1) {
        startCarousel(modalImages);
    } else {
        stopCarousel();
    }
    
    // Mostrar modal
    projectModal.style.display = 'flex';
    setTimeout(() => {
        projectModal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
}

// Función para configurar event listeners del modal
function setupModalListeners() {
    const projectModal = document.querySelector('.project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    // Cerrar modal
    const closeModal = () => {
        projectModal.classList.remove('active');
        setTimeout(() => {
            projectModal.style.display = 'none';
        }, 400);
        document.body.style.overflow = 'auto';
        stopCarousel();
    };
    
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    // Controles del carrusel
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modalImages = document.querySelectorAll('.modal-images img');
        prevImage(modalImages);
        stopCarousel();
        startCarousel(modalImages);
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modalImages = document.querySelectorAll('.modal-images img');
        nextImage(modalImages);
        stopCarousel();
        startCarousel(modalImages);
    });
    
    // Teclado: flechas y escape
    document.addEventListener('keydown', (e) => {
        if (!projectModal.classList.contains('active')) return;
        
        const modalImages = document.querySelectorAll('.modal-images img');
        
        if (e.key === 'ArrowLeft') {
            prevImage(modalImages);
            stopCarousel();
            startCarousel(modalImages);
        } else if (e.key === 'ArrowRight') {
            nextImage(modalImages);
            stopCarousel();
            startCarousel(modalImages);
        } else if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Exportar para usar en script.js
export { initProjects };
