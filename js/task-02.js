const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newIngredients = document.querySelector('ul');
const createList = ingredients.map(ingredient => {
  const listElement = document.createElement("li");
  listElement.textContent = ingredient;
  listElement.classList.add("item");
  newIngredients.append(listElement);
 });
