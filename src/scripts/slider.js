// Использована библиотека Slick
// https://kenwheeler.github.io/slick/

jQuery(function($){
  $(document).ready(function(){
    $('.slider__list').slick({
      prevArrow: '.slider__prev',
      nextArrow: '.slider__next',
      speed: 600,
      autoplay: true,
      autoplaySpeed: 4000,
    });
  });
})