/* practica con un album de fotografias suposición */

const box = document.getElementById("box");
box.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  e.target.classList.add("red"); /* le añado una clase al darle clik al box */
});
