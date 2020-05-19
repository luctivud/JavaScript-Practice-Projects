var form = document.querySelector('#add-tasks');
var taskList = document.querySelector('.collection');
var clearAll = document.querySelector('.clear-all');
var filter = document.querySelector('#filter');
var taskInput = document.querySelector('#task');
// let val = document.querySelector('button');
// val.addEventListener('click',function(){
//   console.log('yes');
// })
loadEventListeners();
// let i = 0;
function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', addToScreen);
    form.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);
    clearAll.addEventListener('click', removeAll);
    filter.addEventListener('keyup', filterTasks);
}
function addToScreen() {
    var tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        var link = document.createElement('a');
        link.innerHTML = '&times;';
        link.setAttribute('href', '#');
        link.className = 'delete-item';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}
function addTask(e) {
    // i++;
    if (taskInput.value === '') {
        alert('empty task');
    }
    else {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value));
        var link = document.createElement('a');
        link.innerHTML = '&times;';
        link.setAttribute('href', '#');
        link.className = 'delete-item';
        li.appendChild(link);
        taskList.appendChild(li);
        addToLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    // taskInput.value = i;
    e.preventDefault();
}
function addToLocalStorage(task) {
    var tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function removeTask(e) {
    if (e.target.classList.contains('delete-item')) {
        if (confirm('Are you sure to delete this item?')) {
            e.target.parentElement.remove();
            removeFromLS(e.target.parentElement);
        }
    }
}
function removeFromLS(taskItem) {
    var tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
        if (taskItem.firstChild.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function removeAll(e) {
    if (e.target.classList.contains('clear-all-btn')) {
        if (confirm('delete all?')) {
            while (taskList.lastChild) {
                taskList.removeChild(taskList.lastChild);
            }
            localStorage.clear();
        }
    }
}
function filterTasks(e) {
    var text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(function (task) {
        console.log(task.firstChild);
        var item = task.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });
}
// localStorage.setItem('obj',taskInput.value);
// ////////////////////////////////////////////////////////////////////////////////////////////////////
// const numberField = document.querySelector('.number-field');
// activateListener();
// function activateListener(){
//   numberField.addEventListener('keyup',print);
// }
// var number;
// function print(e){
//   number = Number(e.target.value);
//   console.log(number);
// }
// let cont = document.querySelectorAll('.converted-number');
//LAERNING LOCAL STORAGE
// w i t h  a r r a y s
// let num =[12,24,36,65] ;
// localStorage.setItem('keys',JSON.stringify(num));
// let yes = JSON.parse(localStorage.getItem('keys'));
// console.log(yes);
// w i t h  o b j e c t
// localStorage.clear();
// let something = {
//   name : 'udit' ,
//   title : 'gupta' ,
//   age : 20 ,
//   gender : 'male'
// };
// localStorage.setItem('its',JSON.stringify(something));
// let its = JSON.parse(localStorage.getItem('its'));
// console.log(its);
// u s i n g  f o r e a c h 
