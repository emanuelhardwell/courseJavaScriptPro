/*
//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener
*/

/* 
 Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto
        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/

const tareaPendiente = document.getElementById("tarea-pendiente");
const tareaFinalizada = document.getElementById("tarea-finalizada");

tareaPendiente.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", e.target.id);
});

tareaPendiente.addEventListener("drag", (e) => {
  e.target.classList.add("cambio");
});

tareaPendiente.addEventListener("dragend", (e) => {
  /* e.preventDefault(); */
  e.target.classList.remove("cambio");
});

/*obligatorio, si no no funciona  */
tareaFinalizada.addEventListener("dragover", (e) => {
  e.preventDefault();
});

tareaFinalizada.addEventListener("drop", (e) => {
  e.preventDefault();
  const nuevo = document.getElementById(e.dataTransfer.getData("text"));
  nuevo.classList.remove("cambio");
  tareaFinalizada.appendChild(tareaPendiente.removeChild(nuevo));
});

/* ********** INVERSO DE TAREA FINALIZADA A PENDIENTE  ***************** */
tareaFinalizada.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text", e.target.id);
});

tareaFinalizada.addEventListener("drag", (e) => {
  e.target.classList.add("cambio2");
});

tareaFinalizada.addEventListener("dragend", (e) => {
  /* e.preventDefault(); */
  e.target.classList.remove("cambio2");
});

/*obligatorio, si no no funciona  */
tareaPendiente.addEventListener("dragover", (e) => {
  e.preventDefault();
});

tareaPendiente.addEventListener("drop", (e) => {
  e.preventDefault();
  const nuevo = document.getElementById(e.dataTransfer.getData("text"));
  nuevo.classList.remove("cambio2");
  tareaPendiente.appendChild(tareaFinalizada.removeChild(nuevo));
});
