let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('header');
let button = document.querySelector('.btn');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
//typing effect by using library
var typed = new Typed('.typing-text', {
    strings : ['Front-End-Developer', ' Web-Designer', 'Mentor'],
    loop : true,
    typeSpeed : 400
});
//tilt library
VanillaTilt.init(document.querySelectorAll('#tilt'),{
    max:25
});

