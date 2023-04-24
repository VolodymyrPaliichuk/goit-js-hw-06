const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.textContent = ingredient;
  ingredientsListItem.classList.add("item");
  ingredientsList.append(ingredientsListItem);
});
