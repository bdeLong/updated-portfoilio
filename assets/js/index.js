$(document).ready(function () {
  $('.carousel').slick({
    adaptiveHeight: true,
    dots: true
  });
});

$(".scroll-down").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#portfolio").offset().top
  }, 1000);
});