document.getElementById('login-btn').addEventListener('click', function() {
   const phoneNumber = document.getElementById('phone').value;
    const pinNumber = document.getElementById('pin').value;

    if(phoneNumber === '11' && pinNumber === '1234') {
        alert('Login successful');
        window.location.href = '/home.html';
    }
    else{
        alert('Invalid phone er or pin');
    }
 
   
}); 