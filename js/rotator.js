// JavaScript Document
//window.onload=function(){

//-----------------------------------------------------------------
$(document).ready(function controlRotator(){
'use strict';	
$('#rotator').click(function(event){event.preventDefault();});	
var t=0;
var img=new Array([]);
	img[0]='images/delfin.png';
	img[1]='images/mallard.png';
	img[2]='images/children.png';	
	img[3]='images/people.png';			
	img[4]='images/crumb.png';
	img[5]='images/baby.png';
var speed=300;
var pause=10000;	
var botton=('#rotator');
	$(botton).append('<div id="left_b"></div>');
	$(botton).append("<div id='right_b'></div>"); 
	$(botton).append("<div id='count'></div>");
function pointer(){for(var i=0;i<img.length;i++){$('#count').append('<span class="point">'+i+'</span>');}}
pointer();				
$('#left_b').append('<a href="#"><div id="strelka_l"></div></a>').click(function(){animeslide("prew");});
$('#right_b').append('<a href="#"><div id="strelka_r"></div></a>').click(function(){animeslide("next");});	
//$('#rotator').append('<img class="img"  alt=" " src="'+img[t]+'">');
$('.point').eq(0).addClass('active');
//for(var b=0;b<img.length-1;++b){$('#rotator').append('<img class="img"  alt=" " src="'+img[b]+'">');}
//$('#rotator').append('<img class="img"  alt=" " src="'+img[t]+'">');
for(var a=0;a<img.length;a++){$('#count').after('<img class="img"  alt=" " src="'+img[a]+'">');}
var animeslide=function anime(arrow){
		if(arrow==="next"){rotator_next();if(t===img.length-1)
						 {
						  t=0;$('#count').after('<img class="img"  alt=" " src="'+img[t]+'">');
						  $('#rotator').append('<img class="img"  alt=" " src="'+img[t]+'">');}
						  else{t++;$('#count').after('<img class="img"  alt=" " src="'+img[t]+'">');
						$('#rotator').append('<img class="img"  alt=" " src="'+img[t]+'">');}}
		else if(arrow==="prew"){rotator_prew();if(t===0)
						{
						t=img.length-1;$('#count').after('<img class="img"  alt=" " src="'+img[t]+'">');$('#rotator').append('<img class="img"  alt=" " src="'+img[t]+'">');}
						  else{
						t-=1;$('#count').after('<img class="img"  alt=" " src="'+img[t]+'">');$('#rotator').append('<img class="img"  alt=" " src="'+img[t]+'">');}}
		else{t=arrow;}		
$(".point.active").removeClass("active");
$('.point').eq(t).addClass('active');};
function stopAnimate(){
$('.stripe').remove();
$('.img').remove();}
var rotator_next=function(){stopAnimate();for(var f=0;f<10;f++){$('#rotator').append('<div class="stripe" name="'+f+'" style="left:'+f*(116)+'px"><img class="img" style="left:'+(-116)*f+'px" alt="img" src="'+img[t]+'"></div>');
$('[name='+f+']').animate({opacity:0},speed*f);}};
var rotator_prew=function(){stopAnimate();for(var f=0;f<10;f++){$('#rotator').append('<div class="stripe" name="'+f+'" style="right:'+f*(116)+'px"><img class="img" style="right:'+(-116)*f+'px" alt="img" src="'+img[t]+'"></div>');
$('[name='+f+']').animate({opacity:0},speed*f);}};	
$('.point').click(function(){var r=parseFloat($(this).text());						 
$('.img').attr('src',img[r]);animeslide(r);
rotator_prew1();});
var rotator_prew1=function(){stopAnimate();for(var f=0;f<10;f++){$('#rotator').append('<div class="stripe" style="width:100%" name="'+f+'" ><img class="img" alt="img"  src="'+img[t]+'"></div>');$('.img').css({opacity:0});							 
$('.img').animate({opacity:1},2000);}};
var slideTime; 
var stop=false;
function start(){if(!stop){slideTime=setTimeout(function(){start();},pause);animeslide('next');};
		 
$('#rotator').hover(function(){clearTimeout(slideTime);},function(){var stop=false;});}

	start();});








