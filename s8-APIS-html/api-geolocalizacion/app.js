/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/

const boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
  const geolocalizacion = navigator.geolocation;
  geolocalizacion.getCurrentPosition(getPosicion, error, opciones);
});

const getPosicion = (e) => {
  console.log(e);
};

const error = (e) => console.log(e);

const opciones = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};
