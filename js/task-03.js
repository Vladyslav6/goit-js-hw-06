const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ImagesGalary = document.querySelector(".gallery");
// console.log(ImagesGalary);

const forMap = images
  .map(
    (Number) =>
      `<li><img class="list-ul" src="${Number.url}" alt="${Number.alt}"></li>`
  )
  .join("");
ImagesGalary.insertAdjacentHTML("beforeend", forMap);

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

{
  /* <img
  src="https://picua.org/images/2019/02/26/150c036ac097ebbdc9b953752a8e62af.jpg"
  alt="Зима"
/>; */
}
