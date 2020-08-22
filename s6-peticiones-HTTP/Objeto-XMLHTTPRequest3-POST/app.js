/*  */
/*  */
const form = document.getElementById("form");

const enviarDatos = (datos) => {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open("POST", "marvel.php");
  const formData = new FormData(datos);

  xhr.send(formData);
};

/*  */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  enviarDatos(form);
});
