/* 
document.getElementById('id') - Acceder a un elemento a través de su id
document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS
document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

/* imprimir la Etiqueta Completa*/
const titulo = document.getElementById("titulo");
console.log(titulo);

/* Imprimir el contenido de una etiqueta */
const subtitulo = document.getElementById("subtitulo");
console.log(subtitulo.textContent);

/* Editar el contenido de una etiqueta */
subtitulo.textContent = "Subtitulo MODIFICADO";

/* Ingresar a un elemeto del NODELIST */
const parrafo1 = document.querySelectorAll("#parrafo");
console.log(parrafo1);
parrafo1[0].style.color = "red";

/* Convertir el NODELIST A ARRAY usando  OPERADOR SPREAD  */
const parrafo2 = [...document.querySelectorAll("#parrafo")];
console.log(parrafo2);

/* Convertir el NODELIST A ARRAY  usando   ARRAY.FROM*/
const parrafo3 = document.querySelectorAll("#parrafo");
console.log(Array.from(parrafo3));

/* Uso de ===getElementById== y ==querySelectors== */
const externo = document.getElementById("parrafoexterno").querySelector("span");
externo.style.color = "blue";
