/*
Insertar y eliminar elementos II
    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia
    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)
    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)
    positions: 
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
        afterend - después de que acabe (hermano siguiente)
    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like
    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 
        child.replaceWith(newChild)
*/

/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos
        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

const lista = document.getElementById("lista");
const listaPro = document.getElementById("listaPro");

const listaItem1 = document.createElement("li");
listaItem1.textContent = "VALOR -- 1";
const listaItem2 = document.createElement("li");
listaItem2.textContent = "VALOR -- 2";
const listaItem3 = document.createElement("li");
listaItem3.textContent = "VALOR -- 3";
const listaItem4 = document.createElement("li");
listaItem4.textContent = "VALOR -- 4";
const listaItem5 = document.createElement("li");
listaItem5.textContent = "VALOR -- 5";
const listaItem6 = document.createElement("li");
listaItem6.textContent = "VALOR -- 6";
const listaItem7 = document.createElement("li");
listaItem7.textContent = "VALOR -- 7";
const listaItem8 = document.createElement("li");
listaItem8.textContent = "VALOR -- 8";
const listaItem9 = document.createElement("li");
listaItem9.textContent = "VALOR -- 9";

/* insertBefore */
lista.insertBefore(listaItem1, lista.children[0]);

/* insertAdjacentElement  */
lista.children[0].insertAdjacentElement("beforebegin", listaItem2);

lista.insertAdjacentElement("afterbegin", listaItem3);

lista.insertAdjacentElement("beforeend", listaItem4);

lista.children[5].insertAdjacentElement("afterend", listaItem5);

/* replaceChild */
lista.replaceChild(lista.children[0], lista.children[1]);

/* Estos por lo regular no se utilizan
insertAdjacentHTML 
insertAdjacentText
 */

/* ESTOS SE UTILIZAN MÁS A MENUDO */
/* before() */
listaPro.children[0].before(listaItem6);

/* prepend() */
listaPro.prepend(listaItem7);

/* append() */
listaPro.append(listaItem8);

/* after()  */
listaPro.children[4].after(listaItem9);

/* replaceWith(newChild) */

/* CLONAR LISTA */
listaPro.after(listaPro.cloneNode(true));
