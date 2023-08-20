const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingForm = document.querySelector("#greetingForm");
const greeting = document.querySelector("#greeting");
const savedusername = localStorage.getItem("username");
const logOut = document.querySelector("#log-out");

function onSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  paintGreeting(username);
  localStorage.setItem("username", username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello, ${username}`;
  greetingForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
}

function onLogOut() {
  localStorage.removeItem("username");
  greeting.innerText = "";
  greetingForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
}

logOut.addEventListener("click", onLogOut);

if (savedusername === null) {
  loginForm.addEventListener("submit", onSubmit);
} else {
  paintGreeting(savedusername);
}
