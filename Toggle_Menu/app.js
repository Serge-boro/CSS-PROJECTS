	const toggle  = document.querySelector('.toggle')
  	toggle.addEventListener('click', ()=> {
  		document.querySelector('.sidebar').classList.toggle('active')
  		toggle.classList.toggle('active')
  	})