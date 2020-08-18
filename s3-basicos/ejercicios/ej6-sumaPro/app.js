/* 
6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/

let suma = 0;
let numero = 0;
let contador = 0;
do {
  numero = prompt("Ingrese un núm a sumar:");
  contador++;
  numero *= 1;
  suma += numero;
  console.log(`Contador: ${contador}, Suma: ${suma}`);
} while (suma < 50);
