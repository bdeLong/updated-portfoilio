$(document).ready(function () {
  $('.carousel').slick({
    dots: true,
  });
});

$(".scroll-down").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#portfolio").offset().top
  }, 1000);
});