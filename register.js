const createAccount = {
    '.firstname-input': '',
    '.middlename-input': '',
    '.lastname-input': '',
    '.address-input': '',
    '.birthday-input': '',
    '.phone-input': '',
    '.email-input': '',
    '.password-input': '',
    '.confirm-pass': ''
};

const firstname = document.querySelector('.firstname-input');
const middlename = document.querySelector('.middlename-input');
const lastname = document.querySelector('lastname-input');
const address = document.querySelector('.address-input');
const birthday = document.querySelector('.birthday-input');
const phonenumber = document.querySelector('.phone-input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password-input');
const confirmpass = document.querySelector('.confirm-pass');
const btnsignup = document.querySelector('.btn-signup');
const btncancel = document.querySelector('.btn-cancel');
const msg = document.querySelector('.msg');

btnsignup.addEventListener('click', function(e){
    e.preventDefault();

    for(let select in createAccount){
        const input = document.querySelector(select);
        if(input.value === ''){
            alert('Kindly Fill out in all  the Field ');
            setTimeout(() => msg.innerHTML = '', 3000);
            return;
        }
    }

    if(!/@/.test(email.value)){
        alert('Kindly Input Valid Email Address');
        setTimeout(() => msg.innerHTML = '', 3000);
        return;
    }

    //checking of confirmation password
    if(password.value !== confirmpass.value){
        alert('Invalid Confirm Password');
        setTimeout(() => msg.innerHTML = '', 3000);
        return;

    }

    //checking of length password
    if(password.value.length<12){
        alert('Input 12 Character in Password');
        setTimeout(() => msg.innerHTML = '', 3000);
        return;
    }

    //checking for Capital Letter
    if(!/[A-Z]/.test(password.value)){
        alert('Input atleast One Capital Letter in Password');
        setTimeout(() => msg.innerHTML = '', 3000);
        return;
    }

    //checking for Small Letter
    if(!/[a-z]/.test(password.value)){
        alert('Input atleast One Small Letter in Password');
        setTimeout(() => msg.innerHTML = '', 3000);
        return;
    }

    //checking for Number
    if(!/[0-9]/.test(password.value)){
        alert('Input atleast One Number in Password');
            setTimeout(() => msg.innerHTML = '', 3000);
            return;
    }

    //checking special character
    if(!/[!@#$%^&*/(){},.<>?]/.test(password.value)){
        alert('Input atleast One Special Character in Password');
        setTimeout(() => msg.innerHTML = '', 3000);
        return;
    }

    else{
        alert('Successfully to Register');
        window.location.href = 'login.html'
        return;
        

    }
});

btncancel.addEventListener('click', function(e){
    e.preventDefault();

    alert('Successfully to Cancel');
    window.location.href = 'login.html'
    return;
});