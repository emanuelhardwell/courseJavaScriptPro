/*
    Fetch API
        blob(): Binary Long OBject
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla
        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const botonImg = document.getElementById("botonImg");
const botonPdf = document.getElementById("botonPdf");

/* al <IMG> se le va agregar un SRC */
botonImg.addEventListener("click", () => {
  fetch("dog.jpg")
    .then((res) => res.blob())
    .then((imagen) => {
      document.getElementById("img").src = URL.createObjectURL(imagen);
      console.log(imagen);
    });
});

/* al <A> se le va agregar un HREF */
botonPdf.addEventListener("click", () => {
  fetch("demo.pdf")
    .then((res) => res.blob())
    .then((pdf) => {
      document.getElementById("pdf").href = URL.createObjectURL(pdf);
      console.log(pdf);
    });
});
