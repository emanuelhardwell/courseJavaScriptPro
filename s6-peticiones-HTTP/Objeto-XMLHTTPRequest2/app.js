/*  */
/*  */

const characters = document.getElementById("characters");
const form = document.getElementById("form");
const table = document.getElementById("table");

const getDatos = (id) => {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  if (id == undefined) {
    xhr.open("GET", "marvel.php");
    xhr.addEventListener("load", (datos) => {
      const datosDb = JSON.parse(datos.target.response);
      console.log(datosDb); /* imprime */

      const fragmento = document.createDocumentFragment();
      for (const iterator of datosDb) {
        const option = document.createElement("option");
        option.setAttribute("value", iterator.ID);
        option.textContent = iterator.Name;
        fragmento.append(option);
      }
      characters.append(fragmento);
    });

    /* send */
    xhr.send();
    /* ELSE *********************** */
  } else {
    xhr.open("GET", `marvel.php?id=${id}`);
    xhr.addEventListener("load", (datos) => {
      const datosDb = JSON.parse(datos.target.response);

      const fragmento = document.createDocumentFragment();
      for (const iterator of datosDb) {
        const row = document.createElement("tr");
        /*  const data = document.createElement("td"); */
        const name = document.createElement("td");
        const alignment = document.createElement("td");
        const hometown = document.createElement("td");
        const gender = document.createElement("td");
        const fighting_Skills = document.createElement("td");

        name.textContent = iterator.Name;
        alignment.textContent = iterator.Alignment;
        hometown.textContent = iterator.Hometown;
        gender.textContent = iterator.Gender;
        fighting_Skills.textContent = iterator.Fighting_Skills;

        row.append(name);
        row.append(alignment);
        row.append(hometown);
        row.append(gender);
        row.append(fighting_Skills);

        fragmento.append(row);
      }
      if (table.children[1]) {
        table.removeChild(table.children[1]);
      }

      table.append(fragmento);
    });

    /* send */
    xhr.send();
  }
};

getDatos();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const idOption = characters.children[characters.selectedIndex].value;
  console.log(idOption);
  getDatos(idOption);
});
