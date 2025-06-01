//PARA SA LOG OUT

    const btnmarket = document.querySelector('.market');

    btnmarket.addEventListener('click', function(e){
        e.preventDefault();

        window.location.href = 'marketplace.html'

    });

//PARA SA PAG SELECT NG TRACKING
const selectoption = document.querySelectorAll('.drop-lis');
const selected = document.querySelectorAll('.drop-listed');

selected.addEventListener('click', function(e){
    e.preventDefault();

    const option['.drop-list.value'] = [selectoption];
});
