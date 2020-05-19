// document.querySelector('.btn').addEventListener('click', loadData);

// function loadData(){
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'xhr.txt', true);
  
//   xhr.onload = function(){
//     console.log(this.status, this.responseText);
//   }
//   xhr.send();
// }


const customerBtn = document.getElementById('customerBtn'),
      customersBtn = document.getElementById('customersBtn');

customerBtn.addEventListener('click',getCustomer);
customersBtn.addEventListener('click',getCustomers);

function getCustomer(){
  const customer = document.getElementById('customer');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'xhr1.json', true);
  xhr.onload = function (){
    if (this.status === 200){
      // console.log(this.responseText);
      let customerData = JSON.parse(this.responseText);
      
      customer.innerHTML = `
        <li>${customerData.name} <br>(${customerData.id}) <br>${customerData.company} <br>${customerData.phone}</li>
      `;
    }
  }
  xhr.send();
}

function getCustomers(){
  const customers = document.getElementById('customers');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'xhr2.json', true);
  xhr.onload = function (){
    if (this.status === 200){
      // console.log(this.responseText);
      let customerData = JSON.parse(this.responseText);
      customerData.forEach(customer => {
        customers.innerHTML += `
        <li>${customer.name} <br>(${customer.id}) <br>${customer.company} <br>${customer.phone}</li>
      `;
      });
      
    }
  }
  xhr.send();
}

// professional 214920@UditP#
// social 214920@UditS#