/*  */
/* una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función. */

const users = [
  {
    id: 1,
    name: "Juan Carlso",
  },
  {
    id: 2,
    name: "Emanuel Nóe",
  },
  {
    id: 1,
    name: "Josue",
  },
];

const emails = [
  {
    id: 1,
    email: "Juan@gmail.com",
  },
  {
    id: 2,
    email: "Emanuel@gmail.com",
  },
];

const verificarUsuario = (id) => {
  const user = users.find((usuarios) => usuarios.id == id);
  const promesa = new Promise((resolve, reject) => {
    if (!user) {
      reject(`El ID: ${id} no existe !!!`);
    } else {
      resolve(user);
    }
  });
  return promesa;
};

const verificarEmail = (user) => {
  const email = emails.find((correos) => correos.id == user.id);
  const promesa2 = new Promise((resolve, reject) => {
    if (!email) {
      reject(` El usuario ${user.name} no tiene correo`);
    } else {
      resolve({
        id: user.id,
        name: user.name,
        email: email.email,
      });
    }
  });
  return promesa2;
};

/* este ejemplo era solamente con el metodo VERIFICARUSUARIO */

/* El ID: 5 no existe en el objeto */
/* verificar(5)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
 */

/* 
verificarUsuario(2)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
 */

/* este ejemplo del metodo VERIFICARUSUARIO y VERIFICAREMAIL */

verificarUsuario(2)
  .then((user) => verificarEmail(user))
  .then((res) => console.log(res)) /* Es necesario poner un segundo THEN */
  .catch((err) => console.log(err));

/* se puede simplificar lo anterior con  */
verificarUsuario(1)
  .then(verificarEmail)
  .then(console.log) /* Es necesario poner un segundo THEN */
  .catch(console.log);
