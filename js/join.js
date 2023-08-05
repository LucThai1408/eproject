var joinF = document.forms['join-form'];

var email = joinF.email;
var password = joinF.password;
var firstname = joinF.firstname;
var lastname = joinF.lastname;
var year = joinF.year;
var emailErr = document.querySelector('.error-email');
var passwordErr = document.querySelector('.error-password');
var firstnameErr = document.querySelector('.error-firstname');
var lastnameErr = document.querySelector('.error-lastname');
var yearErr = document.querySelector('.error-year');
var emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

joinF.onsubmit = function() {

    email.classList.add('error')
    password.classList.add('error')
    firstname.classList.add('error')
    lastname.classList.add('error')
    year.classList.add('error')
    if (email.value =='') {
        let element = document.getElementById('exampleInputEmail1');
        element.style.border='1px solid red';
        emailErr.innerHTML = "Please enter a valid email address.";;
    } else if (email.value.length < 3) {
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
        location.assign('login.html')
    }



    if (firstname.value =='') {
        let element = document.getElementById('exampleInputFirstName');
        element.style.border='1px solid red';
        firstnameErr.innerHTML = "Please enter a valid email address.";
    } else {
        let element = document.getElementById('exampleInputFirstName');
        element.style.border='1px solid #495057';
        firstnameErr.innerHTML = '';
        firstname.classList.remove('error')
    }


    if (lastname.value =='') {
        let element = document.getElementById('exampleInputLastName');
        element.style.border='1px solid red';
        lastnameErr.innerHTML = "Please enter a valid email address.";
    } else {
        let element = document.getElementById('exampleInputLastName');
        element.style.border='1px solid #495057';
        lastnameErr.innerHTML = '';
        lastname.classList.remove('error')
    }

    
    if (year.value =='') {
        let element = document.getElementById('exampleInputDate');
        element.style.border='1px solid red';
        yearErr.innerHTML = "Please enter a valid email address.";
    } else {
        let element = document.getElementById('exampleInputDate');
        element.style.border='1px solid #495057';
        yearErr.innerHTML = '';
        year.classList.remove('error')
    }

    return false;
}