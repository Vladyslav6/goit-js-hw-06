const InputRange = document.querySelector("#font-size-control");
const InputText = document.querySelector("#text");
// console.log(InputRange.getAttribute("min"));
// console.log(InputRange.value);
InputRange.addEventListener("click", Event2);

function Event2(ev) {
  console.log(InputRange.value);
  InputText.style.fontSize = `${InputRange.value}px`;
}

// const value = document.querySelector("#value");
// const input = document.querySelector("#pi_input");
// value.textContent = input.value;
// input.addEventListener("input", (event) => {
//   value.textContent = event.target.value;
// });
