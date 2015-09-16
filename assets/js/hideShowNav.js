function scrolldown(){
  var viewportHeight = $(window).height();
  if ($(window).scrollTop() > 145 && $(".bmenu").offset().left < 0){
    $(".bmenu").animate({
      left: 0 + "px"
    }, 500);
  }
  else if ($(window).scrollTop() < 145 && $(".bmenu").offset().left >= 0){
    $(".bmenu").animate({
      left: -6.2 + "em"
    }, 500);
  }
}

$(window).scroll(function() {
  scrolldown();
})
