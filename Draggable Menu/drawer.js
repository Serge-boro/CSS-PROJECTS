const toggle = document.querySelector('.toggle'),
  navigation = document.querySelector('.navigation'),
  container = document.querySelector('.container')

toggle.addEventListener('dblclick', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

$(function () {
  $(navigation).draggable()
})
