/* 
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
    !5 = 5*4*3*2*1 = 120
*/

let numero = prompt("Ingrese el numero para el factorial");

function factorial(n) {
  var total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

console.log(factorial(numero));
