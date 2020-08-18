/*  */
/*  */

let persona = {
  nombre: "Noe",
  apellido: "vasquez",
  edad: 42,
  hijos: ["Juan", "Emanuel", "Josue", "Shalom"],
};

console.log(persona);

console.log(persona.nombre);
console.log(persona["apellido"]);

console.log("*******************************************");

let persona2 = {
  nombre: "Rosa",
  apellido: "Martínez",
  edad: 42,
  hijos: ["Juan", "Emanuel", "Josue", "Shalom"],
};

for (const key in persona2) {
  console.log(key);
}
for (const key in persona2) {
  console.log(persona2[key]);
}

console.log("*******************************************");
let persona3 = {
  nombre: "Emanuel",
  apellido: "Vasquez",
  edad: 23,
  hijos: ["Hardwell", "Emanuel", "Garrix", "Martín"],
};

for (const iterator of persona3.hijos) {
  console.log(iterator);
}

console.log(
  `Hola ${persona3.nombre} ${persona3.apellido} tienes ${persona3.edad} años y tus hijos seran:: ${persona3.hijos}`
);
