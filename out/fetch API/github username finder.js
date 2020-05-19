var username = document.querySelector('#username'), searchBtn = document.querySelector('#search-btn'), message = document.querySelector('#message'), output = document.querySelector('#output'), errorDisappearTime = 3000;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.searchUser = function (user) {
        // console.log(user);
        fetch("https://api.github.com/users/" + user)
            .then(function (res) {
            if (res.status === 200) {
                var style = new STYLE;
                style.setMessage(user + " found", 'green');
                displayUser(user);
            }
            else {
                var style = new STYLE;
                style.setMessage("Error : " + res.status + ", " + user + " not found", 'red');
                output.innerHTML = '';
            }
        })["catch"](function (error) {
            var style = new STYLE;
            style.setMessage('some network error');
            output.innerHTML = '';
        });
    };
    return UI;
}());
var STYLE = /** @class */ (function () {
    function STYLE() {
    }
    STYLE.prototype.setMessage = function (msg, color) {
        message.textContent = msg;
        message.style.color = color;
        setTimeout(function () {
            message.textContent = '';
        }, errorDisappearTime);
    };
    return STYLE;
}());
function displayUser(user) {
    output.innerHTML = '';
    var a = document.createElement('a');
    a.setAttribute('href', "https://github.com/" + user);
    a.textContent = 'Click here to see';
    output.appendChild(a);
}
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var user = username.value;
    if (user === '') {
        var style = new STYLE;
        style.setMessage('Error: username cannot be empty.', 'red');
    }
    else {
        UI.searchUser(user);
    }
});
