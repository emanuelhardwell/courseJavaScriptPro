/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const user = {
  name: "emanuel",
  lastname: "vasquez",
  age: 24,
  email: "emanuel@gmail.com",
};

/* forma no recomendable */
console.log(user.name, user.age);

/* forma recomendable 1 -------*/
const { email } = user;
console.log(email);

/* forma recomendable 2 -------*/
const { name: nombre, lastname: apellido } = user;
console.log(nombre, apellido);

/* **************************************************** */
const printPerson = ({ name }) => {
  console.log(name);
};

printPerson(user);

const ImprimirPersona = ({ lastname: apellido }) => {
  console.log(apellido);
};

ImprimirPersona(user);

/* **************************************************** */

const ingenerias = ["Sistemas", "Civil", "Quimica", "Industrial"];

/* forma no recomendable */
console.log(ingenerias[0]);

/* forma  recomendable -------*/
const [a, b, tercera] = ingenerias;
console.log(tercera);

/* ********************** FORMA ABITUAL******************** */
const getDatos = async () => {
  const datos = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(datos.data);
};

getDatos();

/* ********************* CON AXIOS*************** */
const getData = async () => {
  const { data: users } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(users);
};

getData();
