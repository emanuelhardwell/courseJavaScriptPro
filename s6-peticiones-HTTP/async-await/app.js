/*  */
/*  */
/* Cuando escribimos ASYNC en una funcion, automaticamente esta funcion 
va devolver una PROMESA, ... ya no es necesario crear una PROMESA dentro 
de la funcion */
const getName = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("emanuel");
    }, 2000);
  });
};

/* getUsuario().then((elemento) => console.log(elemento)); */
const sayHello = async () => {
  const nombre = await getName();
  return `Tu nombre es: ${nombre}`;
};

sayHello().then((respuesta) => console.log(respuesta));

/* ****************************************************************** */

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

const verificarUsuario = async (id) => {
  const user = users.find((usuarios) => usuarios.id == id);
  if (!user) {
    throw new Error(`El ID: ${id} no existe !!!`);
  } else {
    return user;
  }
};

const verificarEmail = async (user) => {
  const email = emails.find((correos) => correos.id == user.id);
  if (!email) {
    throw new Error(` El usuario ${user.name} no tiene correo`);
  } else {
    return {
      id: user.id,
      name: user.name,
      email: email.email,
    };
  }
};

/* Vams a capturar el ERROR por si no existe un ID */
const VerificarUserEmail = async (id) => {
  try {
    const usuario = await verificarUsuario(id);
    const correo = await verificarEmail(usuario);
    return `Nombre: ${usuario.name} --- Email: ${correo.email}`;
  } catch (error) {
    console.log(error);
  }
};

VerificarUserEmail(3).then((res) => console.log(res));
