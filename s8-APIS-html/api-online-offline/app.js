/*
 */

const alerta = document.getElementById("alert");

addEventListener("online", (e) => {
  setStatus(1);
});

addEventListener("offline", (e) => {
  setStatus(0);
});

const setStatus = (status) => {
  alerta.classList.remove("alert-online");
  alerta.classList.remove("alert-offline");

  if (navigator.onLine) {
    setTimeout(() => {
      alerta.classList.add("alert-online");
      alerta.textContent = "Great !! You have internet";
    }, 100);
  } else {
    setTimeout(() => {
      alerta.classList.add("alert-offline");
      alerta.textContent = "Bad!! You don´t have internet";
    }, 100);
  }
};
