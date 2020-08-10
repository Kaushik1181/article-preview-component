$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
    trigger: 'focus',
    placement : 'left',
	  html : true,
    content : '<div class="social-icons bg-dark text-white rounded"><h5 class="icons">SHARE</h5><i class="fab fa-twitter icons"></i><i class="fab fa-facebook icons"></i><i class="fab fa-pinterest icons"></i></div>',
    });
});
