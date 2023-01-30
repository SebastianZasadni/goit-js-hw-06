const items = document.querySelectorAll('#categories .item');
const numberOfCategories = items.length;
console.log(`Number of categories: ${numberOfCategories}`);


for (const item of items)
{
    const category = item.querySelector('H2').textContent;
    console.log(`Category: ${category}`);
    const numberOfElements = item.querySelectorAll(`li`).length;
    console.log(`Elements: ${numberOfElements}`);
}








