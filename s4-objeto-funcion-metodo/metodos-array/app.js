/* 
Arrays - Métodos II
.from(iterable) - Convierte en array el elemento iterable
.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.
.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.
.some(callback) - Comprueba si al menos un elemento del array cumple la condición
.every(callback) - Comprueba si todos los elementos del array cumplen 
la condición
.map(callback) - Transforma todos los elementos del array y devuelve 
un nuevo array
.filter(callback) - Filtra todos los elementos del array que cumplan
 la condición y devuelve un nuevo array
.reduce(callback) - Reduce todos los elementos del array a un 
único valor
*/

/* from(iterable) */
const saludo = "Hola Mundo !!!";
const saludoNuevo = Array.from(saludo);
console.log(saludoNuevo);

/* sort([callback]) */
const abecedario = ["z", "b", "a", "w", "c"];
const abecedarioNew = abecedario.sort();
console.log(abecedarioNew);

/* Cuando se ordenan numeros se utiliza una tecnica diferente */
const numeros = [10, 9, 2, 7, 1];
const numerosNew = numeros.sort((a, b) => a - b);
console.log(numerosNew);

const numeros2 = [10, 9, 2, 7, 1];
const numerosNew2 = numeros2.sort((a, b) => b - a);
console.log(numerosNew2);

/* forEach(callback(currentValue, [index])) */
const nombres = ["juan", "emanuel", "josue", "shalom"];
let nombresNew = nombres.forEach((element, index) => {
  console.log(`Nombre: ${element} con indice ${index + 1}`);
});

/* some(callback) */
const number = [10, 9, 2, 7, 1];
let numberNew = number.some((n) => n > 9);
console.log(numberNew);

/* every(callback)  */
let numberNew2 = number.every((n) => n > 9);
console.log(numberNew2);

/* map(callback) */
let n = [1, 2, 3, 4, 5];
let nNew = n.map((n) => n * 10);
console.log(nNew);

/* filter(callback) */
let nNew2 = n.filter((n) => n > 3);
console.log(nNew2);

/* reduce(callback) */
let nNew4 = n.reduce((a, b) => a + b);
console.log(nNew4);

/* Ejercicio utilizando OBJETOS y el metodo REDUCE */
const personas = [
  {
    name: "juan",
    apellido: "vasquez",
    online: true,
  },
  {
    name: "emanuel",
    apellido: "martinez",
    online: false,
  },
  {
    name: "josue",
    apellido: "martinez",
    online: true,
  },
  {
    name: "shalom",
    apellido: "martinez",
    online: true,
  },
];

let personasNew = personas.reduce((cont, enlinea) => {
  if (enlinea.online) cont++;
  return cont;
}, 0);

console.log(personasNew);
