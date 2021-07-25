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

})(jQuery);