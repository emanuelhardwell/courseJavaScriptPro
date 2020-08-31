/*
 */

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.num1.value != "" && e.target.num2.value != "") {
    const num1 = parseInt(e.target.num1.value);
    const num2 = parseInt(e.target.num2.value);
    const suma = num1 + num2;

    resultado.textContent = suma;
  } else {
    console.log("Escriba los valores nuevamente !!!");
  }

  e.target.reset();
  /*  console.log(e.target.num1.value); */
});
