$(document).ready(function(){
	var divArray = ["#first", "#about", "#resume", "#contact"];
	var index = 0;
	var allowClick = true;
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    }).delay(1200);
			index = divArray.indexOf(target);
	});
});
