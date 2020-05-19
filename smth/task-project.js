// declare vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load event listeners
function loadEventListener(){
  form.addEventListener('submit',addTask);
}

function addTask(e){
  if(taskInput.value === ''){
    alert('add something');
  }
  e.preventDefault();
}