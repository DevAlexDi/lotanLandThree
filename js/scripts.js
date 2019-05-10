
$(document).ready(function(){
    $('.baner').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: false
            }
          }
        ]
    });

    $('.news-slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
        ]
    });

    $('.head-top__menu-open').click(function(){
        $('.menu').slideDown(300);
    });
    
    $('.header__close-menu').click(function(){
        $('.menu').slideUp(300);
    });

});