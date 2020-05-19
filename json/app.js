
// let users = [
//   {
//     id : 1234,
//     name : 'tanishq',
//     present: '',
//     absent: ''
//   }
// ]
class User{
  constructor(userId, userName){
    this.userId = userId;
    this.userName = userName;
    this.present = '';
    this.absent = '';
  }
}

class UI {
  addUser(user){
    const display = document.querySelector('.display');
    let list = document.createElement('ul');
    list.innerHTML = `
    <li> USER_ID: (${user.userName})<br> NAME: ${user.userId}</li>
    `;
    display.appendChild(list);
  }
}

class Store{
  static getUser(){
    let users;
    if(localStorage.getItem('user') === null){
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem('user'));
    }
    return users;
  }

  static addUser(user){
    let users = Store.getUser();
    users.push(user);
    localStorage.setItem('user',JSON.stringify(users));
  }

  static displayUser(user){
    let users = Store.getUser();
    users.forEach((user)=>{
      const ui = new UI();
      ui.addUser(user);
    })
  }

}


document.querySelector('#user-form').addEventListener('submit',(e) =>{
  const userId = document.getElementById('user-name').value,
        userName = document.getElementById('user-id').value;
  const user = new User(userId,userName),
        ui = new UI();
  ui.addUser(user);
  Store.addUser(user);

  e.preventDefault();
})
