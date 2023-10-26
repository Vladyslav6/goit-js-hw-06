const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");
const DomOptim = document.createDocumentFragment();

ingredients.forEach((ingr) => {
  const list = document.createElement("li");
  list.textContent = ingr;
  list.classList.add("item");
  DomOptim.appendChild(list);
});
ulIngredients.appendChild(DomOptim);
// const UlIng = document.querySelector("#ingredients");
// let CreLi;
// CreLi.classList.add("item");
// CreLi = document.createElement("li");
// ingredients.map((ingr) => {
//   CreLi.textContent = ingr;
//   UlIng.append(CreLi);
// });

// const UlIng = document.querySelector("#ingredients");
// let CreLi = document.createElement("li");
// CreLi.classList.add("item");
// const ingrList = ingredients.map((ingr) => `${CreLi}`).join("");
// UlIng.innerHTML = ingrList;

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
