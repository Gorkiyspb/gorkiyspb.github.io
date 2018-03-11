// JavaScript Document
$(document).ready(function(){
'use strict';
$('menu').append('<ul></ul>');
$('menu ul').append('<li><a href="#" name="key"><div id="key"></div></a></li><li><a href="#" name="mail"><div id="mail"></div></a></li>');
$('menu ul').after('<div id="forma_logon"></div>');
$('menu ul').after('<div id="forma_email"></div>');
/*$('[name="key"]').after('<div id="forma_logon"></div>');
$('[name="mail"]').after('<div id="forma_email"></div>');*/
$('#forma_logon').append('<form id="access"></form>');
$('#forma_logon form').append('<input class="input" placeholder="Ваш e-mail"><input class="input" type="password" placeholder="Ваш пароль"><button class="button" type="submit" name="send">зарегистрироваться</button><button class="button" type="submit" name="register">отправить</button>');
var a=$('menu ul li a');
	
$('#forma_email').append('<form id="email"></form>');
	
$('#email').append('<input class="email_user" placeholder="Ваше имя" ><input class="email_user" placeholder="Ваш e-mail"></><textarea placeholder="Ваше сообщение" id="text_email"></textarea><button id="send">отправить</button>');
	
function chooseButton(){a.on('click',function()
{if(a.hasClass('focus'))
{a.removeAttr('class');chooseLogon();chooseMail();
$(this).addClass('focus');chooseLogon();chooseMail();}
else{$(this).addClass('focus');chooseLogon();chooseMail();}});}

chooseButton();	

function chooseLogon(){if(!$('[name="key"]').hasClass('focus'))
{$('#forma_logon').stop().animate({right:-370+'px'},1000,'easeOutCirc');}
else{$('#forma_logon').stop().animate({right:0+'px'},1000,'easeOutCirc');}}	
	
function chooseMail(){if(!$('[name="mail"]').hasClass('focus'))
{$('#forma_email').stop().animate({right:-410+'px'},1000,'easeOutCirc');}
else{$('#forma_email').stop().animate({right:0+'px'},1000,'easeOutCirc');}}		

$('.button').mouseenter(function(){if($('.button').hasClass('button_active'))
{$('.button').removeClass('button_active');$(this).addClass('button_active');}
else{$(this).addClass('button_active');}});

$('#send').mouseover(function(){if(document.getElementById('send').background !=='#799f4b')
{$(this).css({background:'#799f4b',boxShadow: 'none',border: '1px solid #5c7939'});}});
$('#send').mouseout(function(){if(document.getElementById('send').background !=='#5c7939')	
{$(this).css({background: '#5c7939',boxShadow:'-1px 1px 1px 1px black',border:'none'});}});

$(document).on('click',function(e){if(!$('#key').is(e.target)&& $('#forma_logon').has(e.target).length===0)
{$('#forma_logon').stop().animate({right:-370+'px'},1000,'easeOutCirc');$('[name="key"]').removeAttr('class');}});
	
$(document).on('click',function(e){if(!$('#mail').is(e.target)&& $('#forma_email').has(e.target).length===0)
{$('#forma_email').stop().animate({right:-410+'px'},1000,'easeOutCirc');$('[name="mail"]').removeAttr('class');}});
	
});


