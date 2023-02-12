// step - 1: add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    // console.log(email);

    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    console.log(email, password);

    if (email === 'sontan@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('invalid user');
    }
})