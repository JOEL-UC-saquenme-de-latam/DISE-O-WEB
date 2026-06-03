/* ============================================
   ARCHIVO: scriptProductos.js
   DESCRIPCIÓN: Funciones JavaScript de la página de productos
   CONTIENE: Data de productos, filtrado por categoría, renderizado dinámico
   ============================================ */

// ========== DATA DE PRODUCTOS ==========
// Arreglo con todos los productos de La Serranita
const products = [
    {
        id: 1,                          // Identificador único
        name: 'Yogurt Natural',         // Nombre del producto
        category: 'lacteos',            // Categoría (lacteos o helados)
        image: 'assets/yogurt.jpg',     // Ruta de la imagen
        description: 'Yogurt natural elaborado con leche fresca y cultivos vivos. Rico en calcio y probióticos.', // Descripción
        badge: 'Popular'                // Etiqueta destacada
    },
    {
        id: 2,
        name: 'Queso Fresco',
        category: 'lacteos',
        image: 'assets/cheese.jpg',
        description: 'Queso fresco artesanal, suave y cremoso. Perfecto para ensaladas y platos tradicionales.',
        badge: 'Artesanal'
    },
    {
        id: 3,
        name: 'Helado de Vainilla',
        category: 'helados',
        image: 'assets/icecream1.jpg',
        description: 'Helado artesanal de vainilla natural con leche fresca de la región.',
        badge: 'Favorito'
    },
    {
        id: 4,
        name: 'Leche Fresca',
        category: 'lacteos',
        image: 'assets/milk.jpg',
        description: 'Leche fresca entera, pasteurizada y empacada bajo estrictos controles de calidad.',
        badge: null
    },
    {
        id: 5,
        name: 'Helado de Fresa',
        category: 'helados',
        image: 'assets/icecream2.jpg',
        description: 'Helado artesanal elaborado con fresas frescas de la región.',
        badge: 'Nuevo'
    },
    {
        id: 6,
        name: 'Mantequilla',
        category: 'lacteos',
        image: 'assets/butter.jpg',
        description: 'Mantequilla cremosa elaborada con nata de leche fresca. Sabor auténtico.',
        badge: null
    },
    {
        id: 7,
        name: 'Helado de Chocolate',
        category: 'helados',
        image: 'assets/icecream3.jpg',
        description: 'Intenso helado de chocolate con cacao seleccionado.',
        badge: null
    },
    {
        id: 8,
        name: 'Yogurt de Frutas',
        category: 'lacteos',
        image: 'assets/yogurt2.jpg',
        description: 'Yogurt con trozos de frutas naturales. Sabor refrescante y nutritivo.',
        badge: null
    }
];

// ========== ELEMENTOS DEL DOM ==========
const grid = document.getElementById('productsGrid');       // Contenedor del grid de productos
const filterBtns = document.querySelectorAll('.filter-btn'); // Botones de filtro

// ========== FUNCIÓN PARA RENDERIZAR PRODUCTOS ==========
// Crea las tarjetas de productos y las inserta en el grid
function renderProducts(filter) {
    // Filtra los productos según la categoría seleccionada
    const filtered = filter === 'all' 
        ? products  // Si es "all", muestra todos
        : products.filter(p => p.category === filter); // Filtra por categoría
    
    // Genera el HTML de cada producto
    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-category">
                    <i class="fas ${product.category === 'lacteos' ? 'fa-cheese' : 'fa-ice-cream'}"></i>
                    ${product.category === 'lacteos' ? 'Lácteos' : 'Helados'}
                </div>
            </div>
        </div>
    `).join(''); // Une todos los elementos en un solo string HTML
    
    // Añade animación de entrada a las tarjetas
    grid.querySelectorAll('.product-card').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.1}s`; // Retraso progresivo
        card.classList.add('fade-in');              // Añade clase de animación
    });
}

// ========== EVENTOS DE FILTRADO ==========
// Añade evento click a cada botón de filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remueve la clase active de todos los botones
        filterBtns.forEach(b => b.classList.remove('active'));
        // Añade la clase active al botón clickeado
        btn.classList.add('active');
        // Renderiza los productos con el filtro seleccionado
        renderProducts(btn.dataset.filter);
    });
});

// ========== INICIALIZACIÓN ==========
// Renderiza todos los productos al cargar la página
renderProducts('all');
