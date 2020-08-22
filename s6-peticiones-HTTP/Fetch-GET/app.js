/*  */
/*  */

const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
    .then((res) => res.json())
    .then((res) => {
      /* console.log(res); */
      const fragmento = document.createDocumentFragment();
      for (const iterador of res) {
        const listaItem = document.createElement("li");
        listaItem.textContent = `Id: ${iterador.id} ---- Name:${iterador.name}`;
        fragmento.append(listaItem);
      }
      lista.append(fragmento);
    });
});
