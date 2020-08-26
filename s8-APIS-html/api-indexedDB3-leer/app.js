/* 

*/

const indexedDb = window.indexedDB;
const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("contenedor");

if (indexedDb && formulario) {
  let db;
  let request = indexedDb.open("listatarea", 1);

  request.onsuccess = () => {
    db = request.result;
    console.log("Open DB");
    leer(); /*  */
  };

  request.onupgradeneeded = () => {
    db = request.result;
    const objectStore = db.createObjectStore("tarea", { autoIncrement: true });
    console.log("Create DB");
  };

  request.onerror = (e) => {
    console.log("Error...", e);
  };

  const agregar = (dato) => {
    const transaccion = db.transaction("tarea", "readwrite");
    const objectStore = transaccion.objectStore("tarea");
    const request = objectStore.add(dato);
    leer(); /*  */
  };

  const leer = () => {
    const transaccion = db.transaction("tarea", "readonly");
    const objectStore = transaccion.objectStore("tarea");
    const request = objectStore.openCursor();
    const fragmento = document.createDocumentFragment();

    request.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        const tarea = document.createElement("p");
        const categoria = document.createElement("p");
        tarea.textContent = cursor.value.tarea;
        categoria.textContent = cursor.value.categoria;
        fragmento.append(tarea);
        fragmento.append(categoria);
        cursor.continue();
      } else {
        contenedor.textContent = "";
        contenedor.append(fragmento);
      }
    };
  };

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = {
      tarea: e.target.tarea.value,
      categoria: e.target.select.value,
    };
    console.log(datos);
    /* Se Llama a la funcion   AGREGAR */
    agregar(datos);
  });
}
