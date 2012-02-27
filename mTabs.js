/*-------------------------------
	Author: Armaan Ahluwalia
	Description : 
	No fuss tabbing with jquery
	
	Dependencies : 
	jQuery
--------------------------------*/			

(function( $ ) {
		
	$.fn.mTabs = function(options) {
		$nav = $(options.nav,this);
		$target = $(options.container,this);
		$current = $(options.container + ' > *').first();
		$current_nav = $(options.nav + ' > *').first();
		$(options.container+' > *').css('display','none');

		$current.css('display','block');
		$current_nav.addClass('current');
		$(options.nav + ' > *').each(function(){
			$(this).click(function(e){
				e.preventDefault();
				$current.css('display','none');
				$current_nav.removeClass('current');
				$current_nav = $(this);
				$current_nav.addClass('current');
				$current = $($('a',this).attr('href'));
				$current.css('display','block');
			});
		});
	}
		
})( jQuery )