/* 

*/

const indexedDb = window.indexedDB;
const formulario = document.getElementById("formulario");

if (indexedDb && formulario) {
  let db;
  let request = indexedDb.open("listatarea", 1);

  request.onsuccess = () => {
    db = request.result;
    console.log("Open DB");
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
