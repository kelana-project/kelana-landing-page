$(document).ready(function() {
	// LOCAL-STORAGE
	const MODE = 'mode';
	let currentMode = 'lumos';
	let locals = localStorage.getItem(MODE);
	if (locals === 'nox') {
		$('body').toggleClass('nox');
	}

	// BURGIR
	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
	var hamburgers = document.querySelectorAll(".hamburger");
	if (hamburgers.length > 0) {
	  forEach(hamburgers, function(hamburger) {
	    hamburger.addEventListener("click", function() {
	      this.classList.toggle("is-active");
	    }, false);
	  });
	}

	// CLICKDOWN
	$('a[href*="#"]:not(a[href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
		    || location.hostname == this.hostname) {
		    var target = $(this.hash);
		    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    if (target.length) {
		        $('html,body').animate({
		            scrollTop: target.offset().top - 0,
		        }, 1000);
		        return false;
		    }
		}
	});

	// OFF-CANVAS
	$('.hamburger').click(function(e) {
		$('.slidebar').toggleClass('active');
		$('.overlay').toggle();
	});
	$('.slidebar a').click(function() {
		$('.hamburger').trigger('click');
	});

	$('.overlay').click(function() {
		$(this).hide();
		if ($('.slidebar').hasClass('active')) { 
			$('.hamburger').removeClass('is-active');
			$('.slidebar').removeClass('active');
		}
	});

	// MODE
	$('.bar').click(function() {
		$('.circle').toggleClass('active');
		$('body').toggleClass('nox');

		if ($('body').hasClass('nox')) { currentMode = 'nox'; }
		else { currentMode = 'lumos'; }

		localStorage.setItem(MODE, currentMode);
	});

	// PARA
	var initialScrollPos = window.pageYOffset;
	$(window).scroll(function(e) {
		var currentScroll = $(this).scrollTop();
		
		$('.item img').css({
			'margin-top': (currentScroll*.75) + 'px',
		});

		$('.plain').css('background-position', 'center ' + (currentScroll*-.25) + 'px');
		// 	$(this).css({ 'margin-top': (currentScroll*0.75) + 'px', });
		// if (initialScrollPos > currentScroll){
		// 	$('#navigate').css('top', '0')
		// } else {
		// 	$('#navigate').css('top', '-' + currentScroll + 'px')
		// }
		// initialScrollPos = currentScroll;
		
		var winHeight = $(this).height();
		var docHeight = $(document).height();
		var scrollPercentage = 100 * (currentScroll / (docHeight - winHeight));
		$('.indicator').css({
			'width': (scrollPercentage) + '%',
		});

		// HIDE ALL MENU
		if (currentScroll > 180) {
			$('.fixed-nav').slideDown();
		} else {
			$('.fixed-nav').slideUp();
		}

		// REACHED THE BOTTOM OF THE DOCUMENT
		if (winHeight+currentScroll > (docHeight-5)) {
		}
	});

	// SCREVEAL
	const sr = new ScrollReveal({
		distance: '1rem',
		duration: 1600,
	});

	sr.reveal('.section-title', { origin: 'top', delay: 100, });
	sr.reveal('.section-subtitle', { origin: 'bottom', delay: 300, });

	sr.reveal('.intro .container', { origin: 'bottom', delay: 500, });

	sr.reveal('.chapters .filter', { origin: 'bottom', delay: 500, });
	sr.reveal('.chapters .container', { origin: 'bottom', delay: 500, });
	sr.reveal('.chapters .spacer', { origin: 'bottom', delay: 500, });

	sr.reveal('.testimonials .container', { origin: 'bottom', delay: 500, });
	
	sr.reveal('.flex-item', { origin: 'bottom', delay: 500, });
	
	sr.reveal('.download .btn-group', { origin: 'bottom', delay: 500, });

	sr.reveal('.plain .container', { origin: 'bottom', delay: 700, });

	// OWL
	$('.owl-carousel').owlCarousel({
	    items: 1,
	    stagePadding: 200,
	    responsive: {
	        0: { stagePadding: 0, },
	        768: { stagePadding: 80, },
	        967: { stagePadding: 160, },
	        1166: { stagePadding: 240, },
	    },
	    center: true,
	    autoplay: true,
	    autoplayTimeout: 4800,
	    autoplayHoverPause: true,
	    lazyLoad: true,
	    loop: true,
	    nav: false,
	    dots: false,
	});

	// SWIPER
	let swiperTestimonial = new Swiper('.testimonials .container', {
	    spaceBetween: 32,
	    loop: true,
	    grabCursor: true,
	    pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	    },
	    breakpoints: {
	    	960: {
	            slidesPerView: 3,
	    	},
	        600: {
	        	slidesPerView: 2,
	        },
	    },
	});

	// MIXER
	let mixerPortfolio = mixitup('.chapters .container', {
	    selectors: {
	        target: '.chapters .card',
	    },
	    animation: {
	        duration: 300,
	    }
	});
	$('.f-item').click(function() {
        $(this).addClass('active');
        $('.filter .f-item').not(this).removeClass('active');
    });
});