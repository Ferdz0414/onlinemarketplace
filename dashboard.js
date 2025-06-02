//PARA SA LOG OUT

    const btnmarket = document.querySelector('.market');

    btnmarket.addEventListener('click', function(e){
        e.preventDefault();

        window.location.href = 'marketplace.html'

    });

//PARA SA PAG SELECT NG TRACKING
const progressbar = document.querySelectorAll('.progress-bar');
const btndroplist = document.querySelector('.drop-list');
const circle = document.querySelectorAll('.circle');
const btncancel = document.querySelector('.btn-cancel')

let currentStep = 1;

const progressStep =() =>{
    //Increase of Step Value for progress
    currentStep++;

    if(currentStep < 1) currentStep = 1;
    refresh();

}

const cancel =() =>{
    //Decrease of Step Value for progress
    currentStep--;
    refresh();
    

}

const refresh = () => {
    circle.forEach( (step, index) => {
        if(index < currentStep)step.classList.add('active');
        else step.classList.remove('active');

    });

    if(currentStep > circle.length-1){
        currentStep = circle.length;

        //disabled the button if current step value is greater than all step
        btndroplist.classList.add('disabled');
    }
    else btndroplist.classList.remove('disabled');

    if(currentStep === 1)btncancel.classList.add('disabled');
    else btncancel.classList.remove('disabled')


    const allActiveclass = document.querySelectorAll('.active');

    let width = (allActiveclass.length/ circle.length) * 120 - 15;

    progressbar.forEach(bar => {
        bar.style.width = width + allActiveclass.length + "%";
    })


}

