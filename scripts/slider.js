const partnersSlider = new Swiper('.partners__slider', {
	loop: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 16,
	slideToClickedSlide: true,
	speed: 600,
	breakpoints: {
		320: {
			pagination: {
				el: '.partners-pagination',
				type: 'bullets',
				clickable: true,
			},
			slidesPerView: 1,
		},
		768: {
			pagination: {
				enabled: false,
			},
		}
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const screenWidth = window.innerWidth;
	if (screenWidth < 600) {
		const proxySlider = new Swiper('.proxy__slider', {
			slidesPerView: 1,
			spaceBetween: 15,
			slideToClickedSlide: true,
			speed: 700,
			autoplay: {
				delay: 4000,
			},
			pagination: {
				el: '.proxy-pagination',
				type: 'bullets',
				clickable: true,
				dynamicBullets: true,
				autoplayDisableOnInteraction: false
			}
		});
	}
});