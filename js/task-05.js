const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const OnTrim = event.currentTarget.value.trim();
  if (OnTrim.length == 0) {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
});

// var string = "       Hello world!       ";
// var result = string.trim(); // Hello world!
