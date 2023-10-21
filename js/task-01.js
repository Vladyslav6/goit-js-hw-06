const listcategory = document.querySelectorAll("#categories .item");
console.log("Number of categories:", listcategory.length);

const forCater = listcategory.forEach((number, index) => {
  const findh2 = number.querySelector(".item h2");
  console.log("Category:", findh2.textContent);

  const liLength = number.querySelectorAll("li");
  console.log(liLength.length);
});
