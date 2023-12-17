function updateBalanceDisplay() {
    var currentBalance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;
    document.getElementById('balance').innerHTML = currentBalance.toFixed(2);
  }
    function deposit() {
        var amount = parseFloat(document.getElementById('dep').value);
        if (isNaN(amount) || amount <= 0) {
          alert('Please enter a valid amount to deposit.');
          return;
        }
        var currentBalance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;
        var updatedBalance = currentBalance + amount;
        localStorage.setItem('balance', updatedBalance);
        updateBalanceDisplay();
        alert('Successfully deposited ' + amount + '.');
        
      }
      function withdraw() {
        var amount = parseFloat(document.getElementById('with').value);
        if (isNaN(amount) || amount <= 0) {
          alert('Please enter a valid amount to withdraw.');
          return;
        }
        var currentBalance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;
        if (amount > currentBalance) {
          alert('Insufficient balance.');
          return;
        }
        var updatedBalance = currentBalance - amount;
        localStorage.setItem('balance', updatedBalance);
        updateBalanceDisplay();
        alert('Successfully withdrawn $' + amount.toFixed(2) + '.');
      }
      
      // Display initial balance
      updateBalanceDisplay();
function logout()
{
    localStorage.clear()
    window.location='./index.html'
}