const inputName = document.querySelector('.input-name');
const inputComment = document.querySelector('.input-comment');
const submitButton = document.querySelector('.btn-secondary');

loadEventListeners();
function loadEventListeners(){
  submitButton.addEventListener('click',submitComment);
}
function submitComment(){
  let name = inputName.value;
  let comment = inputComment.value;
  if( name === '' || comment === '' ){
    alert('One or more fields are empty.. Please fill in all the fields and then proceed');
  } else {
    let object = {
      "name" : name ,
      "comment" : comment 
    };
    storeToLS(object);
  }
  
}

function storeToLS(object){
  let objects;
  if (localStorage.getItem('objects') === null){
    objects = [];
  } else {
    objects = JSON.parse('objects');
  }
  objects.push(object);
  localStorage.setItem('objects',objects);
}