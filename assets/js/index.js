$(document).ready(function () {
  $('.carousel').slick({
    infinite: true,
    dots: true,
    arrows: true,
  });
});

$(".scroll-down").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#portfolio").offset().top
  }, 1000);
});