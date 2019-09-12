$(document).ready(function () {
		svg4everybody({});
});

$(document).ready(function() {

	// slick slider
	$(".slider__weather").slick({
			infinite: true,
			slidesToShow: 3,
			centerMode: true,
			centerPadding: 0,
			prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>'
	});

	// smooth anchor scroll
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
					e.preventDefault();

					document.querySelector(this.getAttribute('href')).scrollIntoView({
							behavior: 'smooth'
					});
			});
	});
});
