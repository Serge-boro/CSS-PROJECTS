document.querySelector('#date').innerHTML = new Date().getFullYear()

const open = document.querySelector('#navbar')

document.querySelector('#nav-btn').addEventListener('click', () => {
  open.classList.add('showNav')
})
document.querySelector('#nav-close').addEventListener('click', () => {
  open.classList.remove('showNav')
})
