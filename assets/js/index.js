$(document).ready(function () {
  $('.carousel').slick({

    dots: true,
    // arrows: true,
    // mobileFirst: true
  });
});

$(".scroll-down").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#portfolio").offset().top
  }, 1000);
});