var loginF = document.forms['login-form'];

var email = loginF.email;
var password = loginF.password;
var emailErr = document.querySelector('.error-email');
var passwordErr = document.querySelector('.error-password');

var emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

loginF.onsubmit = function() {

    email.classList.add('error')
    password.classList.add('error')
    if (email.value =='') {
        let element = document.getElementById('exampleInputEmail1');
        element.style.border='1px solid red';
        emailErr.innerHTML = "Please enter a valid email address.";;
    } else if (email.value.length < 3) {
        let element = document.getElementById('exampleInputEmail1');
        element.style.border='1px solid red';
        emailErr.innerHTML = "Please enter a valid email address.";
    } else if (email.value.length > 30) {
        let element = document.getElementById('exampleInputEmail1');
        element.style.border='1px solid red';
        emailErr.innerHTML = "Please enter a valid email address.";
        
    } else if (!emailTest.test(email.value)) {
        let element = document.getElementById('exampleInputEmail1');
        element.style.border='1px solid red';
        emailErr.innerHTML = "Please enter a valid email address.";
    }
     else {
        let element = document.getElementById('exampleInputEmail1');
        element.style.border='1px solid #495057';
        emailErr.innerHTML = '';
        email.classList.remove('error')
    }

    if (password.value =='') {
        let element = document.getElementById('exampleInputPassword1');
        element.style.border='1px solid red';
        passwordErr.innerHTML = "Please enter a password.";;
       
    } else {
        passwordErr.innerHTML = '';
        password.classList.remove('error');
        location.assign('index.html')
    }

    return false;
}