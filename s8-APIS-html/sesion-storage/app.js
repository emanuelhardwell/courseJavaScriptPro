/*
    API webStorage:
        Los dos mecanismos en el almacenamiento web son los siguientes:
            sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible mientras dure la sesión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).
            localStorage hace lo mismo, pero persiste incluso cuando el navegador se cierre y se reabra.
        Ambos funcionan con clave:valor y tienen dos métodos fundamentales setItem() para asignar una clave:valor y getItem() que recibe como parámetro la clave de la que quieremos obtener el valor
*/

const formulario = document.getElementById("formulario");
const select = document.getElementById("select");
const parrafo = document.getElementById("parrafo");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  sessionStorage.setItem(formulario.clave.value, formulario.valor.value);
  select.innerHTML += `<option>${formulario.clave.value}</option>`;

  formulario.reset();
});

select.addEventListener("change", () => {
  const valor = sessionStorage.getItem(
    select[select.selectedIndex].textContent
  );
  parrafo.textContent = valor;
});
