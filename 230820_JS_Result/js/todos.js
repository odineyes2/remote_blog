const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "toDos";

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(btn);

  document.body.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo(toDos);
}

function saveToDo(toDos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDo(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoOjb = {
    text: newToDo,
    id: Date.now()
  };
  toDos.push(newToDoOjb);
  paintToDo(newToDoOjb);
  saveToDo(toDos);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  todoForm.addEventListener("submit", handleToDo);
} else {
  todoForm.addEventListener("submit", handleToDo);
}
