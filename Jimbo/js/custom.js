/*-----------------------------------------------------------------------------------
* Author: Arash Banihashemi
* Teacher: David Petryca
* URL: http://payotbn.github.io/Jimbo
-----------------------------------------------------------------------------------*/
	  
/* ----------------- Start Document ----------------- */
jQuery(document).ready(function() {

/*----------------------------------------------------*/
/*	Main Navigation
/*----------------------------------------------------*/

	/* Menu */
	(function() {

		var $mainNav    = $('#navigation').children('ul');

		$mainNav.on('mouseenter', 'li', function() {
			var $this    = $(this),
				$subMenu = $this.children('ul');
			if( $subMenu.length ) $this.addClass('hover');
			$subMenu.hide().stop(true, true).slideDown('fast');
		}).on('mouseleave', 'li', function() {
			$(this).removeClass('hover').children('ul').stop(true, true).slideUp('fast');
		});
		
	})();
	
	/* Responsive Menu */
	(function() {
		selectnav('nav', {
			label: 'Menu',
			nested: true,
			indent: '-'
		});
				
	})();


/*----------------------------------------------------*/
/*	Back To Top Button
/*----------------------------------------------------*/

	jQuery('#scroll-top-top a').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 300); 
		return false; 
	}); 
	
/* ------------------ End Document ------------------ */
});
