/* 
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

/* let num= prompt("Ingrese un numero para saber si es primo o no:"); */

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

/* ******* */
for (var i = 0; i < 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
