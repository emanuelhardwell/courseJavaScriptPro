/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/

class Libro {
  constructor(titulo, autor, anio, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.genero = genero;
  }

  getAutor() {
    return this.autor;
  }

  getGenero() {
    return this.genero;
  }

  datos() {
    return `Libro: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anio}, Genero: ${this.genero}`;
  }
}

let arregloLibros = [];

while (arregloLibros.length < 2) {
  let titulo = prompt("Ingrese el titulo:");
  let autor = prompt("Ingrese el autor:");
  let anio = prompt("Ingrese el año:");
  let genero = prompt("Ingrese el genero:");

  if (
    titulo != "" &&
    autor != "" &&
    !isNaN(anio) &&
    anio.length == 4 &&
    (genero == "aventura" || genero == "terror" || genero == "fantasia")
  ) {
    arregloLibros.push(new Libro(titulo, autor, anio, genero));
  }
}

const mostrarLibros = () => {
  console.log(arregloLibros);
};

mostrarLibros();

const mostarAutores = () => {
  let autores = [];
  for (const libritos of arregloLibros) {
    autores.push(libritos.getAutor());
  }
  console.log(autores.sort());
};

mostarAutores();

const mostrarGenero = () => {
  const gender = prompt("Introduce el género a buscar");

  for (const book of arregloLibros) {
    if (book.getGenero() == gender) {
      console.log(book.datos());
    }
  }
};

mostrarGenero();
