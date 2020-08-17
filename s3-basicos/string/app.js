/*  */

let palabra = "En la escuela";
console.log(palabra + " ITO");
/*PROPIEDADES
length -> Devuelve la longitud de la cadena
*/

console.log(palabra.length);
/*Métodos
Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.
toUpperCase() -> Devuleve la cadena a mayúsculas
*/

console.log(palabra.toUpperCase());

console.log(palabra.toLowerCase());

console.log(palabra.indexOf("la"));

console.log(palabra.replace("En", "Hardwell"));

console.log(palabra.repeat(4));

console.log(palabra.substring(3));

console.log(palabra.substring(3, 7));

/* eliminar espacios al INICIO y al FINAL */
let nombreCompleto = "     emnauel noe vasquez martinez           ";
console.log(nombreCompleto.trim());
