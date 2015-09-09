$(document).ready(function(){
	var divArray = ["#first", "#about", "#resume", "#contact"];
	var index = 0;
	var allowClick = true;
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
			if (!allowClick)
				return;
			allowClick = false;

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
			setTimeout(function(){allowClick = true;}, 1200);
			index = divArray.indexOf(target);
	});
	$(window).bind('mousewheel DOMMouseScroll', function(event){
		if (!allowClick)
			return;
		if (event.originalEvent.wheelDelta > 0 && index != 0){
			event.preventDefault();
			allowClick = false;
			var newInd = index - 1;
			var target = $(divArray[newInd]);
			var anchor = divArray[newInd];

			$('html, body').stop().animate({
					'scrollTop' : target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = anchor;
			});
			setTimeout(function(){allowClick = true;}, 1200);
			index = newInd;
		}
		else if (event.originalEvent.wheelDelta < 0 && index != (divArray.length)) {
			event.preventDefault;
			allowClick = false;
			var newInd = index+1;
			var target = $(divArray[newInd]);
			var anchor = divArray[newInd];
			$('html, body').stop().animate({
					'scrollTop' : target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = anchor;
			});
			setTimeout(function(){allowClick = true;}, 1200);
			index = newInd;
		}
	});
});
