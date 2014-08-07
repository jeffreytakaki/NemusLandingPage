  
$('#supersized').scrollingParallax({
staticSpeed : 1.18,
staticScrollLimit : false
}); 

		
//slider setting  
 jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slide_interval          :   6000,		// Length between transitions
					transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	3000,		// Speed of transition
															   
					// Components							
					slide_links				:	'false',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					slides 					:  	[			// Slideshow Images
														
														{image : 'images/nemusbiosblue.png' },
														{image : 'images/ShutterStock - testtubes.jpg' },
														// {image : 'images/slider3.jpg'},
														// {image : 'images/slider4.jpg'}
												]
					
				});
		    });
			

//script recent Tweets
		
$('#tweets').tweet({
			modpath: 'twitter/',
			username: 'envato',
            count: 4,
            loading_text: "Coming Soon"
});
	
		
$(function() {
	
  $('div#clock').countdown("2014/06/28", function(event) {
    var $this = $(this);
    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "weeks":
      case "daysLeft":
        $this.find('span#'+event.type).html(event.value);
        break;
      case "finished":
        $this.hide();
        break;
    }
	
  });
});

