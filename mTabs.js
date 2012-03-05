/*-------------------------------
	Author: Armaan Ahluwalia
	Description : 
	No fuss tabbing with jquery
	
	Dependencies : 
	jQuery
--------------------------------*/			

;(function( $, window, document, undefined ) {

	var pluginName = 'mTabs',
			defaults = {
				nav : null
			};
		
	function Plugin( element, options ) {
		
		this.element = element;
		this.options = $.extend( {}, options );
		this._defaults = defaults;
		this._name = pluginName;
		
		this.mTabCount = (this.mTabCount) ? this.mTabCount + 1 : 1;

		this.init.call(element, this.options);
	}
	
	Plugin.prototype.init = function(options) {

		var $current,
				$current_nav,
				$target = $(this),
				$nav;
		
		//Setup the nav in case it wasn't setup by the user
		if(!options.nav) {
			$nav = $('<div>').addClass('mTabs-nav').appendTo($target.parent());
			$target.children().each(function(index) {
				var $tab_elem = $(this);
				if(!$tab_elem.attr('id')) $tab_elem.attr('id', 'mTabs-' + this.mTabCount + '-' + index + 1);
				$('<a>').appendTo($nav).addClass('mTabs-nav-item').attr('href', '#' + $(this).attr('id')).html(index + 1);
			});
		} else $nav = $(options.nav);
		
		//Setup our jQuery object vars
		$current = $target.children().first();
		$current_nav = $nav.children().first();
		
		//Start real stuff
		$target.children().each(function() {
			$theChild = $(this);
			if( !$theChild.attr('id') ) throw 'One of the divs doesn\'t have an Id. Passed in Nav element wont match target elements. Unable to setup mTabs properly';
			
			$(this).css('display','none');
		});		
		$current.css('display','block');
		$current_nav.addClass('current');
		$nav.children().click(function(e){
			e.preventDefault();
			$current.css('display','none');
			$current_nav.removeClass('current');
			$current_nav = $(this);
			$current_nav.addClass('current');
			$current = $($(this).attr('href'), $target);
			$current.css('display','block');
		});	
	}
	
	$.fn[pluginName] = function ( options ) {
	  return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
		    $.data(this, 'plugin_' + pluginName,
		    new Plugin( this, options ));
			}
		});
  }
		
})( jQuery, window, document );