const toggle = document.getElementById('toggle')
const header = document.getElementById('header')

toggle.onclick = () => {
    toggle.classList.toggle('active')
    header.classList.toggle('active')
}

const bottomNav = document.getElementById('bottom-navigation')
let lastScrollY = window.scrollY
window.onscroll = () => {
    if (lastScrollY < window.scrollY) {
        bottomNav.classList.add('nav-hidden')
    } else {
        bottomNav.classList.remove('nav-hidden')
    }
    lastScrollY = window.scrollY
}
