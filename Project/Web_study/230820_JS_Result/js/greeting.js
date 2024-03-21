const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");

function paintGreeting(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove("hidden");
  loginForm.classList.add("hidden");
}

function onSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
}

if (savedUsername === null) {
  loginForm.addEventListener("submit", onSubmit);
} else {
  paintGreeting(savedUsername);
}
