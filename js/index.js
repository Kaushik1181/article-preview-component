$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
    trigger: 'click',
    placement : 'top',
	  html : true,
    content : '<div class="social-icons bg-dark text-white rounded"><h4 class="icons">SHARE</h4><i class="fab fa-twitter fa-2x icons"></i><i class="fab fa-facebook fa-2x icons"></i><i class="fab fa-pinterest fa-2x icons"></i></div>',
    });
});
