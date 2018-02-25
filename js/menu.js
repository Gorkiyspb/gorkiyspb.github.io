// JavaScript Document
$(document).ready(function createMenu(){
'use strict';
var smenu=('nav ul li a');	
$('nav').append('<ul></ul>');
var t=['о нас','полезности','путешествия','галерея'];
for(var i=0;i<t.length;i++)
	{$('nav ul').append('<li><a href="#">'+t[i]+'</a></li>');}
	
$('nav ul li').append('<ul></ul>');
var ul=$('nav ul li ul');
	
function createSecondmenu(){

$(smenu).on('click',function(){
	if($(smenu).hasClass('a')){$(smenu).removeAttr('class');
		$(ul).stop().animate({bottom:80+'px'},500);
			$(this).addClass('a');									  				   
				$(this).next(ul).stop().animate({bottom:-100+'%'},500);}										
else	
	{$(this).addClass('a');
	 	$(this).next(ul).animate({bottom:-100+'%'},500);
 			$('nav ul li ul:first').css({display:'none'});}});}

createSecondmenu();		

});