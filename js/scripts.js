

$(document).ready(function () {

  $('.hamburger-button').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});