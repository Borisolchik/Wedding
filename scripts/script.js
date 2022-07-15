$(document).ready(function () {

    $('#burger').click(function () {
        $('.menu').addClass('open');
        $('header .title').css('display', 'block');
        $('header .ellipse1').css('display', 'block');
        $('header .ellipse2').css('display', 'block');
    });

    $('*').each(function () {
        $('.menu *').click(function () {
            $('.menu').removeClass('open');
        });
    });

    $('.cost').click(function () {
        $('html, body').animate({
            scrollTop: $('#consultation').offset().top
        }, 1000);
    });

    $('.main-btn').click(function () {
        $('html, body').animate({
            scrollTop: $('#consultation').offset().top
        }, 1000);
    });

    $('.action__link').click(function () {
        $('html, body').animate({
            scrollTop: $('#service').offset().top
        }, 1000);
    });

    $('#logo-footer').click(function () {
        $('html, body').animate({
            scrollTop: $('.header').offset().top
        }, 1000);
    });

    // 1 Слайдер
    let helpers = {
        addZeros: function (n) {
            return '' + n;
        }
    };

    function sliderInit() {
        let $slider = $('.slider-holder');
        $slider.each(function () {
            let $sliderParent = $(this).parent();
            $(this).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },

                ]
            });
            if ($(this).find('.item').length > 1) {
                $(this).siblings('.slides-numbers').show();
            }
            $(this).on('afterChange', function (event, slick, currentSlide) {
                $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
            });
            let sliderItemsNum = ($(this).find('.slick-slide').not('.slick-cloned').length);
            $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
        });
    }

    sliderInit();

    // 2 Слайдер
    let helpers2 = {
        addZeros: function (n) {
            return '' + n;
        }
    };

    function sliderInit2() {
        let $slider = $('.slider-holder2');
        $slider.each(function () {
            let $sliderParent2 = $(this).parent();
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                speed: 0,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            adaptiveHeight: true
                        }
                    }
                ]
            });

            if ($(this).find('.item').length > 1) {
                $(this).siblings('.slides-numbers2').show();
            }

            $(this).on('afterChange', function (event, slick, currentSlide) {
                $sliderParent2.find('.slides-numbers2 .active2').html(helpers2.addZeros(currentSlide + 1));
            });

            let sliderItemsNum2 = $(this).find('.slick-slide').not('.slick-cloned').length;
            $sliderParent2.find('.slides-numbers2 .total2').html(helpers2.addZeros(sliderItemsNum2));

        });
    }

    sliderInit2();


    let btnText = $(".myBtn");
    let dots = $(".dots");
    let moreText = $(".more");

    if ($(window).width() < 768) {
        dots.css('display', 'inline');
        btnText.css('display', 'block');
    }


    btnText.click(function () {
        moreText.css('display', 'inline');
        dots.css('display', 'none');
        btnText.css('display', 'none');


        if ($(window).width() < 768 && $(window).width() > 600) {
            $('.text-review').css('height', '720px');
            $('#bg-review').css('height', '1078px');
            setTimeout( ()  => {
                $('.slider-holder2').slick('refresh');
                $('.review .slick-arrow').css('margin-top', '600px');
            }, 30);
        }
        if ($(window).width() < 601 && $(window).width() > 500) {
            $('.text-review').css('height', '830px');
            $('#bg-review').css('height', '1188px');
            setTimeout( ()  => {
                $('.slider-holder2').slick('refresh');
                $('.review .slick-arrow').css('margin-top', '655px');
            }, 30);
        }
        if ($(window).width() < 501 && $(window).width() > 424) {
            $('.text-review').css('height', '960px');
            $('#bg-review').css('height', '1318px');
            setTimeout( ()  => {
                $('.slider-holder2').slick('refresh');
                $('.review .slick-arrow').css('margin-top', '720px');
            }, 30);
        }
        if ($(window).width() < 425 && $(window).width() > 319) {
            $('.text-review').css('height', '1130px');
            $('#bg-review').css('height', '1488px');
            setTimeout( ()  => {
                $('.slider-holder2').slick('refresh');
                $('.review .slick-arrow').css('margin-top', '805px');
            }, 30);
        }

    });

    new WOW().init();

    $('header .container .action').click(function () {
        $('.order-popup').css('display', 'block');
    });
    $('header .container .header__adaptive .action__circle').click(function () {
        $('.order-popup').css('display', 'block');
    });

    $('.order-popup .order .close').click(function () {
        $('.order-popup').css('display', 'none');
    });

    $('#order-button').click(function () {
        let name = $('#order-name');
        let phone = $('#order-phone');
        let hasError = false;
        $('.error-input').hide();
        name.css('border-color', 'transparent');
        phone.css('border-color', 'transparent');

        if (!name.val()) {
            name.next().show();
            hasError = true;
            name.css('border-color', 'red');
        }
        if (!phone.val()) {
            phone.next().show();
            hasError = true;
            phone.css('border-color', 'red');
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        $('#order-form').css('display', 'none');
                        $('#form-success').css('display', 'block');
                    } else {
                        alert('Возникла ошибка, попробуйте еще раз');
                    }
                });
        }

    });

    $('.consultation .container .block form div button').click(function () {
        let name = $('#consultation-name');
        let phone = $('#consultation-phone');
        let hasError = false;
        $('.error-input-consultation').hide();
        name.css('border-color', 'transparent');
        phone.css('border-color', 'transparent');

        if (!name.val()) {
            name.next().show();
            hasError = true;
            name.css('border-color', 'red');
        }
        if (!phone.val()) {
            phone.next().show();
            hasError = true;
            phone.css('border-color', 'red');
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        $('#consultation-form').css('display', 'none');
                        $('#consultation-success').css('display', 'block');
                    } else {
                        alert('Возникла ошибка, попробуйте еще раз');
                    }
                });
        }

    });

})