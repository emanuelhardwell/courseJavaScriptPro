/* 
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

let buscar = prompt("Buscar color (palabra): ");

let palabras = ["azul", "amarillo", "rojo", "verde", "rosa"];

if (palabras.indexOf(buscar) !== -1) {
  console.log("El color se encuentra en el array");
  console.log(`posicion: ${palabras.indexOf(buscar) } `);
} else {
  console.log("El color  NO se encuentra en el array");
}
