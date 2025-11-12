const popup = document.getElementById("popup-overlay");
const botonCerrar = document.getElementById("popup-cerrar");
const cursosDelCalendario = document.querySelectorAll(".dia-calendario.evento");
const popupTitulo = document.getElementById("popup-titulo");
const popupBotonAccion = document.getElementById("popup-boton-accion");
const popupResumen = document.getElementById("popup-resumen");
function mostrarPopup() {
  popup.classList.add("visible");
}
function ocultarPopup() {
  popup.classList.remove("visible");
}
function manejarClickDeCurso(evento) {
  evento.preventDefault(); 
  const cursoClickeado = evento.currentTarget;
  const nombreCurso = cursoClickeado.querySelector(".evento-nombre").innerText;
  const linkCurso = cursoClickeado.href;
  const resumenCurso = cursoClickeado.dataset.resumen;
  popupTitulo.innerText = nombreCurso; 
  popupBotonAccion.href = linkCurso;
  popupResumen.innerText = resumenCurso;
  mostrarPopup();
}
botonCerrar.addEventListener("click", ocultarPopup);
cursosDelCalendario.forEach(function(curso) 
{
  curso.addEventListener("click", manejarClickDeCurso);
}
);