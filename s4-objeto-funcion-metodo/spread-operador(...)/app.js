/*
Spread Operator (operador de expansión)
Su sintaxis es ...
*/

//Enviar elementos en un array a una función ****************
const numero = [10, 20, 30, 40];

const sumar = (a, b, c, d) => {
  return a + b + c + d;
};
console.log(sumar(10, 20, 30, 40));

console.log(sumar(...numero));

/* ******************* */
const num = [1, 2, 3, 4];
const sumaPro = (a, b, c, d) => {
  console.log(a + b + c + d);
};

sumaPro(1, 2, 3, 4);
sumaPro(...num);

//Añadir un array a otro array ****************

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

array1.push(...array2);
console.log(array1);

//Copiar arrays ****************
let array3 = [...array2];
console.log(array3);

//Concatenar arrays ****************
let array4 = [...array1, ...array2];
console.log(array4);

/*  Enviar un número indefinido de argumentos a una función 
(parámetros REST) */
let funcionDinamica = (...num) => {
  console.log(num);
};

funcionDinamica();
funcionDinamica(1, 2, 3);

//librería math ****************
let mate = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...mate));
console.log(Math.min(...mate));

//Eliminar elementos duplicados ****************
let duplicados = [1, 2, 3, 4, 5, 6, 1, 2, 4];

/*Lo devuelve en un SET  */
console.log(new Set(duplicados));

/*Lo devuelve en un ARRAY  */
console.log([...new Set(duplicados)]);
