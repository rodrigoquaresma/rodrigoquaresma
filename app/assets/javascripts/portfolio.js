//= require modernizr.custom.17475
//= require jquerypp.custom
//= require jquery.elastislide

(function ($){

  var toggleShow = {
    showMenu : function(){
      $('.menu-button-group').toggle();
    }
  };

  $(document).ready(function(){
    $('.menu-button-touch').on('click', toggleShow.showMenu)
  });

  window.onload = function() {

    var current = 0,
  	$preview = $( '#preview' ),
  	$carouselEl = $( '#carousel' ),
  	$carouselItems = $carouselEl.children(),
  	carousel = $carouselEl.elastislide( {
  		current : current,
  		// minItems : 4,
  		onClick : function( el, pos, evt ) {
  			changeImage( el, pos );
  			evt.preventDefault();
  		},
  		onReady : function() {
  			changeImage( $carouselItems.eq( current ), current );
  		},
      // orientation 'horizontal' || 'vertical'
    	orientation : 'horizontal',

    	// sliding speed
    	speed : 500,

    	// sliding easing
    	easing : 'ease-in-out',

    	// the minimum number of items to show.
    	// when we resize the window, this will make sure minItems are always shown
    	// (unless of course minItems is higher than the total number of elements)
    	minItems : 4,

    	// index of the current item (left most item of the carousel)
    	start : 0

    	// click item callback
    	// onClick : function( el, position, evt ) { return false; },
    	// onReady : function() { return false; },
    	// onBeforeSlide : function() { return false; },
    	// onAfterSlide : function() { return false; }
  	});

    function changeImage( el, pos ) {
    	$preview.attr( 'src', el.data( 'preview' ) );
    	$carouselItems.removeClass( 'current-img' );
    	el.addClass( 'current-img' );
    	carousel.setCurrent( pos );
    }
  }

  // $('#carousel').elastislide();

})(jQuery);
