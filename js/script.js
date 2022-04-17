$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      easing: 'ease',
      autoplay: true,
      speed: 700,
      autoplaySpeed: 5000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      waitForAnimate: false
   });
});



$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__list').toggleClass('active');
      $('body').toggleClass('lock');
   });
});