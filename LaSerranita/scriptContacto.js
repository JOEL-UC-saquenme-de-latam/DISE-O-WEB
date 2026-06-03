document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    showNotification('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
    e.target.reset();
});
