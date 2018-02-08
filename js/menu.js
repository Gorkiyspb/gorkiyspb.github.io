// JavaScript Document
$(document).ready(function menu(){
'use strict';
var a='о нас';
var b='полезности';
var c='путешествия';	
var d='галерея';

	
	$('nav').append('<ul></ul>');
	$('ul').append('<li><a href="#">'+a+'</a></li>');
	$('ul').append('<li><a href="#">'+b+'</a></li>');
	$('ul').append('<li><a href="#">'+c+'</a></li>');
	$('ul').append('<li><a href="#">'+d+'</a></li>');
	
	$('a').eq(i).focusin(function(){$(this).addClass('.focus_a');$('nav ul li').eq(i).append('<ul></ul>');});
	
	/*function focus(){if(i<4){
		
		$('a').eq(i).focusin(function(){$(this).addClass('.focus_a');});
		$('nav ul li').eq(i).append('<ul></ul>');}}					
	
	focus();*/
		
	
//
//$('nav ul li ul').append('<li></li>');

});
