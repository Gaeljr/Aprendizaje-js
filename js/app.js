const btn = document.querySelector('#menu-btn');
const btnD = document.querySelector('.menu-dpl-btn');

btn.addEventListener('click', function (){
    btnD.classList.toggle('ocultar');
})
