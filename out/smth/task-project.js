// declare vars
var form = document.querySelector('#task-form');
var taskList = document.querySelector('.collection');
var clearBtn = document.querySelector('.clear-tasks');
var filter = document.querySelector('#filter');
var taskInput = document.querySelector('#task');
//load event listeners
function loadEventListener() {
    form.addEventListener('submit', addTask);
}
function addTask(e) {
    if (taskInput.value === '') {
        alert('add something');
    }
    e.preventDefault();
}
