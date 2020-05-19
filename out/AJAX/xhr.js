// document.querySelector('.btn').addEventListener('click', loadData);
// function loadData(){
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'xhr.txt', true);
//   xhr.onload = function(){
//     console.log(this.status, this.responseText);
//   }
//   xhr.send();
// }
var customerBtn = document.getElementById('customerBtn'), customersBtn = document.getElementById('customersBtn');
customerBtn.addEventListener('click', getCustomer);
customersBtn.addEventListener('click', getCustomers);
function getCustomer() {
    var customer = document.getElementById('customer');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'xhr1.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            var customerData = JSON.parse(this.responseText);
            customer.innerHTML = "\n        <li>" + customerData.name + " <br>(" + customerData.id + ") <br>" + customerData.company + " <br>" + customerData.phone + "</li>\n      ";
        }
    };
    xhr.send();
}
function getCustomers() {
    var customers = document.getElementById('customers');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'xhr2.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            var customerData = JSON.parse(this.responseText);
            customerData.forEach(function (customer) {
                customers.innerHTML += "\n        <li>" + customer.name + " <br>(" + customer.id + ") <br>" + customer.company + " <br>" + customer.phone + "</li>\n      ";
            });
        }
    };
    xhr.send();
}
// professional 214920@UditP#
// social 214920@UditS#
