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
    
    // Agregar event listener para scroll en móviles
    if (isMobile()) {
        window.addEventListener('scroll', handleMobileScroll);
        // Ejecutar una vez al cargar
        setTimeout(handleMobileScroll, 100);
    }
}

// Función para obtener el nombre del tipo
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
        const btn = card.querySelector('.btn-view-more');
        const projectId = btn.getAttribute('data-project');
        
        // En móviles y desktop, al hacer click redirigir a la página de detalles
        card.addEventListener('click', (e) => {
            // Prevenir la navegación si se hace click en un enlace específico
            if (!e.target.closest('a')) {
                window.location.href = `project-detail.html?id=${projectId}`;
            }
        });
        
        // El botón también redirige explícitamente
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = `project-detail.html?id=${projectId}`;
        });
    });
}

// Exportar para usar en script.js
export { initProjects };
