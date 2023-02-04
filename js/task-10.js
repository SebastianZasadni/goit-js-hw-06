function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
input.style.outline = "none";
console.log(input);
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy');
const amount = document.querySelector('input');
const boxes = document.querySelector('#boxes');

const createBox = `<div id="box"></div>`;

amount.addEventListener("input", () => {
  const amountBoxes = amount.value;
  if (amountBoxes > 100 || amountBoxes < 1){
           boxes.innerHTML = "Please write 1-100";
           amount.style.borderColor = "red";
                           }
                           else
                           {
                          boxes.innerHTML = "";
                          amount.style.borderColor = "green";
                           }
                          });
                         
  const createBoxes = () => {
        let width = 20;
        let height = 20;
        const amountBoxes = amount.value;
    if (amountBoxes > 100 || amountBoxes < 1){
      return boxes.innerHTML = "Error! You have to type numbers between 1-100!";
    }
    else{
          
         for (let i = 0; i < amountBoxes; i++){
        const amountBoxes = amount.value;
        boxes.insertAdjacentHTML("afterend", createBox);
        const box = document.querySelector('#box');
        width += 10;
        height += 10;
        box.style.width = width + "px";
        box.style.height = height + "px";
        box.style.margin = "10px";
        box.style.backgroundColor = getRandomHexColor();               
    }
  }};

  const destroyBoxes = () => {
    document.location.reload();
        
  };

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

