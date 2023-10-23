const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const Jora = document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
  const JoraList = document.createElement("li");
  JoraList.textContent = ingredient;
  JoraList.classList.add("item");
  Jora.appendChild(JoraList);
});
