$(document).ready(function(){ 
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) { 
			$('#goTop').fadeIn(); 
		} else { 
			$('#goTop').fadeOut(); 
		} 
	}); 
	$('#goTop').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 800); 
		return false; 
	}); 
});