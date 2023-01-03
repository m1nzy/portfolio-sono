$(function () {
	// ------- header btn-menu -------
	$('#header .btn-menu').on('click', function () {
		$(this).toggleClass('active');
	})

	// ------- 메인슬라이드 -------
	var swiper01 = new Swiper(".main-slide", {
		loop: true,
		autoplay: {
			delay: 2500,
		},
		spaceBetween: 30,
		effect: "fade",
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	// ------- select -------
	$('.btn-select').on('click', function() {
		$('.select').toggleClass('on');
	})

	// ------- business 슬라이드 -------
	const swiper = new Swiper('.mySwiper', {
		slidesPerView: 3,
		spaceBetween: 20,
		freeMode: true,
		slidesPerView: "auto",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
		mousewheel: true,
		observer: true,
		observeParents: true,
	});


	// ------- 섹션이동 -------
    let navMenu = ['one', 'two', 'three', 'four', 'five'];

    $('.move-item li').click(function () {
        var idx = $(this).index();
        var secTop = $('.' + (navMenu[idx])).offset().top;
        var headerH = $('#header').innerHeight();

		$('.move-item li').removeClass('active');
		$(this).addClass('active');

        $("html, body").animate({ 
            scrollTop: secTop - headerH
        }, 1000);
    });

})