(function ($) {
    "use strict";

    /*-----------------------------
Hero Banner Slider
------------------------------*/

    $('.hero-banner-slider').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });

    /*-----------------------------
   Product Slider One Carousel
   ------------------------------*/

    $('.product-slider-01').slick({
        dots: false,
        arrows: true,
        prevArrow: "<img class='product-slider-01-left-arrow' src='img/product-slider-01/left-arrow.png'>",
        nextArrow: "<img class='product-slider-01-right-arrow' src='img/product-slider-01/right-arrow.png'>",
        autoplay: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }

        ]
    });

    /*----------------------------
    jQuery Mean Menu
    ------------------------------ */
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "767"
    });
    $(".info-bar").on("click", function () {
        $(".extra-info").addClass("info-open");
    });
    $(".close-icon").on("click", function () {
        $(".extra-info").removeClass("info-open");
    });
    /*----------------------------
    Sticky menu active
    ------------------------------ */
    function fixed_top_menu() {
        var windows = $(window);
        windows.on("scroll", function () {
            var header_height = $(".main-navigation").height();
            var scrollTop = windows.scrollTop();
            if (scrollTop > header_height) {
                $(".main-navigation").addClass("sticky");
            } else {
                $(".main-navigation").removeClass("sticky");
            }
        });
    }
    fixed_top_menu();

    $(function() {

        $('.search-input input').blur(function() {

            if ($(this).val()) {
                $(this)
                    .find('~ label, ~ span:nth-of-type(n+3)')
                    .addClass('not-empty');
            } else {
                $(this)
                    .find('~ label, ~ span:nth-of-type(n+3)')
                    .removeClass('not-empty');
            }
        });

        $('.search-input input ~ span:nth-of-type(4)').click(function() {
            $('.search-input input').val('');
            $('.search-input input')
                .find('~ label, ~ span:nth-of-type(n+3)')
                .removeClass('not-empty');
        });


    });
})(jQuery);