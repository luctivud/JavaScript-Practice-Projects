const username = document.querySelector('#username'),
      searchBtn = document.querySelector('#search-btn'),
      message = document.querySelector('#message'),
      output = document.querySelector('#output'),
      errorDisappearTime = 3000;



class UI {
  static searchUser(user){
    // console.log(user);
    fetch(`https://api.github.com/users/${user}`)
    .then((res)=>{
      if(res.status === 200){
        let style = new STYLE;
        style.setMessage(`${user} found`,'green')
        displayUser(user);
      } else {
        let style = new STYLE;
        style.setMessage(`Error : ${res.status}, ${user} not found`,'red')
        output.innerHTML='';
      }
    })
    .catch((error)=>{
      let style =  new STYLE;
      style.setMessage('some network error');
      output.innerHTML='';
    });
  }
}

class STYLE {
  setMessage(msg,color){
    
    message.textContent = msg;
    message.style.color = color;
    setTimeout(()=>{
      message.textContent ='';
    },errorDisappearTime)
  }
}

function displayUser(user){
  output.innerHTML='';
  let a = document.createElement('a');
  a.setAttribute('href',`https://github.com/${user}`);
  a.textContent = 'Click here to see';
  output.appendChild(a);
}

searchBtn.addEventListener('click',e => {
  e.preventDefault();
  let user = username.value;
  if( user === ''){
    let style = new STYLE;
    style.setMessage('Error: username cannot be empty.','red');
  } else {
    UI.searchUser(user);

  }
     
});

