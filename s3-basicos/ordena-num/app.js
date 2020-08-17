/*  */
/*  */
let numeros = document.getElementById("numeros");
let resultado = document.getElementById("resultado");

let a = prompt("Introduce el primer nùmero:");
let b = prompt("Introduce el segundo nùmero:");
let c = prompt("Introduce el tercer nùmero:");

numeros.textContent = `Nùmeros ingresados: - ${a} - ${b} - ${c} `;

/*
Ordena 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc - 321
acb - 312
bac - 231
bca - 132
cab - 213
cba - 123
*/
if (a >= b && a >= c) {
  if (b > c) {
    resultado.textContent = `Orden: - ${a} - ${b} - ${c} -`;
  } else {
    resultado.textContent = `Orden: - ${a} - ${c} - ${b} -`;
  }
} else if (b >= a && b >= c) {
  if (a > c) {
    resultado.textContent = `Orden: - ${b} - ${a} - ${c} -`;
  } else {
    resultado.textContent = `Orden: - ${b} - ${c} - ${a} -`;
  }
} else if (c >= a && c >= b) {
  if (a > b) {
    resultado.textContent = `Orden: - ${c} - ${a} - ${b} -`;
  } else {
    resultado.textContent = `Orden: - ${c} - ${b} - ${a} -`;
  }
}
