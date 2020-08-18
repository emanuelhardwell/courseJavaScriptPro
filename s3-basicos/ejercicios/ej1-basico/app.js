/* 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
  */

let nombre = prompt("Ingrese su nombre:");
let edad = prompt("Ingrese su edad:");
let edadActual = edad *1;
let edadSiguiente = edadActual + 1;

let resultado = ` Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${
  edadSiguiente
} años `;
console.log(resultado);
