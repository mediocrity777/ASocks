let proxyItemsList = document.querySelectorAll('.proxy__item');

proxyItemsList.forEach(proxyItem => {
	proxyItem.addEventListener('focus', (event) => {
		proxyItemsList.forEach(proxyElementClassToRemove => {
			proxyElementClassToRemove.classList.remove('proxy__item--active')
		});
		proxyItem.classList.add('proxy__item--active');
	});

});