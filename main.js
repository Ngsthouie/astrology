// console.log(12123123123);

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.nav-menu')

menu.onclick = () => {
    // menu.classList.toggle
    navbar.classList.toggle('open')
}