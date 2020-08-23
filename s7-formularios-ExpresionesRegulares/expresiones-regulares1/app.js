/* 
Expresiones regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    Página para evaluar expresiones regulares: https://regex101.com/
    sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minúsculas
        g: global. Busca de forma global, es decir, no se para después de la primera coincidencia
*/
const parrafo = document.getElementById("parrafo").textContent;
const regex = /lorem/g;
const regexPro = /lorem/gi;

console.log(regex.test(parrafo));
console.log(regexPro.test(parrafo));
