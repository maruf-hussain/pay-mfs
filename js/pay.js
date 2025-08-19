// document.getElementById("addmoney").addEventListener('click', function() {
//     const amount = document.getElementById("amount").value;
//     const pin = document.getElementById("pin").value;

//     if (amount && pin) {
//         alert(`Added ${amount} successfully!`);


//         // Update balance display
//         document.getElementById("balance").textContent = parseInt(document.getElementById("balance").textContent) + parseInt(amount);

//     } else {
//         alert("Please enter both amount and pin.");
//     }
// });



document.getElementById('addmoney').addEventListener('click', function(){
    const amount = parseFloat(document.getElementById('amount').value);
    const pin = document.getElementById('pin').value;
        if(pin === '1234'){

        const balance = parseFloat(document.getElementById('balance').innerText);
        // const amountNumber = parseFloat(amount);
        // const balanceNumber = parseFloat(balance)
        const updateBalance = amount + balance;
        document.getElementById('balance').innerText = updateBalance;
      

    }

    else{
        alert('please try again right way....')
    }
})