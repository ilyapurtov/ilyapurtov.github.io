const header = document.querySelector(".header");
const skills = document.querySelector(".skills");
const intro = document.querySelector(".intro");
const scrollUp = document.querySelector(".scroll-up");

const progresses = document.querySelectorAll("progress");

scrollUp.setAttribute("style", "visibility: hidden;");

window.onscroll = function(event) {
	if (window.scrollY > 100) {

		if (!header.classList.contains("fixed")) {
			header.classList.add("fixed");
		}

		scrollUp.setAttribute("style", "animation: scrollUp .5s alternate;");

	} else {
		header.classList.remove("fixed");
		scrollUp.setAttribute("style", "visibility: hidden;");
	}

	if (Math.abs(skills.offsetTop - window.scrollY) < window.innerHeight) {
		for (let i = 0; i < progresses.length; i++) {
		
			if (!progresses[i].loaded) {
				let value = progresses[i].value;
				progresses[i].value = 0;

				let interval = window.setInterval(function() {
					if (progresses[i].value < value) {
						progresses[i].value++;
					} else {
						progresses[i].loaded = true;
						window.clearInterval(interval);
					}
				}, 15);
			}

		}
	}
	

	intro.setAttribute("style", "background-position: 0 -" + window.scrollY / 1.5 + "px");
	intro.querySelector(".intro__inner").setAttribute("style", "opacity: " + 1 / (window.scrollY / 50) + "; filter: blur(" + window.scrollY / 20 + "px)");
}