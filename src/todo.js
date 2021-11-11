// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

let counter = 0;

// Evenet Listeners
todoButton.addEventListener("click", addList);
filterOption.addEventListener("click", filterTodo);

// Functions
function addList(event) {
  if (todoInput.value.trim() === "") {
    return;
  }
  //Create list element
  const todoDiv = document.createElement("li");
  todoDiv.setAttribute("id", `todo-${counter}`);
  todoDiv.classList.add("todo");

  //create div element
  const newList = document.createElement("div");
  newList.innerText = todoInput.value;
  newList.classList.add("todo-item");
  todoDiv.appendChild(newList);

  //Second div element for buttons
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("todo-btns");
  todoDiv.appendChild(buttonDiv);

  //Check mark button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  completeButton.addEventListener("click", completion);
  completeButton.dataset["id"] = counter;
  buttonDiv.appendChild(completeButton);

  //Set alarm button
  const alarmButton = document.createElement("button");
  alarmButton.innerHTML = '<i class="fas fa-bell"></i>';
  alarmButton.classList.add("alarm-btn");
  alarmButton.addEventListener("click", setAlarm);
  alarmButton.dataset["id"] = counter;
  buttonDiv.appendChild(alarmButton);

  //Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.classList.add("delete-btn");
  deleteButton.dataset["id"] = counter;
  deleteButton.addEventListener("click", deleteMark);
  buttonDiv.appendChild(deleteButton);

  //Appending todoDiv to the Unordered List
  todoList.appendChild(todoDiv);

  //Clear input value
  todoInput.value = "";
  counter++;
}

function deleteMark(event) {
  //Delete list
  const item = event.target;
  const itemCounter = item.dataset["id"];
  const todoListItem = document.querySelector(`#todo-${itemCounter}`);
  if (todoListItem) {
    todoListItem.remove();
  }
  
}

function setAlarm(){
//

}

function completion(e) {
  //Completed mark - make changes
  const item = e.target;
  const itemCounter = item.dataset["id"];
  const todoListItem = document.querySelector(`#todo-${itemCounter}`);
  if (todoListItem) {
    todoListItem.classList.toggle("completed");
  }
}

function filterTodo(e) {
  //creating the options to be selected from
  const status = e.target.value;
  const todoListItems= document.querySelectorAll('.todo');

  if(todoListItems.length > 0){
    todoListItems.forEach((item)=>{
      if(!item.classList.contains("disappear")){
        item.classList.add("disappear");
      }
    });

    if(status === "all"){
      todoListItems.forEach((item)=>{
        item.classList.remove("disappear");
      });
    } else if(status === 'completed'){
      todoListItems.forEach((item)=>{
        if(item.classList.contains("completed")){
          item.classList.remove("disappear");
        }
      });
    }
     else if(status === 'uncompleted'){
      todoListItems.forEach((item)=>{
        if(!item.classList.contains("completed")){
          item.classList.remove("disappear");
        }
      });
    }
  }
}
