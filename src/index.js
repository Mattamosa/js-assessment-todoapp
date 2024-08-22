import "./styles.css";

// initial todos
// DO NOT EDIT THIS ARRAY
// You may add props to objects if needed.
let todos = [
  {
    todoID: 0,
    todoText: "Finish Homework",
    todoComplete: false,
  },
  {
    todoID: 1,
    todoText: "Walk the dog",
    todoComplete: true,
  },
  {
    todoID: 2,
    todoText: "Clean my room",
    todoComplete: false,
  },
];

// .inputField input | .inputField button |
// constructor | trim |

class Todo {
  constructor(todoID, todoText, todoComplete) {
    this.todoID = todoID;
    this.todoText = todoText;
    this.todoComplete = todoComplete;
  }
}

const inputField = document.querySelector(".inputField input");
const addButton = document.querySelector(".inputField button");

function addTodo() {
  const newTodoText = inputField.value.trim();
  if (newTodoText !== "") {
    const newTodo = new Todo(todos.length, newTodoText, false);
    todos.push(newTodo);

    const newListItem = document.createElement("li");
    newListItem.innerText = newTodoText;
    if (newTodo.todoComplete) {
      newListItem.classList.add("done");
    }
    newListItem.innetHTML += `<span>i class="fa fa-trash"></i></span>`;
    document.querySelector(".todoList").appendChild(newListItem);

    inputField.value = "";
  }
}

addButton.addEventListener("click", addTodo);
inputField.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

const todoList = document.querySelector(".todoList");

function toggleTodo(todoElement) {
  //need to parse todo element info
}
