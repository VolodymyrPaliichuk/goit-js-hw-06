// const categories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categories.length}`);
// categories.forEach((category) => {
//   console.log(`Category: ${category.firstElementChild.textContent}`);
//   console.log(`Elements: ${category.querySelectorAll("li").length}`);
// });

const categoriList = document.querySelector("#categories");

console.log(
  `Number of categories: ${categoriList.getElementsByTagName("h2").length}`
);

const categoryItem = document.querySelectorAll(".item");

categoryItem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements: ${item.firstElementChild.nextElementSibling.children.length}`
  );
});
