# La Serranita - Lácteos y Helados Artesanales

Sitio web institucional para **La Serranita**, empresa peruana de productos lácteos y helados artesanales fundada en 1984 en Huancayo, Junín.

**RUC:** 20568655355  
**Empresa:** Productos Lácteos La Serranita E.I.R.L.  
**Ubicación:** Jr. Ayacucho 394, Huancayo, Junín, Perú

---

## Páginas del Sitio

| Página | Archivo | Descripción |
|--------|---------|-------------|
| Inicio | `index.html` | Hero con slider automático, resumen de la empresa, misión/visión, productos destacados |
| Nosotros | `nosotros.html` | Historia completa, misión, visión, valores, compromiso social |
| Historia | `historia.html` | Línea de tiempo interactiva con 7 hitos (1984-2024) |
| Productos | `productos.html` | Catálogo con filtros por categoría (Lácteos / Helados) |
| Proceso | `proceso.html` | 9 pasos del proceso productivo artesanal |
| Sucursales | `sucursales.html` | 5 sucursales con información de contacto |
| Contacto | `contacto.html` | Formulario de contacto + datos de la empresa |

---

## Estructura del Proyecto

```
LaSerranita/
├── index.html              # Página principal
├── nosotros.html           # Quiénes somos
├── historia.html           # Línea de tiempo
├── productos.html          # Catálogo de productos
├── proceso.html            # Proceso productivo
├── sucursales.html         # 5 sucursales
├── contacto.html           # Formulario de contacto
│
├── base.css                # Estilos compartidos (variables, reset, header, footer, animaciones)
├── stylesIndex.css         # Estilos del inicio
├── stylesNosotros.css      # Estilos de nosotros
├── stylesHistoria.css      # Estilos de historia
├── stylesProductos.css     # Estilos de productos
├── stylesProceso.css       # Estilos de proceso
├── stylesSucursales.css    # Estilos de sucursales
├── stylesContacto.css      # Estilos de contacto
│
├── scriptBase.js           # JS compartido (preloader, header, navegación, scroll, notificaciones)
├── scriptIndex.js          # JS del inicio (slider automático, contadores animados)
├── scriptProductos.js      # JS de productos (filtrado por categoría, renderizado dinámico)
├── scriptNosotros.js       # JS de nosotros (animaciones al scroll)
├── scriptContacto.js       # JS del formulario de contacto
│
└── assets/                 # Imágenes (20 archivos JPG)
    ├── logo.jpg            # Logo circular de la empresa
    ├── hero1.jpg           # Banner principal 1
    ├── hero2.jpg           # Banner principal 2
    ├── hero3.jpg           # Banner principal 3
    ├── about.jpg           # Sección nosotros
    ├── milk.jpg            # Leche
    ├── cheese.jpg          # Queso
    ├── yogurt.jpg          # Yogurt
    ├── yogurt2.jpg         # Yogurt de frutas
    ├── butter.jpg          # Mantequilla
    ├── icecream1.jpg       # Helado 1
    ├── icecream2.jpg       # Helado 2
    ├── icecream3.jpg       # Helado 3
    ├── gallery1-6.jpg      # Galería de imágenes
    ├── production.jpg      # Proceso productivo
    └── community.jpg       # Compromiso social
```

---

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsivo, variables CSS, animaciones
- **JavaScript vanilla** - Interactividad sin frameworks
- **Font Awesome 6.5** - Iconos
- **Google Fonts** - Playfair Display + Inter

---

## Características

- Diseño 100% responsivo (mobile, tablet, desktop)
- Slider automático con transiciones suaves
- Sistema de filtrado por categorías de productos
- Línea de tiempo interactiva
- Preloader animado de carga
- Botón flotante de WhatsApp
- Botón "volver arriba"
- Header con efecto de sombra al hacer scroll
- Navegación responsive con menú hamburguesa
- Animaciones al scroll con IntersectionObserver
- Formulario de contacto con validación
- Código comentado íntegramente en español
- Imágenes de alta calidad de Unsplash (stock)

---

## Cómo Ejecutar

**Opción 1 - Live Server (recomendado):**
1. Abrir la carpeta `LaSerranita/` en VS Code
2. Instalar la extensión **Live Server**
3. Clic derecho sobre `index.html` → "Open with Live Server"

**Opción 2 - Navegador directo:**
1. Abrir cualquier archivo `.html` en tu navegador

---

## Información de Contacto

| Canal | Datos |
|-------|-------|
| Dirección | Jr. Ayacucho 394, Huancayo, Junín, Perú |
| Teléfono | +51 964 970 065 |
| Facebook | [La Serranita Hyo](https://www.facebook.com/laserranitahyo/) |
| Instagram | [@laserranitaperu](https://www.instagram.com/laserranitaperu/) |
| TikTok | [@laserranitaperu](https://www.tiktok.com/@laserranitaperu) |
| WhatsApp | [Enviar mensaje](https://wa.me/51964970065) |

---

## Horario de Atención

- **Lunes a Sábado:** 7:00 AM - 8:00 PM
- **Domingos:** 10:00 AM - 6:00 PM

---

*Desarrollado como proyecto de Diseño Web*
