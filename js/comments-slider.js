$(document).ready(function(){
	$('.comments__photos-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,
		initialSlide: 3,
		speed: 250,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		asNavFor: '.comments__comments-slider',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				arrows: true
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
				arrows: true
			}
		},
		]
	});
	$('.comments__comments-slider').slick({
		arrows: false,
		fade: true,
		initialSlide: 3,
		asNavFor: '.comments__photos-slider'
	});
	$('.comments__photos-slider').slick('setPosition');
});