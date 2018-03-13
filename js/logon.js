// JavaScript Document
$(document).ready(function(){
'use strict';
$('menu').append('<ul></ul>');
$('menu ul').append('<li><a href="#" name="key"><div id="key"></div></a></li><li><a href="#" name="mail"><div id="mail"></div></a></li>');
$('menu ul').after('<div id="forma_logon"></div>');
$('menu ul').after('<div id="forma_email"></div>');
$('#forma_logon').append('<form id="access"></form>');
$('#forma_logon form').append('<input class="input" placeholder="Ваш e-mail"><input class="input" type="password" placeholder="Ваш пароль"><button class="button" type="submit" name="send">зарегистрироваться</button><button class="button" type="submit" name="register" >отправить</button>');
var a=$('menu ul li a');
	
$('#forma_email').append('<form id="email" name="email"></form>');
	
$('#email').append('<input class="email_user" placeholder="Ваше имя" ><input class="email_user" placeholder="Ваш e-mail"><textarea placeholder="Ваше сообщение" id="text_email"></textarea><div><p><input id="checkbox" type="checkbox" name="checkbox" value>Я согласен на обработку моих персональных данных.</p></div><button id="send" name="send2">отправить</button>');
	
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

$('#checkbox').on('click',function(){if(($('#checkbox').prop('checked')))
{$('[name="send2"]').css({border:'none',boxShadow:'-0.5px 0.5px 1px 0.5px black',background:'#5c7939'});
$('[name="send2"]').css({border:'none',boxShadow:'-0.5px 0.5px 1px 0.5px black',background:'#5c7939'});}
else{$('[name="send2"]').css({background:"",boxShadow:""});}});
	
$(document).on('click',function(e){if(!$('#key').is(e.target)&& $('#forma_logon').has(e.target).length===0)
{$('#forma_logon').stop().animate({right:-370+'px'},1000,'easeOutCirc');$('[name="key"]').removeAttr('class');}});
	
$(document).on('click',function(e){if(!$('#mail').is(e.target)&& $('#forma_email').has(e.target).length===0)
{$('#forma_email').stop().animate({right:-410+'px'},1000,'easeOutCirc');$('[name="mail"]').removeAttr('class');}});
	
});


