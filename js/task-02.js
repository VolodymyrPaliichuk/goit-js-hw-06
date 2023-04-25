const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient) => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.textContent = ingredient;
  ingredientsListItem.classList.add("item");
  return ingredientsListItem;
});

ingredientsList.append(...markup);
