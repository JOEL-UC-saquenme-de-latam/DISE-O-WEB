// ============================================================
//  scriptTecnologica.js
//  1. Menú hamburger
//  2. Validación del formulario de contacto
// ============================================================


// ── 1. MENÚ HAMBURGER ────────────────────────────────────────

const botonMenu = document.getElementById("boton-menu");
const nav = document.querySelector("header nav");

botonMenu.addEventListener("click", function () {
  nav.classList.toggle("abierto");
});


// ── 2. VALIDACIÓN DEL FORMULARIO ─────────────────────────────

const formulario = document.querySelector("aside#contacto form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre   = document.getElementById("nombre").value.trim();
  const correo   = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje  = document.getElementById("mensaje").value.trim();

  limpiarErrores();

  let formularioValido = true;

  // Validación: nombre no vacío
  if (nombre === "") {
    mostrarError("nombre", "El nombre es obligatorio.");
    formularioValido = false;
  }

  // Validación: correo no vacío y con formato válido
  if (correo === "") {
    mostrarError("correo", "El correo es obligatorio.");
    formularioValido = false;
  } else if (!formatoCorreoValido(correo)) {
    mostrarError("correo", "Ingresa un correo válido. Ej: juan@correo.com");
    formularioValido = false;
  }

  // Validación: teléfono opcional, solo números y espacios
  if (telefono !== "" && !formatoTelefonoValido(telefono)) {
    mostrarError("telefono", "Solo se permiten números, espacios y el signo +.");
    formularioValido = false;
  }

  // Validación: mensaje no vacío
  if (mensaje === "") {
    mostrarError("mensaje", "El mensaje no puede estar vacío.");
    formularioValido = false;
  }

  if (formularioValido) {
    mostrarConfirmacion();
    formulario.reset();
  }
});


// ── FUNCIONES AUXILIARES ──────────────────────────────────────

function mostrarError(idCampo, mensajeError) {
  const campo = document.getElementById(idCampo);
  const error = document.createElement("p");
  error.classList.add("error-campo");
  error.textContent = mensajeError;
  campo.insertAdjacentElement("afterend", error);
  campo.classList.add("campo-invalido");
}

function limpiarErrores() {
  document.querySelectorAll(".error-campo").forEach(function (error) {
    error.remove();
  });
  document.querySelectorAll(".campo-invalido").forEach(function (campo) {
    campo.classList.remove("campo-invalido");
  });
}

function formatoCorreoValido(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function formatoTelefonoValido(telefono) {
  const regex = /^[0-9\s+]+$/;
  return regex.test(telefono);
}

function mostrarConfirmacion() {
  const existente = document.getElementById("mensaje-confirmacion");
  if (existente) {
    existente.remove();
  }

  const confirmacion = document.createElement("p");
  confirmacion.id = "mensaje-confirmacion";
  confirmacion.textContent = "✔ Tu mensaje fue enviado correctamente. Te responderemos pronto.";
  formulario.insertAdjacentElement("afterend", confirmacion);

  setTimeout(function () {
    confirmacion.remove();
  }, 5000);
}
