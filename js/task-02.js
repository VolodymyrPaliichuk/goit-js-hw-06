const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

// for (const ingredient of ingredients) {
//   const ingredientsItem = document.createElement("li");
//   ingredientsItem.className = "item";
//   ingredientsItem.textContent = ingredient;
//   ingredientsList.prepend(ingredientsItem);
// }

const markup = ingredients.map((ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.className = "item";
  ingredientsItem.textContent = ingredient;
  return ingredientsItem;
});

ingredientsList.prepend(...markup);
