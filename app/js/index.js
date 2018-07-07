const swiper = new Swiper('.swiper-container', {
	navigation: {
		nextEl: '.arrow-next',
		prevEl: '.arrow-prev'
	},
	loop: true
})

const photos = document.querySelectorAll('[data-role="handle-modal"]');
const photoArray = Array.prototype.slice.call(photos);

const handleClick = event => {
	const index = event.target.getAttribute('data-index');
	swiper.slideTo(index);
	handleModal();
}

const handleModal = () => {
	const modal = document.getElementById('modal');
	if (modal.classList.value.indexOf('open') > -1) {
		modal.classList.remove('open')
	} else {
		modal.classList.add('open')
	}
}

photoArray.map(photo => {
	photo.addEventListener('click', handleClick);
})



