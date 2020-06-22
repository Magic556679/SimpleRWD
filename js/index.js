$(function(){
    // hamburger icon 的切換
    $("button.hamburger").on("click", function(){
      $(this).toggleClass("is-active");
    });
  });
  $("button.hamburger").click(function(e) {
    e.preventDefault();
    $('.dropdown').toggleClass('active')
  });