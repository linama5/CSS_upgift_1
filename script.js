
//check if JS file is loaded
console.log("script.js is loaded");

//selectors

const toDoInput = document.querySelector(".taskInput");
const toDoButton = document.querySelector(".addButton");
const toDoList = document.querySelector(".todoList");

//event listeners

toDoButton.addEventListener("click", addingTask);
//toDoList.addEventListener("click", eventClick);



//functions


function addingTask(event) {
    event.preventDefault();
  
    //verifying that the text field is no empty
    if (!toDoInput.value) {
      alert("Please type your task");
      return false;
    } else {

      //create a div in HTML
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
  
      //create list and adding it to the div
  
      const newTodo = document.createElement("li");
      newTodo.innerText = toDoInput.value;
      newTodo.classList.add("taskItem");
      todoDiv.appendChild(newTodo);

      //append div to the list we have in HTML
    toDoList.appendChild(todoDiv);
    }
}  