'use strict';

var swiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.arrow-next',
		prevEl: '.arrow-prev'
	},
	loop: true
});

var photos = document.querySelectorAll('[data-role="handle-modal"]');
var photoArray = Array.prototype.slice.call(photos);

var handleClick = function handleClick(event) {
	var index = event.target.getAttribute('data-index');
	swiper.slideTo(index);
	handleModal();
};

var handleModal = function handleModal() {
	var modal = document.getElementById('modal');
	if (modal.classList.value.indexOf('open') > -1) {
		modal.classList.remove('open');
	} else {
		modal.classList.add('open');
	}
};

photoArray.map(function (photo) {
	photo.addEventListener('click', handleClick);
});