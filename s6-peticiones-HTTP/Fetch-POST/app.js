/*
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.
        fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
   
     console.log(newPost)
     console.log(JSON.stringify(newPost))
*/

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  const user = {
    idUser: 01,
    nombre: "emanuel",
    apellido: "vasquez",
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json()) /* Es necesario convertirlo  */
    .then((datos) => console.log(datos));
});
