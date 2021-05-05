		function stars() {
				let scene = document.querySelector('.scene');
				for(let i=0; i< 50; i++) {
					let star = document.createElement('i');

					let width = Math.floor(Math.random() * window.innerWidth);
					let duration = Math.random() * 1;
					let height = Math.random() * 100;

					star.style.left = width + 'px';
					star.style.width = 1 + 'px';
					star.style.height = 150 + height + 'px';
					star.style.animationDuration = duration + 's';

					scene.append(star);
					i++;
				}
			}
			stars();