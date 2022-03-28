const showcase = document.getElementById('showcase')
const imgs = showcase.querySelectorAll('img')

const modal = document.getElementById('img-modal')
const modalContent = modal.querySelector('img')

const body = document.querySelector('body')

imgs.forEach(
    (img) =>
        (img.onclick = (event) => {
            modalContent.src = event.target.src
            modal.classList.add('modal--active')
            body.classList.add('modal--active')
        })
)

modal.onclick = () => {
    modal.classList.remove('modal--active')
    body.classList.remove('modal--active')
}

document.onkeyup = (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove('modal--active')
        body.classList.remove('modal--active')
    }
}
