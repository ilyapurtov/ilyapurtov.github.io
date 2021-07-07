const header = document.querySelector(".header");
const scrollUp = document.querySelector(".scroll-up");

scrollUp.setAttribute("style", "visibility: hidden;");

if (window.innerWidth > 960) {
	// const skills = document.querySelector(".skills");
	const intro = document.querySelector(".intro");
	const progresses = document.querySelectorAll("progress");


	window.addEventListener("scroll", function(event) {

		if (window.scrollY > 100) {
			scrollUp.setAttribute("style", "animation: scrollUp .5s alternate;");
		} else {
			scrollUp.setAttribute("style", "visibility: hidden;");
		}

		/* if (Math.abs(skills.offsetTop - window.scrollY + 300) < window.innerHeight) {
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
		} */
		

		intro.setAttribute("style", "background-position: 0 -" + window.scrollY / 1.5 + "px");
		intro.querySelector(".intro__inner").setAttribute("style", "opacity: " + 1 / (window.scrollY / 50) + "; filter: blur(" + window.scrollY / 20 + "px)");
	});
}

else if (window.innerWidth < 600) {
	header.classList.add("fixed");
	
	const mobileNavOpen = document.getElementById("mobile_nav_open");
	const mobileNavClose = document.getElementById("mobile_nav_close");
	const mobileNav = document.querySelector("nav");

	mobileNavOpen.addEventListener("click", function() {
		mobileNav.classList.add("opened");
	});

	mobileNavClose.addEventListener("click", function() {
		mobileNav.classList.remove("opened");
	});
}

if (window.innerWidth > 600) {
	window.addEventListener("scroll", function() {
		if (window.scrollY > 100) {

			if (!header.classList.contains("fixed")) {
				header.classList.add("fixed");
			}
			

		} else {
			header.classList.remove("fixed");
		}
	});
}