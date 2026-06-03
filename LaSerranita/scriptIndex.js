/* ============================================
   ARCHIVO: scriptIndex.js
   DESCRIPCIÓN: Funciones JavaScript de la página de inicio
   CONTIENE: Slider automático, contadores animados
   ============================================ */

// ========== SLIDER AUTOMÁTICO DEL HERO ==========
// Obtiene todos los slides y puntos de navegación del hero
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;     // Índice del slide actual
let slideInterval;        // Variable para el intervalo del slider

// Función para cambiar a un slide específico
function goToSlide(index) {
    slides[currentSlide].classList.remove('active');  // Oculta el slide actual
    dots[currentSlide].classList.remove('active');    // Desactiva el punto actual
    currentSlide = index;                             // Actualiza el índice
    slides[currentSlide].classList.add('active');     // Muestra el nuevo slide
    dots[currentSlide].classList.add('active');       // Activa el punto nuevo
}

// Función para avanzar al siguiente slide (ciclo infinito)
function nextSlide() {
    const next = (currentSlide + 1) % slides.length; // Calcula siguiente (vuelve a 0 al final)
    goToSlide(next);                                  // Cambia al siguiente
}

// Evento click en cada punto de navegación
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);  // Detiene el avance automático
        goToSlide(i);                  // Cambia al slide seleccionado
        startSlider();                 // Reinicia el avance automático
    });
});

// Función para iniciar el slider automático (cada 6 segundos)
function startSlider() {
    slideInterval = setInterval(nextSlide, 6000);
}

// Inicia el slider al cargar la página
startSlider();

// ========== CONTADORES ANIMADOS (ESTADÍSTICAS) ==========
// Observador para detectar cuando las estadísticas entran en el viewport
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {  // Solo anima si es visible
            // Busca todos los números dentro del contenedor
            entry.target.querySelectorAll('.stat-num').forEach(num => {
                const target = +num.getAttribute('data-target'); // Obtiene el número final
                const increment = target / 60;                  // Velocidad de incremento
                let current = 0;                                 // Valor inicial
                
                // Función para actualizar el número progresivamente
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        num.textContent = Math.floor(current);  // Muestra número entero
                        requestAnimationFrame(updateCounter);    // Sigue animando
                    } else {
                        num.textContent = target;               // Muestra el valor final
                    }
                };
                updateCounter(); // Inicia la animación
            });
            statsObserver.unobserve(entry.target); // Deja de observar después de animar
        }
    });
}, { threshold: 0.5 }); // Se activa al 50% visible

// Busca y observa el contenedor de estadísticas
const statsSection = document.querySelector('.about-stats');
if (statsSection) statsObserver.observe(statsSection);
