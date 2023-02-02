const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.addEventListener("input", (event) => {
    const inputValue = fontSizeControl.value;
    text.style.fontSize = `${inputValue}0%`;
      });