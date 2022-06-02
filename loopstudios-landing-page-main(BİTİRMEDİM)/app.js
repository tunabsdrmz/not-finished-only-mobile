const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-div');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('show-div');
    hamburger.classList.toggle('hamburger-active');
});