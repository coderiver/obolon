head.ready(function() {
	$('.js-popup').click(function(event) {
		$('#'+$(this).data('popup')).fadeIn();
		return false;
	});
	$('.overlay-click,.feat__close,.ask__close,.camerapopup__close').click(function(event) {
		$(this).parents('.overlay').hide();
	});
	$('.slideshow__close').click(function(event) {
		$('.slideshow').fadeOut();
	});


	$(window).scroll(function(){
	    if($(window).scrollTop()>300){
	    	$('body').addClass('is-menu');
	    }
	    else{
	    	$('body').removeClass('is-menu');
	    }
	});

	$(".navf a,.nav a, .header__logo").click(function() {
		goto = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(""+goto).offset().top - 40
	    }, 500);
	    return false;
	});

	$(window).on('scroll', function() {

	    $('[data-section]').each(function() {
	        if($(window).scrollTop() >= $(this).offset().top - 45) {
	            var id = $(this).attr('id');
	            $('.navf a').removeClass('is-active');
	            $('.navf a[href=#'+ id +']').addClass('is-active');
	        }
	    });
	});

	function head(){
		hh = $('.header').height();
		wh = $(window).height();
		$('.subheader').height(wh-hh);
	}
	head();

	$(window).on('scroll', function() {
		head();
	});
	$(window).on('resize', function() {
		head();
	});
});