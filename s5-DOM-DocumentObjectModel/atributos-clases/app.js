/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)
Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/
const principal = document.getElementById("principal");
console.log(principal.getAttribute("id"));

const atributoGet = document.getElementById("titulo");
atributoGet.setAttribute("value", "titulo modificado");
console.log(atributoGet);

const listaAdd = document.getElementById("subtitulo");
listaAdd.classList.add("clase-nueva");
console.log(listaAdd);

const listaRemover = document.getElementById("nombre");
listaRemover.classList.remove("nombre");
console.log(listaRemover);

if (listaRemover.classList.contains("nombre")) {
  console.log("El input tiene la clase nombre");
} else {
  console.log("El input no tiene la clase nombre");
}

const listaRemplazar = document.getElementById("contrasena");
listaRemplazar.classList.replace("contrasena", "contrasena-nueva");
console.log(listaRemplazar);
