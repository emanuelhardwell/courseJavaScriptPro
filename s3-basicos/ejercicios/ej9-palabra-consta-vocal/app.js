/* 
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

let palabra = prompt(
  "Ingrese una palabra para averiguar # vocales #constantes #longitud:"
);

console.log(`Cadena: ${palabra}`);

let longitud = palabra.length;
console.log(` Longitud de cadena: ${longitud}`);

let vocales = palabra.match(/[aeiou]/gi).length;
console.log(`Núm vocales: ${vocales}`);

let consonante = palabra.match(/[bdfghjklmnñpqrstvxyz]/gi).length;
console.log(`Núm consonantes: ${consonante}`);
