/* OBJETO EVENTO */

const input = document.getElementById("input");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const botonEnviar = document.getElementById("boton-enviar");

boton1.addEventListener("click", (evento) => {
  console.log(evento); /* muestra la información completa sobre el evento */
});

boton2.addEventListener("click", (evento) => {
  console.log(evento.target); /* El TARJET es muy importante */
});

boton3.addEventListener("click", (evento) => {
  console.log(evento.target.textContent); /* se puede ir bajando de niveles*/
});

/*se puede ir bajando de niveles aun mas*/
boton4.addEventListener("click", (evento) => {
  console.log(evento.explicitOriginalTarget.attributes[0].nodeType);
});

/* Se le quita el valor por defecto (RECARGAR LA PAGINA) cuando se presiona el boton SUBMIT para enviar el formulario */
botonEnviar.addEventListener("submit", (eventito) => {
  eventito.preventDefault();
});
