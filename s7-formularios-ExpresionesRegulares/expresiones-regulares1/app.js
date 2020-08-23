/* 
link para construir EXPRESIONES REGULARES
        https://regex101.com/
*/

/* G = buscar la palabra completa  
   I= la palabra buscada puede ser MAYUSCULA O MINUSCULA O MIXTA
*/
const parrafo = document.getElementById("parrafo").textContent;
const regex = /lorem/g;
const regexPro = /lorem/gi;

console.log(regex.test(parrafo));
console.log(regexPro.test(parrafo));
