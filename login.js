const account ={
    email : "admin@gmail.com",
    password : "Admin123456!"
};

let loginAttempt = 0;
const maxxAtempt = 3;

const logininput = document.querySelector('.email-input');
const passwordinput = document.querySelector('.password-input');
const btnlogin = document.querySelector('.btn-login');
const btncancel = document.querySelector('.btn-cancel');
const msg = document.querySelector('.msg');
const msg1 = document.querySelector('.msg1');
const count = document.querySelector('.count');

btnlogin.addEventListener("click", function(e){
    e.preventDefault();

    if(logininput.value.trim() === '' || passwordinput.value.trim() === ''){

        msg.innerHTML = `<h2 class='error'> Please fill in all fields </h2>`;
        msg.style.color = 'red';
        setTimeout(() => msg.innerHTML='', 3000);
        return;
    }
    
    if(logininput.value === account.email && passwordinput.value === account.password){
        alert('Successfully to log in');
        window.location.href = 'dashboard.html'
        return;

    }else{
        loginAttempt++;
        msg1.innerHTML = `<h3 class='error'> Incorrect Password and Email attempt to log in : ${maxxAtempt - loginAttempt} </h3>`
        setTimeout(() => msg.innerHTML='', 3000);
   
        if(loginAttempt === maxxAtempt){
            alert('Maximum to log in attempt. Try again later.');
            btnlogin.disabled = true;
            btncancel.disabled = true;
            logininput.disabled = true;
            passwordinput.disabled = true;
 

            let countdownTime = 3;
            count.innerHTML = `You can Try again in : ${countdownTime} seconds`;

            const countdownInterval = setInterval(() => {
                countdownTime --;
                count.innerHTML = `You can try again : ${countdownTime} seconds`;

                if(countdownTime<=0){
                    clearInterval(countdownInterval);
                    location.reload();
                }
            },1000);

        }
    }

});

btncancel.addEventListener('click', function(e){
    e.preventDefault();
    alert('Successfully to Cancel');
    window.location.href = 'landingpage.html'
    return;

});
