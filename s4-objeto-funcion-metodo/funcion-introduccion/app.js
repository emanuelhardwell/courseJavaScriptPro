/*  */
/*  */

const imprimir = () => {
  console.log("Hola Mundo !!!!!!");
};

imprimir();

const suma = (num1, num2) => num1 + num2;

console.log(suma(200, 30));

/* ************************************** */
const sumaPro = (num1, num2) => {
  if (num1 < 1 || num2 < 1) {
    return "No se aceptan valores negativos";
  } else {
    return num1 + num2;
  }
};

console.log(sumaPro(30, 50));
console.log(sumaPro(-30, 50));
console.log(sumaPro(30, -50));
