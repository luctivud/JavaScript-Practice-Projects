var inputName = document.querySelector('.input-name');
var inputComment = document.querySelector('.input-comment');
var submitButton = document.querySelector('.btn-secondary');
loadEventListeners();
function loadEventListeners() {
    submitButton.addEventListener('click', submitComment);
}
function submitComment() {
    var name = inputName.value;
    var comment = inputComment.value;
    if (name === '' || comment === '') {
        alert('One or more fields are empty.. Please fill in all the fields and then proceed');
    }
    else {
        var object = {
            "name": name,
            "comment": comment
        };
        storeToLS(object);
    }
}
function storeToLS(object) {
    var objects;
    if (localStorage.getItem('objects') === null) {
        objects = [];
    }
    else {
        objects = JSON.parse('objects');
    }
    objects.push(object);
    localStorage.setItem('objects', objects);
}
