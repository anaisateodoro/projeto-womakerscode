//Menu Hamburger
const buttonMenuHam = document.querySelector(".title-button__button");
const iconMenu = document.querySelector(".title-button__icon");
const header = document.querySelector(".header");

buttonMenuHam.addEventListener("click", () => {
    header.classList.toggle("header--active");
    iconMenu.classList.toggle("bx-rotate-90");
});


//Slider

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}

//Cookies

var msgCookies = document.getElementById('cookies-msg')

function aceito() {
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrar')
}

if (localStorage.lgpd == 'sim') {
    msgCookies.classList.remove('mostrar')
} else {
    msgCookies.classList.add('mostrar')
}