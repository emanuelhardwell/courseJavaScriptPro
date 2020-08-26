/*

*/
const archivo = document.getElementById("archivo");
const barraProgreso = document.getElementById("barra-progreso");
const progreso = document.getElementById("progreso");

archivo.addEventListener("change", (e) => {
  const archivo = e.target.files[0];
  const leerArchivo = new FileReader();
  leerArchivo.readAsDataURL(archivo);

  leerArchivo.addEventListener("progress", (e) => {
    progreso.style.width = Number.parseInt((e.loaded * 100) / e.total) + "%";
  });

  leerArchivo.addEventListener("loadend", (e) => {
    progreso.style.width = "100%";
  });
});

/* ------------------ BOX 2 --------------------- */
/* capturamos la VARIABLE CSS que declaramos en Style.css */
const root = document.documentElement;

const archivoPro = document.getElementById("archivo-pro");
const barraProgresoPro = document.getElementById("barra-progreso-pro");

archivoPro.addEventListener("change", (e) => {
  const archivo = e.target.files[0];
  const leerArchivo = new FileReader();
  leerArchivo.readAsDataURL(archivo);

  leerArchivo.addEventListener("progress", (e) => {
    root.style.setProperty(
      "--bar-width",
      Number.parseInt((e.loaded * 100) / e.total) + "%"
    );
  });

  leerArchivo.addEventListener("loadend", (e) => {
    root.style.setProperty("--bar-width", "100%");
  });
});
