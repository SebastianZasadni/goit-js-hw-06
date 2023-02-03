let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
decrement.setAttribute("class", "disabled"); 
const lower = () => {
    if (value.textContent < 1){
        decrement.setAttribute("class", "disabled"); 
            }
    else{
    counterValue -= 1;
    value.innerHTML = counterValue;
    if (value.textContent < 1){
        decrement.setAttribute("class", "disabled"); 
            }
    }
}  
const increase = () => {
    decrement.setAttribute("class", null); 
    counterValue += 1;
value.innerHTML = counterValue;
}

decrement.addEventListener("click", lower);
increment.addEventListener("click", increase);

    