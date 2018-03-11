// JavaScript Document
$(document).ready(function(){
'use strict';
	var up=$('<div id="up"><a href="#"></a></div>');
	$('section').append(up);
function p(){$(window).scroll(function(){if($(this).scrollTop()!==0){up.stop(true,false).animate({opacity:1},500);}
else{up.animate({opacity:0},500);}
});}
p();

});