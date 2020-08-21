/*  */
/*  */

const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", (datosObtenidos) => {
    let datos = JSON.parse(datosObtenidos.target.response);
    console.log(datos);
    for (const infoUsuario of datos) {
      let listaItem = document.createElement("li");
      listaItem.textContent = `Id: ${infoUsuario.id}, --  Nombre:${infoUsuario.name}, --  Website: ${infoUsuario.website}`;
      lista.appendChild(listaItem);
    }
  });

  xhr.send();
});
