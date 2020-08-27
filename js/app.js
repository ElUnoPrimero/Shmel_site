$(function() {

	$('.burger_menu').click(function(event){
		$('.burger_menu , .header_bottom').toggleClass('active');
		$('body').toggleClass('lock')
	});

});