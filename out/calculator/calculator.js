var input = document.querySelector('#input');
var container = document.querySelector('.container');
var numbers = document.querySelector('.num');
input.value = '';
var inputValue = '';
loadEventListeners();
function loadEventListeners() {
    input.addEventListener('keyup', store);
    container.addEventListener('click', print);
}
function store(e) {
    var hehe = e.keycode;
    console.log(String(hehe));
    if (e.keycode > '46') {
        console.log('yr');
        inputValue += String.fromCharCode(e.keyCode);
        input.innerText = inputValue;
    }
    else {
    }
}
function print(e) {
    if (e.target.classList.contains('print')) {
        inputValue = inputValue + e.target.innerText;
        input.value = '';
        input.value = inputValue;
    }
    else {
    }
}
