$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1
      }
    },
    autoplay: true,
	  stopOnHover: true
  });
});

(function($){
	$(document).ready(function(){
    // window.onresize = function(event){
    //   if($(window).width() > 767){
    //     $('ul.dropdown-menu [data-toggle=dropdown]').hover(
    //       function(){
    //         $(this).parent().siblings().removeClass('open');
    //         $(this).parent().toggleClass('open');
    //       },
    //       function(){
    //         $(this).parent().siblings().removeClass('close');
    //         $(this).parent().removeClass('close');
    //       }
    //     );
    //   }
    // }
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});

	});
})(jQuery);
