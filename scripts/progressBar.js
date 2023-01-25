const inputRangeBar = document.querySelector('.traffic__range');
const selector = document.getElementById('selector');
const trafficColor = document.querySelector('.traffic__color-fill');
const progressCircle = document.querySelector('.traffic__progress svg circle');
const trafficGb = document.querySelector('.traffic__progress-gb');
const trafficPrice = document.querySelector('.traffic__progress-price');
const rangeGb = document.querySelector('.traffic__range-gb');
const rangePrice = document.querySelector('.traffic__range-price');

inputRangeBar.oninput = function () {
	selector.style.left = this.value / 10 + '%';
	rangeGb.style.left = this.value / 10 + '%';
	rangePrice.style.left = this.value / 10 + '%';


	trafficColor.style = `clip-path: polygon(0px 0px, ${this.value / 10 + '%'} 0px, ${this.value / 10 + '%'} 100%, 0% 100%)`;

	progressCircle.style = `stroke-dashoffset: ${1079 - this.value * 0.66}`;
	trafficGb.textContent = rangeGb.textContent = this.value + 'Gb';
	trafficPrice.textContent = rangePrice.textContent = this.value * 3 + '$';
	if (parseInt(trafficGb.textContent) === 999) {
		trafficGb.textContent = rangeGb.textContent = '1Tb';
		trafficPrice.textContent = rangePrice.textContent = '3000$';
	}
}



