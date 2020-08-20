/* DOM - Crear e insertar elementos

Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML
Añadir un elemento al DOM: parent.appendChild(element)
Fragmentos de código: document.createDocumentFragment()
 */

const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const box = document.getElementById("box");
const box2 = document.getElementById("box2");
const lista = document.getElementById("lista");
const select = document.getElementById("select");

let h5 = document.createElement("h5");
h5.textContent = "Este texto es creado desde JavaScript";
box.appendChild(h5);

/* INNERHTML se utiliza cuando se va agregar una etiqueta dentro de otra */
let h4 = document.createElement("h4");
h4.innerHTML = "<span>  Este texto es creado desde JavaScript </span>";
box2.appendChild(h4);

const diaSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

const fragment = document.createDocumentFragment();

for (const iterador of diaSemana) {
  const listaItem = document.createElement("li");
  listaItem.textContent = `${iterador}`;
  fragment.appendChild(listaItem);
}

lista.appendChild(fragment);

/* select ===> menu desplegable */
/* agregarle el OPTGROUP al SELECT y despues agregarle las OPTION */
const optionGroup = document.createElement("optgroup");
optionGroup.textContent = "Días semana";
optionGroup.setAttribute("value", "Dia");
select.appendChild(optionGroup);

const fragment2 = document.createDocumentFragment();

for (const valor of diaSemana) {
  const option = document.createElement("option");
  option.setAttribute("value", valor.toLowerCase());
  option.textContent = valor;
  fragment2.appendChild(option);
}

optionGroup.appendChild(fragment2);
