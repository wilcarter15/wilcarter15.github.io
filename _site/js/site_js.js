/*Custom Java for leubasketball.com */

/*JS for email news letter popup*/

     
var alreadyDisplayed = localStorage.getItem('alreadyDisplayed');


if (!alreadyDisplayed || alreadyDisplayed == 'false') {

  setTimeout(function() {
    $('#myModal').modal('show');

    localStorage.setItem('alreadyDisplayed', 'true');

  }, 3000); 
}

//home page scroll
$(document).ready(function(){
	$('a[href^="#scroll"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
    $('img, span').removeClass('fadeIn');
    
});
 



