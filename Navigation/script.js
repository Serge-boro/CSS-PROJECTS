const open_btn = document.querySelector('.open-btn'),
  close_btn = document.querySelector('.close-btn'),
  nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
  nav.forEach((item) => item.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
  nav.forEach((item) => item.classList.remove('visible'))
})
