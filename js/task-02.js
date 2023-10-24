const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const UlIng = document.querySelector("#ingredients");
const ingrList = ingredients
  .map((ingr) => `<li class="item">${ingr}</li>`)
  .join("");
UlIng.innerHTML = ingrList;

// ingredients.forEach((ingr) => {
//   const Lilist = document.createElement("li");
//   Lilist.classList.add("item");
//   console.log(Lilist);
// });

// lastItem.textContent = "Poly";
// UlIng.append(lastItem);
// console.log(lastItem);

// ingredients.forEach((ingr) => {
//   console.log(ingr);
//   Lilist.textContent = ingr;
//   UlIng.prepend(Lilist);
// });

// Jora.append();

// const Jora = document.getElementById("ingredients");
// ingredients.forEach((ingredient) => {
//   const JoraList = document.createElement("li");
//   JoraList.textContent = ingredient;
//   JoraList.classList.add("item");
//   Jora.appendChild(JoraList);
// });

// const JoraList = document.createElement("li");
// JoraList.textContent = "dds";
// JoraList.classList.add("item");
// Jora.appendChild(JoraList);
