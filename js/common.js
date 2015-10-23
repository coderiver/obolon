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
	function getcurrent(){
		goto = 'app'+$('.flats__section a.is-active').data('s') + $('.flats__rooms.is-active a.is-active').data('s');
		return goto;
	}
	function goto(id){
		$('.flat__item').hide();
		$(''+id).show();
	}

	$('.app11').show();
	// flats selection
	$('.flats__section a,.flats__rooms a').click(function(event) {
		// active choice
		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');
		// right rooms
		$('.flats__rooms').removeClass('is-active');
		$('.flats__rooms'+$('.flats__section a.is-active').data('s')).addClass('is-active');

		// switching flat
		idd = getcurrent();
		// goto
		$('.flat__item').hide();
		$('.'+idd).show();
		return false;
	});

	//switch floors pic
	$('.flats__image a').click(function(event) {
		ind = $(this).parent().children('a').index($(this));
		$(this).siblings().removeClass('is-active');
		$(this).addClass('is-active');
		// $('.flats__image img').hide(); // this should be LOCAL
		$(this).parent().find('img').hide();
		$(this).parent().find('img').eq(ind).show();
		return false;
	});
	$('.flats__type a').click(function(event) {
		idd = $(this).data('goto');
		$('.flat__item').hide();
		$('.'+idd).show();
		return false;
	});

	$('.flats__image img').click(function(event) {
		$('.appop').fadeIn();
		par = $(this).parent().html();
		parpar = $(this).parents('.flat__item');
		put = parpar.find('.flats__metr').html();
		titlee = parpar.find('.flats__result').html();
		$('.feat__bigpic').html(par);
		$('.flattext').html(put);
		$('.flattitle').html(titlee);
		return false;
	});
	// $('.flats__section a').click(function(event) {
	// 	$('.flats__rooms').removeClass('is-active');
	// 	$('.flats__rooms'+$('.flats__section a.is-active').data('s')).addClass('is-active');
	// });













});