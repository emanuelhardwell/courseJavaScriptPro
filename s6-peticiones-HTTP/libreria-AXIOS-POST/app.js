/* ==================== CON FETCH ================================ */
/* 
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
    .then((res) => res.json()) 
    .then((datos) => console.log(datos));
});
*/

/* ==================== CON LIBRERIA AXIOS ================================ */

const boton = document.getElementById("boton");

const user = {
  idUser: 01,
  nombre: "emanuel",
  apellido: "vasquez",
};

boton.addEventListener("click", () => {
  axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: user,
  })
    .then((res) => console.log(res.data))
    .catch((error) => console.log(`==== Error de URL ==== ... ${error}`));
});
