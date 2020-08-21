/* 
Recorrer el DOM (DOM Traversing) 

Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre
    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.
Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devueleve el primer nodo hijo
    - firstElementChild - Devueleve el primer nodo elemento hijo
    - lastChild - Devueleve el último nodo hijo
    - lastElementChild - Devueleve el último nodo elemento hijo
    - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene
Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano
Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/

/* PADRES */
const abuelo = document.getElementById("abuelo");
const padre = document.getElementById("padre");
const nieto = document.getElementById("nieto");

console.log(abuelo.parentNode);
console.log(abuelo.parentElement);

/* HIJOS */
console.log(padre.childNodes);
console.log(padre.children);

console.log(padre.firstChild);
console.log(padre.firstElementChild);

console.log(padre.lastChild);
console.log(padre.lastElementChild);

console.log(padre.hasChildNodes());

/* HERMANOS */
console.log(padre.nextSibling);
console.log(padre.nextElementSibling);

console.log(padre.previousSibling);
console.log(padre.previousElementSibling);

/* juntando dos propiedades */
console.log(nieto.parentElement.previousElementSibling);

/* se puedo subir de nivel como tu quieras */
console.log(nieto.parentElement.parentElement.parentElement);
