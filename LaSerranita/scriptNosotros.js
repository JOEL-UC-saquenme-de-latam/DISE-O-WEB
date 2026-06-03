/* ============================================
   ARCHIVO: scriptNosotros.js
   DESCRIPCIÓN: Funciones JavaScript de la página "Nosotros"
   CONTIENE: Animaciones de entrada para secciones
   ============================================ */

// ========== ANIMACIONES AL SCROLL ==========
// Observer para detectar cuando las tarjetas entran en el viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {  // Solo anima si es visible
            entry.target.classList.add('animated'); // Añade clase de animación
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); // Se activa al 10% visible

// Observa todos los elementos con clase fade-up
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
