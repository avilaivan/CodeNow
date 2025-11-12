// contacto.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("mensaje");

  // --- Contador de caracteres ---
  const contador = document.createElement("p");
  contador.style.fontSize = "1em";
  contador.style.color = "#555";
  mensaje.insertAdjacentElement("afterend", contador);

  const maxCaracteres = 1000;
  contador.textContent = `0 / ${maxCaracteres} caracteres`;

  mensaje.addEventListener("input", () => {
    const longitud = mensaje.value.length;
    contador.textContent = `${longitud} / ${maxCaracteres} caracteres`;

    if (longitud > maxCaracteres) {
      mensaje.value = mensaje.value.substring(0, maxCaracteres);
      contador.textContent = `${maxCaracteres} / ${maxCaracteres} caracteres`;
      contador.style.color = "red";
    } else {
      contador.style.color = "#555";
    }
  });

  // --- Validación de formulario ---
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío por defecto

    // Validar nombre y apellido
    if (nombre.value.trim() === "") {
      alert("Por favor, ingrese el nombre.");
      nombre.focus();
      return;
    }
    if (apellido.value.trim() === "") {
      alert("Por favor, ingrese el apellido.");
      apellido.focus();
      return;
    }

    // Validar email con regex
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
      alert("Por favor, ingrese un correo electrónico válido.");
      email.focus();
      return;
    }

    // Validar teléfono (si el usuario ingresó algo)
    const tel = telefono.value.trim();
    if (tel !== "") {
      const regexTel = /^\d{4}-\d{4}$/; // formato con guion
      const regexSoloDigitos = /^\d{8}$/; // solo 8 dígitos
      if (!regexTel.test(tel) && !regexSoloDigitos.test(tel)) {
        alert("El teléfono debe tener 8 dígitos o formato 0000-0000.");
        telefono.focus();
        return;
      }
    }

    // Validar mensaje
    if (mensaje.value.trim() === "") {
      alert("El mensaje no puede estar vacío.");
      mensaje.focus();
      return;
    }

    // --- Si todo está correcto ---
    mostrarPopup();
  });

  // --- Popup personalizado ---
function mostrarPopup() {
  // Fondo semitransparente
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";

  // Contenedor del popup
  const popup = document.createElement("div");
  popup.style.backgroundColor = "#121212";
  popup.style.padding = "35px 45px";
  popup.style.borderRadius = "12px";
  popup.style.textAlign = "center";
  popup.style.fontFamily = "Roboto, sans-serif";
  popup.style.color = "#f5f5f5";
  popup.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";
  popup.style.maxWidth = "320px";
  popup.style.width = "80%";

  // Título
  const titulo = document.createElement("h3");
  titulo.textContent = "Consulta enviada";
  titulo.style.color = "#00c896";
  titulo.style.marginBottom = "12px";
  titulo.style.fontSize = "1.4rem";

  // Texto
  const texto = document.createElement("p");
  texto.textContent = "Gracias por comunicarte con CodeNow.";
  texto.style.color = "#ccc";
  texto.style.marginBottom = "25px";
  texto.style.fontSize = "1rem";

  // Botón
  const boton = document.createElement("button");
  boton.textContent = "Aceptar";
  boton.style.backgroundColor = "#00c896";
  boton.style.color = "#121212";
  boton.style.border = "none";
  boton.style.padding = "10px 25px";
  boton.style.borderRadius = "6px";
  boton.style.cursor = "pointer";
  boton.style.fontSize = "1rem";
  boton.style.fontWeight = "500";
  boton.style.transition = "background-color 0.3s, transform 0.2s";

  boton.addEventListener("mouseenter", () => {
    boton.style.backgroundColor = "#00b084";
    boton.style.transform = "scale(1.05)";
  });
  boton.addEventListener("mouseleave", () => {
    boton.style.backgroundColor = "#00c896";
    boton.style.transform = "scale(1)";
  });

  boton.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  // Insertar elementos en DOM
  popup.appendChild(titulo);
  popup.appendChild(texto);
  popup.appendChild(boton);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}
});
