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
    const objectStore = db.createObjectStore("tarea", { keyPath: "tarea" });
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

  const getDatos = (key) => {
    const transaccion = db.transaction("tarea", "readwrite");
    const objectStore = transaccion.objectStore("tarea");
    const request = objectStore.get(key);

    request.onsuccess = () => {
      formulario.tarea.value = request.result.tarea;
      formulario.categoria.value = request.result.categoria;
      formulario.boton.dataset.action = "update";
      formulario.boton.textContent = "Actualizar";
    };
  };

  const update = (dato) => {
    const transaccion = db.transaction("tarea", "readwrite");
    const objectStore = transaccion.objectStore("tarea");
    const request = objectStore.put(dato);

    request.onsuccess = () => {
      formulario.boton.dataset.action = "add";
      formulario.boton.textContent = "Enviar";
      leer();
    };
  };

  const leer = () => {
    const transaccion = db.transaction("tarea", "readonly");
    const objectStore = transaccion.objectStore("tarea");
    const request = objectStore.openCursor();
    const fragmento = document.createDocumentFragment();

    request.onsuccess = (e) => {
      const cursor = e.target.result;

      if (cursor) {
        /*  console.log(cursor.key); */
        const tarea = document.createElement("p");
        tarea.textContent = cursor.value.tarea;
        fragmento.append(tarea);

        const categoria = document.createElement("p");
        categoria.textContent = cursor.value.categoria;
        fragmento.append(categoria);

        const actualizarTarea = document.createElement("button");
        actualizarTarea.dataset.type = "update";
        actualizarTarea.dataset.key = cursor.key;
        actualizarTarea.textContent = "Update";
        fragmento.appendChild(actualizarTarea);

        const borrarTarea = document.createElement("button");
        borrarTarea.textContent = "Delete";
        fragmento.appendChild(borrarTarea);

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
      categoria: e.target.categoria.value,
    };
    console.log(datos);

    /* puede ser tambien
      if ((formulario.boton.dataset.action == "add"))
    */
    if (e.target.boton.dataset.action == "add") {
      agregar(datos); /* Se Llama a la funcion   AGREGAR */
    } else if (e.target.boton.dataset.action == "update") {
      update(datos);
    }

    formulario.reset();
  });

  contenedor.addEventListener("click", (e) => {
    if (e.target.dataset.type == "update") {
      getDatos(e.target.dataset.key);
    }
  });
}
