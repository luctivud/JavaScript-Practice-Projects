
const loading = document.getElementById('loading');
const results = document.getElementById('results');

document.getElementById('calculate').addEventListener('click',function(e){
  loading.style.display = 'block';
  results.style.display = 'none';
  setTimeout(calculateInterest,2000);
  e.preventDefault;
});


function calculateInterest(){
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 1200 ;
  const calculatedPayment = parseFloat(years.value) * 12 ;

  const x = Math.pow(calculatedInterest + 1, calculatedPayment) ;
  const monthly = principal * x * calculatedInterest / (x-1) ;

  loading.style.display = 'none';
  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment)-principal).toFixed(2);
    results.style.display = 'block';
  } else {
     showError('please check numbers');
     results.style.display = 'none';
  }

}

function showError(error){
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);
  setTimeout(removeError,2000);
}



function removeError(){
  document.querySelector('.alert').remove();
}