$(window).scroll({
  scrolldown();
},
function scrolldown(){
  var viewportHeight = $(window).height();
  if (this.scrollTop() > viewportHeight && $(".bmenu").left < 0){
    $(".bmenu").animate({
      left: 0
    }, 500);
  };
})
