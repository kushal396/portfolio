const open = document.getElementById('open');
const close = document.getElementById('close');

const navbarContainer = document.querySelector('.navicon');
const mainContainer = document.querySelector('.contianer');
const body = document.querySelector('body');

const navlinks = document.querySelector('.navlinks');


console.log(open);
console.log(close);
console.log(navbarContainer);

open.addEventListener('click' , ()=>{
    navbarContainer.classList.add("shownav");
    mainContainer.classList.add("shownav1");
    body.style.overflow='hidden';
    navlinks.classList.add('show');
})
close.addEventListener('click' , ()=>{
    navbarContainer.classList.remove("shownav");
    mainContainer.classList.remove("shownav1");
    body.style.overflow='scroll';
    navlinks.classList.remove('show');
})