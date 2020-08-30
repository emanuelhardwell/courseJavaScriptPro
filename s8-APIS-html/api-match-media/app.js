/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia
    mql = window.matchMedia(mediaQueryString)
    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/

const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
const body = document.getElementById("body");

const mql = matchMedia("(min-width: 300px) and (orientation: landscape)");

const aplicarMatchMedia = (mql) => {
  if (mql.matches) {
    /* document.body.style.backgroundColor = "red"; */
    body.classList.add("body-rojo");
    body.classList.remove("body-azul");
    parrafo.textContent = "mayor a 300 px";
  } else {
    /* document.body.style.backgroundColor = "blue"; */
    body.classList.add("body-azul");
    body.classList.remove("body-rojo");
    parrafo.textContent = "menor a 300 px";
  }
};

addEventListener("resize", () => aplicarMatchMedia(mql));
addEventListener("DOMContentLoaded", () => aplicarMatchMedia(mql));
