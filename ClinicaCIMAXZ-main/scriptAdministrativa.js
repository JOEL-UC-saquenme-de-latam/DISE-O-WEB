// ============================================================
//  scriptAdministrativa.js
//  1. Menú hamburger
//  2. Validación del formulario de contacto
// ============================================================


// ── 1. MENÚ HAMBURGER ────────────────────────────────────────

// Buscamos el botón ☰ y el nav del header por su id/selector
const botonMenu = document.getElementById("boton-menu");
const nav = document.querySelector("header nav");

// Cuando el usuario hace clic en el botón ☰...
botonMenu.addEventListener("click", function () {
  // ...alternamos la clase "abierto" en el nav.
  // Si no la tiene → se la agrega (menú visible)
  // Si ya la tiene → se la quita (menú oculto)
  nav.classList.toggle("abierto");
});


// ── 2. VALIDACIÓN DEL FORMULARIO ─────────────────────────────

// Buscamos el formulario por su elemento en el HTML
const formulario = document.querySelector("aside#contacto form");

// Escuchamos el evento "submit" (cuando el usuario hace clic en Enviar)
formulario.addEventListener("submit", function (evento) {

  // Evitamos que el formulario se envíe/recargue la página por defecto
  // hasta que nosotros lo validemos
  evento.preventDefault();

  // Obtenemos el valor de cada campo, quitando espacios al inicio y al final
  const nombre   = document.getElementById("nombre").value.trim();
  const correo   = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje  = document.getElementById("mensaje").value.trim();

  // Limpiamos errores anteriores antes de validar de nuevo
  limpiarErrores();

  // Variable para saber si todo está bien
  let formularioValido = true;

  // ── Validación: nombre no vacío ──
  if (nombre === "") {
    mostrarError("nombre", "El nombre es obligatorio.");
    formularioValido = false;
  }

  // ── Validación: correo no vacío y con formato válido ──
  if (correo === "") {
    mostrarError("correo", "El correo es obligatorio.");
    formularioValido = false;
  } else if (!formatoCorreoValido(correo)) {
    mostrarError("correo", "Ingresa un correo válido. Ej: juan@correo.com");
    formularioValido = false;
  }

  // ── Validación: teléfono (opcional, pero si se escribe debe tener solo números) ──
  if (telefono !== "" && !formatoTelefonoValido(telefono)) {
    mostrarError("telefono", "Solo se permiten números, espacios y el signo +.");
    formularioValido = false;
  }

  // ── Validación: mensaje no vacío ──
  if (mensaje === "") {
    mostrarError("mensaje", "El mensaje no puede estar vacío.");
    formularioValido = false;
  }

  // ── Si todo está correcto ──
  if (formularioValido) {
    mostrarConfirmacion();
    formulario.reset(); // Limpia todos los campos del formulario
  }
});


// ── FUNCIONES AUXILIARES ──────────────────────────────────────

// Muestra un mensaje de error debajo del campo indicado
function mostrarError(idCampo, mensajeError) {
  const campo = document.getElementById(idCampo);

  // Creamos un párrafo pequeño con el mensaje de error
  const error = document.createElement("p");
  error.classList.add("error-campo");
  error.textContent = mensajeError;

  // Lo insertamos justo después del input/textarea
  campo.insertAdjacentElement("afterend", error);

  // Le ponemos borde rojo al campo para que sea más visible
  campo.classList.add("campo-invalido");
}

// Elimina todos los errores mostrados anteriormente
function limpiarErrores() {
  // Borramos todos los párrafos de error que existan
  document.querySelectorAll(".error-campo").forEach(function (error) {
    error.remove();
  });

  // Quitamos el borde rojo de todos los campos
  document.querySelectorAll(".campo-invalido").forEach(function (campo) {
    campo.classList.remove("campo-invalido");
  });
}

// Verifica que el correo tenga un formato básico válido (algo@algo.algo)
function formatoCorreoValido(correo) {
  // Esta expresión regular comprueba que haya texto, @, texto y un punto con dominio
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

// Verifica que el teléfono solo tenga números, espacios y el signo +
function formatoTelefonoValido(telefono) {
  const regex = /^[0-9\s+]+$/;
  return regex.test(telefono);
}

// Muestra el mensaje de confirmación de envío exitoso
function mostrarConfirmacion() {
  // Buscamos si ya existe un mensaje de confirmación para no duplicarlo
  const existente = document.getElementById("mensaje-confirmacion");
  if (existente) {
    existente.remove();
  }

  // Creamos el párrafo de confirmación
  const confirmacion = document.createElement("p");
  confirmacion.id = "mensaje-confirmacion";
  confirmacion.textContent = "✔ Tu mensaje fue enviado correctamente. Te responderemos pronto.";

  // Lo insertamos al final del formulario
  formulario.insertAdjacentElement("afterend", confirmacion);

  // Lo ocultamos automáticamente después de 5 segundos
  setTimeout(function () {
    confirmacion.remove();
  }, 5000);
}
