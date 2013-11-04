$(document).ready(function(){
$('.block_button_type').click(function(){
	$(this).parents('.flip-container .flipper, .flip-container.hover .flipper').css({
	'-webkit-transform': 'rotateY(180deg)',
    '-moz-transform': 'rotateY(180deg)',
    '-o-transform': 'rotateY(180deg)',
    'transform': 'rotateY(180deg)'
	});	
});
$('.close_form').click(function(){
	$(this).parents('.flip-container .flipper, .flip-container.hover .flipper').css({
	'-webkit-transform': 'rotateY(0deg)',
    '-moz-transform': 'rotateY(0deg)',
    '-o-transform': 'rotateY(0deg)',
    'transform': 'rotateY(0deg)'
	});
});
});//end ready













