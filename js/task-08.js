const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const userID = Math.round(Math.random() * 100);
const resetButton = document.querySelector('#reset');



const registerUser = event => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  else if (email.value === localStorage.getItem("email")){
    return alert("Email is already used.")}
    else {
  localStorage.setItem("ID", userID);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  alert("Your account have been create.");
  event.currentTarget.reset();
  }};

registerForm.addEventListener("submit", registerUser);
loginForm.addEventListener("submit", loginCheck);

function loginCheck(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  if (email.value === localStorage.getItem("email") && password.value === localStorage.getItem("password")){
    console.log(localStorage);
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  alert('Login success!');
  event.currentTarget.reset();
  }
  else{
    alert("Please write correct login and password.")
  }
}
resetButton.addEventListener("click", () => {
  window.localStorage.clear();
  alert('Local storage has been reset.')
});
