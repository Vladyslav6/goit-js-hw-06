// const spanId = document.querySelector("#value");
// console.log(spanId);
let counterValue = 0;

const Btn1minus = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const Btn2plus = document.querySelector(
  '#counter button[data-action="increment"]'
);
let spanOne = document.querySelector("#value");
console.log(spanOne.textContent);
Btn1minus.addEventListener("click", minus);
Btn2plus.addEventListener("click", plus);

function minus(evt) {
  //   counterValue = spanOne.textContent;
  counterValue -= 1;
  spanOne.textContent = counterValue;
  //   console.log(counterValue);
}
function plus(evt) {
  counterValue += 1;
  spanOne.textContent = counterValue;
}

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const button = document.querySelector("#counter");

// const button4 = document.querySelector("#counter");
// console.log(button4.dataset.decrement);
// button4.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// var article = document.getElementById('electriccars');

// article.dataset.columns // "3"
// article.dataset.indexNumber // "12314"
// article.dataset.parent // "cars"
