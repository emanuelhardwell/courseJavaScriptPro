/*  */
/*  */

class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
    this.datos = `Tu nombre es ${nombre} y tienes una edad de ${edad} años.`;
  }

  saludo() {
    console.log(`Saludos ${this.nombre} : Tu domicilio es ${this.domicilio} `);
  }

  saludoPro() {
    return `SALUDOS ${this.nombre} : Tu domicilio es ${this.domicilio}`;
  }
}

const emanuel = new Persona(
  "Emanuel",
  "Vasquez",
  23,
  "Tlacolula # 200, Col. Oaxaca de Juarez"
);

console.log(emanuel);
console.log("**************************************");

emanuel.saludo();
console.log("**************************************");

console.log(emanuel.saludoPro());
