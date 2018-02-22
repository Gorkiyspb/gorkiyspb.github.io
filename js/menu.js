// JavaScript Document
$(document).ready(function createMenu(){
'use strict';
$('nav').append('<ul></ul>');
var t=['о нас','полезности','путешествия','галерея'];
for(var i=0;i<t.length;i++){$('nav ul').append('<li><a href="#">'+t[i]+'</a></li>');}

function createSecondmenu(){var smenu=('nav ul li a');
							
$(smenu).on('click',function(){var ind=$(this).index(smenu);
if($(smenu).hasClass('a')){$(smenu).removeClass('a');
$('nav ul li ul').animate({bottom:110+'px'},350);
$(this).addClass('a');$('nav ul li ul').eq(ind).animate({bottom:-100+'%'},350);}
else{$(this).addClass('a');$(smenu).after('<ul></ul>');
$('nav ul li ul').eq(ind).animate({bottom:-100+'%'},350);
$('nav ul li ul:first').css({display:'none'});}
});}
createSecondmenu();	
	

});