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
$('nav ul li ul:first').css({display:'none'});	
$(ul).append('<li><span>hello</span></li><li><span>hello</span></li><li><span>hello</span></li><li><span>hello</span></li>');

$(smenu).on('click',function(){if($(smenu).hasClass('a')){$(smenu).removeAttr('class');
		$(smenu).next(ul).stop().animate({bottom:160+'px'},500);   
			$(this).addClass('a');				  				   
				$(this).next(ul).stop().animate({bottom:-100+'%'},500);}														 															
else	
	{$(this).addClass('a');
	 	$(this).next(ul).stop().animate({bottom:-100+'%'},500);}});

var li=('nav ul li ul li');
$(li).on('click', function(){
	if($(ul).next(li).hasClass('li')){$(li).removeAttr ('class');}
		else{$(li).removeAttr ('class').css({cursor:'pointer'});$(this).addClass('li').css({cursor:'default'});}});	
	
}
createSecondmenu();	
	
$(document).click(function(e){
if(!$(smenu).is(e.target)&& $(ul).has(e.target).length===0){
	$(ul).stop().animate({bottom:160+'px'},500);
		$(smenu).removeAttr('class');}			
});
});