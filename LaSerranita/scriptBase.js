/* ============================================
   ARCHIVO: scriptBase.js
   DESCRIPCIÓN: Funciones JavaScript compartidas
   CONTIENE: Preloader, header, navegación, scroll, notificaciones
   ============================================ */

// ========== PRELOADER / CARGADOR ==========
// Espera a que toda la página se cargue completamente
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader'); // Busca el elemento preloader
    if (preloader) {
        setTimeout(() => preloader.classList.add('hidden'), 600); // Oculta después de 0.6 segundos
    }
});

// ========== HEADER CON EFECTO AL SCROLL ==========
// Variable para el header y botón de volver arriba
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');

// Evento de scroll para efectos en el header
window.addEventListener('scroll', () => {
    const y = window.scrollY; // Posición vertical del scroll
    
    // Añade sombra al header cuando se hace scroll
    if (header) header.classList.toggle('scrolled', y > 50);
    
    // Muestra/oculta botón de volver arriba después de 500px
    if (backToTop) backToTop.classList.toggle('visible', y > 500);
});

// ========== NAVEGACIÓN MÓVIL ==========
// Botón hamburguesa y menú de navegación
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
    // Abre/cierra el menú al hacer clic en el botón
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active'); // Animación de cruz
        nav.classList.toggle('active');       // Muestra/oculta menú
    });
    
    // Cierra el menú al hacer clic en cualquier enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active'); // Restaura botón
            nav.classList.remove('active');       // Cierra menú
        });
    });
}

// ========== ENLACE ACTIVO ==========
// Determina la página actual y resalta el enlace correspondiente
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    // Compara el href del enlace con la página actual
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active'); // Marca como activo
    }
});

// ========== BOTÓN VOLVER ARRIBA ==========
// Scroll suave al inicio de la página
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== SCROLL SUAVE PARA ENLACES ==========
// Para enlaces que apuntan a secciones (#seccion)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Previene el salto predeterminado
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const pos = target.getBoundingClientRect().top + window.pageYOffset - 80; // Offset para header
            window.scrollTo({ top: pos, behavior: 'smooth' }); // Scroll suave
        }
    });
});

// ========== ANIMACIONES AL SCROLL ==========
// Observer para detectar cuando los elementos entran en el viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated'); // Añade clase de animación
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }); // Se activa al 10% visible

// Observa todos los elementos con clase fade-up
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ========== SISTEMA DE NOTIFICACIONES ==========
// Muestra una notificación temporal en pantalla
function showNotification(msg, type) {
    // Elimina notificación anterior si existe
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Crea el elemento de notificación
    const n = document.createElement('div');
    n.className = 'notification';
    n.innerHTML = '<span>' + msg + '</span><button onclick="this.parentElement.remove()">&times;</button>';
    
    // Estilos inline de la notificación
    Object.assign(n.style, {
        position: 'fixed',       // Se fija en la pantalla
        top: '100px', right: '24px', // Posición superior derecha
        padding: '20px 28px',
        background: type === 'success' ? '#25d366' : '#e74c3c', // Verde o rojo
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        zIndex: 9999,
        display: 'flex', alignItems: 'center', gap: '16px',
        maxWidth: '400px',
        animation: 'slideIn 0.4s ease',
        fontFamily: 'Inter, sans-serif'
    });
    
    // Estilo del botón de cerrar
    n.querySelector('button').style.cssText = 'background:none;border:none;color:white;font-size:1.5rem;cursor:pointer;line-height:1;';
    
    document.body.appendChild(n); // Añade al DOM
    
    // Se elimina automáticamente después de 5 segundos
    setTimeout(() => n.remove(), 5000);
}

// Añade la animación de entrada al head
const style = document.createElement('style');
style.textContent = '@keyframes slideIn { from { opacity:0; transform:translateX(100px); } to { opacity:1; transform:translateX(0); } }';
document.head.appendChild(style);
