$(window).load(function(){

	var changeSelect = function() {

		$(".sort select").on({

		  "click": function() {
		   $('.sort select').toggleClass('change_arrow');
		  },		


		  "blur": function() {
		      $('.sort select').removeClass('change_arrow');
		  },
		  "keyup": function(e) {
		    if (e.keyCode == 27)
		      $('.sort select').addClass('change_arrow');
		  }
		});


		// $('.sort select').on('click', function () {
		//       //$(this).closest('.bootstrap-select').addClass("checked");
		//       $('.sort select').toggleClass('change_arrow');
		// });
	};	


	var addMenu = function() {
		$('.menu-burger-add').on('click', function() {
			$('.header__additional-menu').toggleClass('header__additional-menu-visible');
		});
	};

    var addProfile = function() {
        $('.header__account').on('click', function() {
            $('.header__additional-menu2').toggleClass('header__additional-menu2-visible');
        });
    };

	var allMenu = function() {
		$('.menu-burger-smart').on('click', function() {
			$('.header__menu-burger').toggleClass('header__menu-burger-active');
			$('.smart-menu__wrapper').toggleClass('smart-menu__wrapper-visible');
			$('.header__smart-menu_lining').toggleClass('header__smart-menu_lining-visible');
		});
		$('.header__smart-menu_lining').on('click', function() {
			$('.smart-menu__wrapper').removeClass('smart-menu__wrapper-visible');
			$('.header__menu-burger').removeClass('header__menu-burger-active');
			$('.header__smart-menu_lining').removeClass('header__smart-menu_lining-visible');
		});
	};

	addMenu();
	allMenu();
    addProfile();
    changeSelect();

	var search = function() {
		$('.header__search').on('click', function() {
			$('.header__search-form').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.search-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.header__search-form').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.header__search-form').removeClass('search-form-active');
		});
	}
	
	search();


	var search2 = function() {
		$('.search').on('click', function() {
			$('.header__search-form').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.search-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.header__search-form').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.header__search-form').removeClass('search-form-active');
		});
	}
	
	search2();


	var acc_reg = function() {
		$('.acc_reg').on('click', function() {
			$('.reg_succ').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.reg_succ').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
		$('.reg_succ').removeClass('search-form-active');
		});
	}
	
	acc_reg();


	var acc_email = function() {
		$('.acc_email').on('click', function() {
			$('.email_succ').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.email_succ').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
		$('.email_succ').removeClass('search-form-active');
		});
	}
	
	acc_email();


	var pass_change = function() {
		$('.pass_change').on('click', function() {
			$('.pass_change_w').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.pass_change_w').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
		$('.pass_change_w').removeClass('search-form-active');
		});
	}
	
	pass_change();


		var ref_sys = function() {
		$('.ref_sys').on('click', function() {
			$('.ref_sys_w').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.ref_sys_w').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
		$('.ref_sys_w').removeClass('search-form-active');
		});
	}
	
	ref_sys();


	var order_send = function() {
		$('.order_send').on('click', function() {
			$('.order_send_w').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.order_send_w').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
		$('.order_send_w').removeClass('search-form-active');
		});
	}
	
	order_send();

	var happy_send = function() {
		$('.happy_send').on('click', function() {
			$('.happy_send_w').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.happy_send_w').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
		$('.happy_send_w').removeClass('search-form-active');
		});
	}
	
	happy_send();

	var moder = function() {
		$('.moder').on('click', function() {
			$('.moder_w').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.moder_w').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
		$('.moder_w').removeClass('search-form-active');
		});
	}
	
	moder();

	var payment = function() {
		$('.payment').on('click', function() {
			$('.payment_w').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});
		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.payment_w').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
		$('.payment_w').removeClass('search-form-active');
		});
	}
	
	payment();


	var uslug = function(){

		$('.uslug').on('click', function() {
			$('.uslugi').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});	

		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.uslugi').removeClass('search-form-active');
		});

		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.uslugi').removeClass('search-form-active');
		});
	}

	uslug();


	var obn = function(){

		$('.obj').on('click', function() {
			$('.obji').toggleClass('search-form-active');
			$('.search-form__lining').toggleClass('search-form__lining-visible');
		});	

		$('.register-form__cross').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.obji').removeClass('search-form-active');
		});
		$('.search-form__lining').on('click', function() {
			$('.search-form__lining').removeClass('search-form__lining-visible');
			$('.obji').removeClass('search-form-active');
		});
	}

	obn();

	var logIn = function() {
		$('.header__account').on('click', function() {
			$('.header__logIn-form').toggleClass('logIn-form-active');
			$('.logIn-form__lining').toggleClass('logIn-form__lining-visible');
		});
		$('.logIn-form__cross').on('click', function() {
			$('.logIn-form__lining').removeClass('logIn-form__lining-visible');
			$('.header__logIn-form').removeClass('logIn-form-active');
		});
		$('.logIn-form__forgot').on('click', function() {
			$('.logIn-form__lining').removeClass('logIn-form__lining-visible');
			$('.header__logIn-form').removeClass('logIn-form-active');
		});
		$('.logIn-form__button_r').on('click', function() {
			$('.logIn-form__lining').removeClass('logIn-form__lining-visible');
			$('.header__logIn-form').removeClass('logIn-form-active');
		});
		$('.logIn-form__lining').on('click', function() {
			$('.logIn-form__lining').removeClass('logIn-form__lining-visible');
			$('.header__logIn-form').removeClass('logIn-form-active');
		});
	}
	
	logIn();


	var logIn2 = function() {
		$('.rsign').on('click', function() {
			$('.header__logIn-form').toggleClass('logIn-form-active');
			$('.logIn-form__lining').toggleClass('logIn-form__lining-visible');
		});
		$('.logIn-form__cross').on('click', function() {
			$('.logIn-form__lining').removeClass('logIn-form__lining-visible');
			$('.header__logIn-form').removeClass('logIn-form-active');
		});
		$('.logIn-form__forgot').on('click', function() {
			$('.logIn-form__lining').removeClass('logIn-form__lining-visible');
			$('.header__logIn-form').removeClass('logIn-form-active');
		});
		$('.logIn-form__button_r').on('click', function() {
			$('.logIn-form__lining').removeClass('logIn-form__lining-visible');
			$('.header__logIn-form').removeClass('logIn-form-active');
		});
		$('.logIn-form__lining').on('click', function() {
			$('.logIn-form__lining').removeClass('logIn-form__lining-visible');
			$('.header__logIn-form').removeClass('logIn-form-active');
		});
	}
	
	logIn2();

	var register = function() {
		$('.logIn-form__button_r').on('click', function() {
			$('.register-form__lining').toggleClass('register-form__lining-visible');
			$('.header__register-form').toggleClass('register-form-active');
		});
		$('.register-form__cross').on('click', function() {
			$('.register-form__lining').removeClass('register-form__lining-visible');
			$('.header__register-form').removeClass('register-form-active');
		});
		$('.register-form__lining').on('click', function() {
			$('.register-form__lining').removeClass('register-form__lining-visible');
			$('.header__register-form').removeClass('register-form-active');
		});
	}
	
	register();

		var register2 = function() {
		$('.reg').on('click', function() {
			$('.register-form__lining').toggleClass('register-form__lining-visible');
			$('.header__register-form').toggleClass('register-form-active');
		});
		$('.register-form__cross').on('click', function() {
			$('.register-form__lining').removeClass('register-form__lining-visible');
			$('.header__register-form').removeClass('register-form-active');
		});
		$('.register-form__lining').on('click', function() {
			$('.register-form__lining').removeClass('register-form__lining-visible');
			$('.header__register-form').removeClass('register-form-active');
		});
	}
	
	register2();

	var passRemember = function() {
		$('.logIn-form__forgot').on('click', function() {
			$('.pass-remember-form__lining').toggleClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').toggleClass('pass-remember-form-active');
		});
		$('.pass-remember-form__cross').on('click', function() {
			$('.pass-remember-form__lining').removeClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').removeClass('pass-remember-form-active');
		});
		$('.pass-remember-form__lining').on('click', function() {
			$('.pass-remember-form__lining').removeClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').removeClass('pass-remember-form-active');
		});
	}
	
	passRemember();



	var passRemember2 = function() {
		$('.change_pass').on('click', function() {
			$('.pass-remember-form__lining').toggleClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').toggleClass('pass-remember-form-active');
		});
		$('.pass-remember-form__cross').on('click', function() {
			$('.pass-remember-form__lining').removeClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').removeClass('pass-remember-form-active');
		});
		$('.pass-remember-form__lining').on('click', function() {
			$('.pass-remember-form__lining').removeClass('pass-remember-form__lining-visible');
			$('.header__pass-remember-form').removeClass('pass-remember-form-active');
		});
	}
	
	passRemember2();


	var offerFocus = function() {
		if ($(window).width() > 1100){
			$('.offer__part-1').mouseenter(function() {
				$('.offer').addClass('offer-mouseover-left');
				$('.offer__part-2').css({'opacity':'0.7'});
			});
			$('.offer__part-1').mouseleave(function() {
				$('.offer').removeClass('offer-mouseover-left');
				$('.offer__part-2').css({'opacity':'1'});
			});
			$('.offer__part-2').mouseenter(function() {
				$('.offer').addClass('offer-mouseover-right');
				$('.offer__part-1').css({'opacity':'0.7'});
			});
			$('.offer__part-2').mouseleave(function() {
				$('.offer').removeClass('offer-mouseover-right');
				$('.offer__part-1').css({'opacity':'1'});
			});
		}
	}

	offerFocus();

	if ($(window).width() <= 700) {
		$('.contacts__item').on('click', function() {
			$('.my-massages__part-left').toggleClass('my-massages__part-left-unactive');
			$('.my-massages__chat').toggleClass('my-massages__chat-active');
		});
		$('.chat__return').on('click', function() {
			$('.my-massages__part-left').toggleClass('my-massages__part-left-unactive');
			$('.my-massages__chat').toggleClass('my-massages__chat-active');
		});
	}

	$(window).resize(function() {
		if ($(window).width() > 700) {
			$('.my-massages__part-left').removeClass('my-massages__part-left-unactive');
			$('.my-massages__chat').removeClass('my-massages__chat-active');
			$('.contacts__item').on('click', function() {
				$('.my-massages__part-left').removeClass('my-massages__part-left-unactive');
				$('.my-massages__chat').removeClass('my-massages__chat-active');
			});
		}
	});

});