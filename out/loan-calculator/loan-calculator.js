var loading = document.getElementById('loading');
var results = document.getElementById('results');
document.getElementById('calculate').addEventListener('click', function (e) {
    loading.style.display = 'block';
    results.style.display = 'none';
    setTimeout(calculateInterest, 2000);
    e.preventDefault;
});
function calculateInterest() {
    var amount = document.getElementById('amount');
    var interest = document.getElementById('interest');
    var years = document.getElementById('years');
    var monthlyPayment = document.getElementById('monthly-payment');
    var totalPayment = document.getElementById('total-payment');
    var totalInterest = document.getElementById('total-interest');
    var principal = parseFloat(amount.value);
    var calculatedInterest = parseFloat(interest.value) / 1200;
    var calculatedPayment = parseFloat(years.value) * 12;
    var x = Math.pow(calculatedInterest + 1, calculatedPayment);
    var monthly = principal * x * calculatedInterest / (x - 1);
    loading.style.display = 'none';
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
        results.style.display = 'block';
    }
    else {
        showError('please check numbers');
        results.style.display = 'none';
    }
}
function showError(error) {
    var errorDiv = document.createElement('div');
    var card = document.querySelector('.card');
    var heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    setTimeout(removeError, 2000);
}
function removeError() {
    document.querySelector('.alert').remove();
}
