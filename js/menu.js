// JavaScript Document
$(document).ready(function menu(){
'use strict';
var a='о нас';
var b='полезности';
var c='путешествия';	
var d='галерея';
	
	$('nav').append('<ul></ul>');
	
	$('nav ul').append('<li><a href="#">'+a+'</a></li>');
	$('nav ul').append('<li><a href="#">'+b+'</a></li>');
	$('nav ul').append('<li><a href="#">'+c+'</a></li>');
	$('nav ul').append('<li><a href="#">'+d+'</a></li>');
	$('nav ul li').append('<ul></ul>');
	var i=$('nav ul li ul');	
var e=0;
	$('nav ul li a').click(function(){$(i).eq(e).animate({'margin-top':100+'px'});});
								 
	
	
	/*function focus(){if(i<4){
		
		$('a').eq(i).focusin(function(){$(this).addClass('.focus_a');});
		$('nav ul li').eq(i).append('<ul></ul>');}}					
	
	focus();*/
		
	
//
//$('nav ul li ul').append('<li></li>');

});
