/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const boton = document.getElementById("boton");
boton.addEventListener("click", () => console.log("Has presionado el botón"));

boton.addEventListener("dblclick", () =>
  console.log("Has presionado el botón 2 VECES")
);

/* *********** */
const box1 = document.getElementById("box1");
box1.addEventListener("mouseenter", () => {
  box1.classList.replace("red", "green");
});

box1.addEventListener("mouseleave", () => {
  box1.classList.replace("green", "red");
});

/* *********** */
box1.addEventListener("mousedown", () => {
  console.log("A pulsado el boton izquierdo del ratón");
});

box1.addEventListener("mousedown", () => {
  console.log("A soltado el boton izquierdo del ratón");
});

/* *********** */
box2.addEventListener("mousemove", () => {
  console.log("A movido el ratón");
});

/* ***********  EVENTOS DEL TECLADO*/

input.addEventListener("keydown", () => console.log("A pulsado una tecla"));
input.addEventListener("keyup", () => console.log("A soltado una tecla"));
input.addEventListener("keypress", () =>
  console.log("A pulsado una tecla y no la ha dejado")
);
