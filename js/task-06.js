const textInput = document.querySelector("#validation-input");
const inputValid = document.querySelector(".valid");
// console.log(inputValid);
// console.log(textInput.dataset.length);
// console.log(textInput.attributes[2].value);
// console.log(textInput.hasAttribute("data-length"));
// console.log(textInput.getAttribute("data-length"));
// const borderValid = document.querySelector("#validation-input .valid");
// console.log(borderValid.hasAttribute("border-color"));
textInput.addEventListener("blur", () => {
  if (textInput.value.length == textInput.dataset.length) {
    // console.log("top");
    // textInput.classList.add("valid");
    if (!textInput.classList.contains("valid")) {
      textInput.classList.remove("invalid");
      textInput.classList.add("valid");
    } else {
      return;
    }
  } else {
    if (!textInput.classList.contains("invalid")) {
      textInput.classList.remove("valid");
      textInput.classList.add("invalid");
    } else {
      return;
    }
    // textInput.getAttribute(name);
    // textInput.classList.replace("valid", "invalid");
    // console.log("invalid");
    // textInput.classList.add("invalid");
    // console.log(textInput.value.length);
    // textInput.value = "NEMA";
  }
});

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"
