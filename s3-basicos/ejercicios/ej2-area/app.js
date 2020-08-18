/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b*h/2
    rectángulo = b*h
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

let opcion = prompt(
  `Seleccione la opcion
  para optener su Area: 
  1) triangulo
  2) rectangulo 
  3) circulo `
);

switch (opcion) {
  case "1":
    let baseTriangulo = prompt("Base del triangulo:");
    let alturaTriangulo = prompt("Altura del triangulo:");

    let resultadoTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log(`Area triangulo: ${resultadoTriangulo}`);
    break;

  case "2":
    let baseRectangulo = prompt("Base del Rectangulo:");
    let alturaRectangulo = prompt("Altura del Rectangulo:");
    let resultadoRectangulo = baseRectangulo * alturaRectangulo;
    console.log(`Area Rectangulo: ${resultadoRectangulo}`);
    break;

  case "3":
    let radio = prompt("Radio del círculo:");
    let resultadoCirculo = Math.PI * (radio * radio);
    console.log(`Area Circulo: ${resultadoCirculo}`);
    break;

  default:
    console.log("OPCION INVALIDA");
    break;
}
