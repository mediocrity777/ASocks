let proxyItemsList = document.querySelectorAll('.proxy__item');

proxyItemsList.forEach(proxyItem => {
	proxyItem.addEventListener('focus', (event) => {
		proxyItemsList.forEach(proxyElementClassToRemove => {
			proxyElementClassToRemove.classList.remove('proxy__item--active')
		});
		proxyItem.classList.add('proxy__item--active');
	});

});

const screenWidth = window.innerWidth;
if (screenWidth < 1100) {
	let trafficProgress = document.querySelector('.traffic__progress');
	let trafficSlider = document.querySelector('.traffic__slider');
	let trafficInfo = trafficSlider.parentNode;

	trafficInfo.insertBefore(trafficProgress, trafficSlider);
}