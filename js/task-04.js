let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

const lower = () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
}
const increase = () => {
counterValue += 1;
value.innerHTML = counterValue;
}

decrement.addEventListener("click", lower);
increment.addEventListener("click", increase);

    