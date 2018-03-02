// JavaScript Document
$(document).ready(function(){
'use strict';
$('menu').append('<ul></ul>');
$('menu ul').append('<li><a href="#" name="key"><div id="key"></div></a></li><li><a href="#" name="mail"><div id="mail"></div></a></li>');
$('menu ul').after('<div id="forma_logon"></div>');
$('menu ul').after('<div id="forma_email"></div>');
$('#forma_logon').append('<form id="access"></form>');
$('#forma_logon form').append('<input class="input" placeholder="Ваш e-mail"><input class="input" type="password" placeholder="Ваш пароль"><button class="button" type="submit" name="send">зарегистрироваться</button><button class="button" type="submit" name="register">отправить</button>');
var a=$('menu ul li a');
$('#forma_email').append('<form id="email"></form>');
$('#email').append('<input id="user_name" placeholder="Ваше имя" ><textarea placeholder="Ваше сообщение" id="text_email" ></textarea><button id="send">отправить</button>');
	
a.click(function(event){event.preventDefault();});

function selectKey(){$('[name="key"]').on('click',function(){if(!$('[name="key"]').hasClass('focus')){$(this).addClass('focus');$('#forma_logon').stop().animate({right:0+'px'},1000,'easeOutCirc');}
else{$('#forma_logon').stop().animate({right:-370+'px'},1000);a.removeAttr('class');
	$('[name="key"]').addClass('class');}});}
	
function selectEmail(){{$('[name="mail"]').on('click',function(){if(!$('[name="mail"]').hasClass('focus')){$(this).addClass('focus');$('#forma_email').stop().animate({right:0+'px'},1000,'easeOutCirc');}
else{$('#forma_email').stop().animate({right:-410+'px'},1000);a.removeAttr('class');
	$('[name="mail"]').addClass('class');}});}}
	
selectKey();
selectEmail();
	//a_first.on('click',function(){$('#forma_logon').animate({right:-370+'px'},1000);});
 /*
function selectFormaEmail(){a_last.on('click',function(){if(!a_last.hasClass('focus'))
{$('menu ul li a:last-of-type').addClass('focus');$('#email').animate({right:0+'px'},1000,'easeOutCirc');}
else{$('#forma_logon').animate({right:-370+'px'},1000);$('menu ul li a:last-of-type').removeAttr('class');}});}
selectFormaEmail();
*/
	

});