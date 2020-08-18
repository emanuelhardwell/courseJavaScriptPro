/* 
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/

let arrayUno = [1, 2, 3, 4, 5];
console.log(arrayUno);

let arrayPares = [];
let arrayImpares = [];

/* let valor1 = Math.floor(Math.random() * 11);
console.log(valor1); */
let elemento;

for (let i = 0; i < arrayUno.length; i++) {
  let random = Math.floor(Math.random() * 11);
  elemento = arrayUno[i] * random;
  console.log(` ${arrayUno[i]} X ${random} = ${elemento} `);
  if (elemento % 2 == 0) {
    arrayPares.push(elemento);
  } else {
    arrayImpares.push(elemento);
  }
}

console.log(arrayPares);
console.log(arrayImpares);
