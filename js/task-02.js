const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const list = document.createElement("li");
const markup = ingredients.map((ingredient) => {
  return `<li class="item">${ingredient}</li>`;
});
const newMarkup = markup.join("");
list.innerHTML = newMarkup;
ingredientsList.append(list);
