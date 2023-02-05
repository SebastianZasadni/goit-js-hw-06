const form = document.querySelector(".login-form");
const email = document.querySelector('[name="email"]');
const localEmail = localStorage.getItem("email");
email.value = localEmail;

email.addEventListener("input", () => {
  localStorage.setItem("email", email.value);
    });

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
  window.localStorage.clear();
};



