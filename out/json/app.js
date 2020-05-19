// let users = [
//   {
//     id : 1234,
//     name : 'tanishq',
//     present: '',
//     absent: ''
//   }
// ]
var User = /** @class */ (function () {
    function User(userId, userName) {
        this.userId = userId;
        this.userName = userName;
        this.present = '';
        this.absent = '';
    }
    return User;
}());
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.addUser = function (user) {
        var display = document.querySelector('.display');
        var list = document.createElement('ul');
        list.innerHTML = "\n    <li> USER_ID: (" + user.userName + ")<br> NAME: " + user.userId + "</li>\n    ";
        display.appendChild(list);
    };
    return UI;
}());
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.getUser = function () {
        var users;
        if (localStorage.getItem('user') === null) {
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem('user'));
        }
        return users;
    };
    Store.addUser = function (user) {
        var users = Store.getUser();
        users.push(user);
        localStorage.setItem('user', JSON.stringify(users));
    };
    Store.displayUser = function (user) {
        var users = Store.getUser();
        users.forEach(function (user) {
            var ui = new UI();
            ui.addUser(user);
        });
    };
    return Store;
}());
document.querySelector('#user-form').addEventListener('submit', function (e) {
    var userId = document.getElementById('user-name').value, userName = document.getElementById('user-id').value;
    var user = new User(userId, userName), ui = new UI();
    ui.addUser(user);
    Store.addUser(user);
    e.preventDefault();
});
