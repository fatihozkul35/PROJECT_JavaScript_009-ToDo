let input = document.querySelector(".input");
const add = document.querySelector(".add");
const todoList = document.querySelector(".toDoList");
const inProgressList = document.querySelector(".inProgressList");
const doneList = document.querySelector(".doneList");

const inputSection = document.querySelector(".inputSection");

let todos = document.querySelectorAll(".todo");
let todosInprogress = document.querySelectorAll(".inprogress");

//*******************Loading page...*****************/

loadPage();
function loadPage() {
  document.addEventListener("DOMContentLoaded", allStorage());
}

//*********Todo adding into the TO DO list */
eventListener();
function eventListener() {
  add.addEventListener("click", function () {
    if (!input.value) {
      createWarning();
      return;
    } else {
      createNewTodo(todoList, "todo");
    }
  });
}

//*********Todo to inProgress */

setTimeout(todoToinprogress(), 5000);

function todoToinprogress() {
  for (let i of todos) {
    i.addEventListener("click", function () {
      setLocalStorage(i.textContent, "inprogress");
      inProgressList.appendChild(i);
      i.className = "inprogress";
    });
  }
}

//***************functions */

function createWarning() {
  if (!input.value) {
    const todo = document.createElement("li");
    todo.textContent = "🤬 Bir todo giriniz...";
    const warning = document.createElement("ul");
    warning.style.listStyleType = "none";
    warning.appendChild(todo);
    inputSection.appendChild(warning);
    setTimeout(function () {
      inputSection.lastElementChild.remove();
    }, 2000);
  }
}

function createNewTodo(where, name) {
  // where; where you wanna add to something
  // val; value can be just "todo","inprogress","done"
  const newTodo = document.createElement("a");
  newTodo.className = name;
  newTodo.textContent = input.value;
  where.appendChild(newTodo);
  setLocalStorage(newTodo.textContent, name);
  todos = document.querySelectorAll(".todo");
  input.value = "";
}

function setLocalStorage(k, v) {
  localStorage.setItem(k, v);
}

function allStorage() {
  const keysOfTodos = Object.keys(localStorage); ///['dsdsd', 'asd', 'ddddd']
  keysOfTodos.forEach(function (e) {
    input.value = e;
    if (localStorage.getItem(e) == "todo") {
      createNewTodo(todoList, localStorage.getItem(e));
    } else if (localStorage.getItem(e) == "inprogress") {
      createNewTodo(inProgressList, localStorage.getItem(e));
    } else {
      createNewTodo(doneList, localStorage.getItem(e));
    }
  });
}
console.log(todosInprogress);
//**************test section */
