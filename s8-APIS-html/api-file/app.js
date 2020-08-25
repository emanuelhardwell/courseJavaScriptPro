/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.
        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

const archivoTexto = document.getElementById("archivo-texto");
const archivoImagen = document.getElementById("archivo-imagen");
const archivoImagenPro = document.getElementById("archivo-imagen-pro");

const parrafo = document.getElementById("parrafo");
const imagen = document.getElementById("imagen");
const box3 = document.getElementById("box3");

archivoTexto.addEventListener("change", (e) => {
  const archivo = e.target.files[0];
  const leerArchivo = new FileReader();
  leerArchivo.readAsText(archivo);
  leerArchivo.addEventListener("load", (e) => {
    parrafo.textContent = e.target.result;
  });
});

/* ARCHVO IMAGEN */
archivoImagen.addEventListener("change", (e) => {
  const archivo = e.target.files[0];
  const leerArchivo = new FileReader();
  leerArchivo.readAsDataURL(archivo);
  leerArchivo.addEventListener("load", (e) => {
    imagen.setAttribute("src", e.target.result);
  });
});

/* ARCHVO IMAGEN PRO  ==== agregar varias imagenes o archivos === */
archivoImagenPro.addEventListener("change", (e) => {
  const archivo = e.target.files;
  const fragmento = document.createDocumentFragment();

  for (const iterador of archivo) {
    const imagenNueva = document.createElement("img");

    const leerArchivo = new FileReader();
    leerArchivo.readAsDataURL(iterador);
    leerArchivo.addEventListener("load", (e) => {
      imagenNueva.setAttribute("src", e.target.result);
      imagenNueva.classList.add("imagen");
    });
    fragmento.append(imagenNueva);
  }
  box3.append(fragmento);
});
