var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var bodyColor = document.querySelector("#gradient");
var color = document.querySelector("#color-code");
console.log(color);
function colorPick() {
  bodyColor.style.background =
    "linear-gradient(to right," + input1.value + "," + input2.value + ")";
  color.textContent = bodyColor.style.background + ";";
}
input1.addEventListener("input", colorPick);
input2.addEventListener("input", colorPick);
