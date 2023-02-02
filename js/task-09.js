function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeButton = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const changeColor = () => {
  const bgColor = getRandomHexColor();
  spanColor.innerHTML = bgColor;
  body.style.backgroundColor = bgColor;
};

changeButton.addEventListener("click", changeColor);
