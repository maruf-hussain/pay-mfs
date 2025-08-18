document.getElementById('login-btn').addEventListener('click', function() {
   const phoneNumber = document.getElementById('phone').value;
    const pinNumber = document.getElementById('pin').value;

    if(phoneNumber === '10' && pinNumber === '1234') {
        alert('Login successful');
        window.location.href = 'dashboard.html';
    }
    else{
        alert('Invalid phone er or pin');
    }
 
   
}); 