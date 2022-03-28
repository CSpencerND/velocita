const toggle = document.getElementById('toggle')
const header = document.getElementById('header')

toggle.onclick = () => {
    toggle.classList.toggle('active')
    header.classList.toggle('active')
}

const bottomNav = document.getElementById('bottom-navigation')
// const scrollArrow = document.getElementById('scroll-arrow')
let lastScrollY = window.scrollY
window.onscroll = () => {
    if (lastScrollY < window.scrollY) {
        bottomNav.classList.add('nav-hidden')
        // scrollArrow.innerHTML =
        //     '<i class="fa-solid fa-arrow-up"></i>'
        // scrollArrow.href = '#'
        // scrollArrow.style = 'display: none'
    } else {
        bottomNav.classList.remove('nav-hidden')
        // scrollArrow.innerHTML =
        //     '<i class="fa-solid fa-arrow-down"></i>'
        // scrollArrow.style = 'display: initial; opacity: .67'
        // scrollArrow.href = '#about'
    }
    lastScrollY = window.scrollY
}
