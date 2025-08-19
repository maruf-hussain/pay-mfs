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
    const addAmount = document.getElementById('amount').value;
    console.log(addAmount)

})