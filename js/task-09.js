function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttunChange = document.querySelector(".change-color");
buttunChange.addEventListener("click", chengeButt);
const bodyBackgr = document.body;
const spanChenge = document.querySelector(".color");
// function testCount() {
//   console.log("dd");
// }
function chengeButt() {
  let chengeColor = getRandomHexColor();
  bodyBackgr.style.backgroundColor = chengeColor;
  spanChenge.textContent = chengeColor;
}

// console.dir(bodyBackgr);
