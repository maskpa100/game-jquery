$(document).ready(function() {

var speedAnimate = 250; // Скорость передвигания кубиков
var tyyyfvv = 500 ;     // скорость при переключении удаления
var skropss = 50 // Скорость полета кубиков или запуск повторно функции
var sizeHorizontal = 10; // Размер доски по горизонтали ->
var sizeVertically = 10; // Размер доски по вертикали
var imageSize = 50 ; // Размер картинки
var Lement = ["Blue", "Red", "Green","Yellow", "Grey", "Orange", "Pink", "Purple" ,"Brown" ] ;//Массив классов с картинками
var speedDisappearance = 350 ; //Скорость изчезания кубиков
var countColor = 1 ; //Количество цветов начиная с 0 до 8
var gameMoves = 1000; // Количество ходов. 
var inter = 0;
var VarUnbindBind = true;
var checkOBR = false; // кубики падают
var MatchesOBR = false;// удаления кубиков идет 
var topGame = 100;
var purposeGame = new Array();
var yesProv = 0 ;
var names = [
["no","no","no","no","no","no","no","no","no","no"],
["no","no","yes","yes","no","yes","yes","no","yes","no"],
["no","no","yes","yes","yes","yes","yes","yes","yes","no"],
["no","no","no","yes","no","no","yes","yes","yes","no"],
["no","yes","no","no","yes","yes","yes","yes","no","no"],
["no","yes","yes","no","yes","yes","yes","yes","no","no"],
["no","yes","yes","yes","no","no","yes","yes","yes","no"],
["no","yes","yes","yes","no","yes","yes","yes","yes","no"],
["no","yes","yes","yes","yes","yes","yes","yes","yes","no"],
["no","no","no","no","no","no","no","no","no","no"]];
var namesPurpose = [
[0, 15],
[1, 30]
];

console.log()
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameOver(){
	$(".www").append('<div class="endLevel"><div class="hPurpose" style="margin: 15px 0px 0px 0px;"><b>ВЫ ПРОИГРАЛИ</b></div><div class="brokenHeart" ></div><span class="brokenHeartText" ><b> - 1</b></span></div><div class="background75"></div>');
console.log('ВЫ ПРОИГРАЛИ')
}

function moves (){
	if(gameMoves == 0)
	{gameOver();
     
    }
	$(".www").append('<div class="moves"><div class="hPurpose" style="margin: 15px 0px 0px 0px;"><b>ХОДЫ</b></div><div class="movesCount" ><b>'+gameMoves+'</b></div></div>');
}
moves ();

var namesPurposeCount = Object.keys(namesPurpose).length;
//Начало функции создания элементов для счета
function purposeSta() {
	for( i = 0 ; i < namesPurposeCount; i++)
	{   purposeGame[i] = 0;}
}
purposeSta()
function purposeS() {
	$(".www").append('<div class="purpose" style="height: '+(50+(namesPurposeCount*50))+'px;"><span class="purposeText"><b>ЦЕЛЬ</b></span></div>');
	for( i = 0 ; i < namesPurposeCount; i++)
	{ $(".purpose").append('<div class="ror-'+i+' '+Lement[namesPurpose[i][0]]+'" style="position: absolute; top: '+((50*i)+45)+'px; left: 20px;"><div class="divPurpose"><span class=" vPurpose" >'+namesPurpose[i][1]+'/</span ><span class=" hPurpose" >'+purposeGame[i]+'</span ></div></div>')	 }
}
purposeS()
function victoryF (){
	$(".www").append('<div class="endLevel"><div class="hPurpose" style="margin: 15px 0px 0px 0px;"><b>ПОБЕДА</b></div></div><div class="background75"></div>');
	$('.container').unbind('click');
}
function purposeStart() {
	if($('.endLevel').length)
	{return;
    }else{
	let victory = 0; 
	for( i = 0 ; i < namesPurposeCount; i++)
	{  
        if(purposeGame[i] >= namesPurpose[i][1])
		{$(".ror-"+i).html('<div class="divPurpose"><div class="ok"></div></div>');
	     victory += 1;
		 } 
	}
	if (victory == namesPurposeCount)
	{victoryF ();}}
}

//Начало функции создания элементов для счета
//Начало функции изменения счета
function purpose() { 
	for( i = 0 ; i < countColor+1; i++)
	{  $( ".purpose ."+Lement[i]+" .hPurpose" ).text( purposeGame[i] )}
}
purpose();
//Конец функции изменения счета
//setInterval(Matchesuu,10000);
setTimeout(Matchesuu,200);
function Matchesuu() {Matches(50000);}
//setInterval(check,5000);
setTimeout(check,200);
//Начала функции фона и обводки
function backgroundGame() {
	for(let i = 0; i < sizeHorizontal; i++)
	{
	   for(var ii = 0; ii < sizeVertically; ii++)
	   {
			if(names[i][ii] == 'yes' )
			{$( "#backgroundGame" ).append( '<div class="backgroundGame " style="position: absolute; top: '+((459-((sizeVertically-i)-1)*imageSize)+topGame)+'px; left: '+(ii*imageSize)+'px;"></div>' );
		    }
			if(names[i][ii] == 'yes' && names[i-1][ii] == 'no' )
			{
            $( "#backgroundGame" ).append( '<div class="backgroundEdgesTop" style="top: '+(((459-((sizeVertically-i)-1)*imageSize)+topGame)-14)+'px; left: '+((ii*imageSize)-14)+'px; " '+i+'="oo"></div>' );
            }
			if(names[i][ii] == 'yes' && names[i+1][ii] == 'no' )
			{
            $( "#backgroundGame" ).append( '<div class="backgroundEdgesBottom" style="top: '+(((459-((sizeVertically-i)-1)*imageSize)+topGame)+50)+'px; left: '+((ii*imageSize)-14)+'px; " '+i+'="oo"></div>' );
            }
			if(names[i][ii] == 'yes' && names[i][ii-1] == 'no' )
			{
            $( "#backgroundGame" ).append( '<div class="backgroundEdgesLeft" style="top: '+(((459-((sizeVertically-i)-1)*imageSize)+topGame)-14)+'px; left: '+((ii*imageSize)-14)+'px; " '+i+'="oo"></div>' );
            }	
			if(names[i][ii] == 'yes' && names[i][ii+1] == 'no' )
			{
            $( "#backgroundGame" ).append( '<div class="backgroundEdgesRight" style="top: '+(((459-((sizeVertically-i)-1)*imageSize)+topGame)-14)+'px; left: '+((ii*imageSize)+50)+'px; " '+i+'="oo"></div>' );
            }
	   }
	}
}
backgroundGame();
//Конец функции фона и обводки
//Начало функции удаления кубиков
function Matches(inter) {
	if (checkOBR == true)
	{
		for(let i = 0; i < sizeHorizontal; i++)
		{
		   for(var ii = 0; ii < sizeVertically; ii++)
		   { 
			  if( $("div").is(".position-"+i+"-"+ii) && $("div").is(".position-"+i+"-"+(ii+1)) && $("div").is(".position-"+i+"-"+(ii+2)) ){
				if(document.querySelector(".position-"+i+"-"+ii).classList[0] == document.querySelector(".position-"+i+"-"+(ii+1)).classList[0] && document.querySelector(".position-"+i+"-"+(ii+1)).classList[0] == document.querySelector(".position-"+i+"-"+(ii+2)).classList[0] &&  document.querySelector(".position-"+i+"-"+ii).classList[2] != "deleteK" &&  document.querySelector(".position-"+i+"-"+(ii+1)).classList[2] != "deleteK" &&  document.querySelector(".position-"+i+"-"+(ii+2)).classList[2] != "deleteK")
				{ 	 
					if(inter == 300)
					{console.log(inter)
						for( iii = 0 ; iii < countColor+1; iii++)
							{
								if(document.querySelector(".position-"+i+"-"+ii).classList[0] == Lement[iii])
								 {
									 purposeGame[iii] +=3;
									 purpose();
								 } 					 
							 }

							 $('.position-'+i+'-'+ii).addClass("deleteK");
							 $(".position-"+i+"-"+(ii+1)).addClass("deleteK");
							 $(".position-"+i+"-"+(ii+2)).addClass("deleteK");		
						 setTimeout(()=>{
							 $(".position-"+i+"-"+(ii)).hide(speedDisappearance,function(){$(this).remove();});
							 $(".position-"+i+"-"+(ii+1)).hide(speedDisappearance,function(){$(this).remove();});
							 $(".position-"+i+"-"+(ii+2)).hide(speedDisappearance,function(){$(this).remove();});  
						  },tyyyfvv);
						  var finRez = true;
						  setTimeout(check,speedDisappearance+850);
						  return finRez ;
					}else{
						for( iii = 0 ; iii < countColor+1; iii++)
							{
								if(document.querySelector(".position-"+i+"-"+ii).classList[0] == Lement[iii])
								 {
									 purposeGame[iii] +=3;
									 purpose();
								 } 					 
							 }
						 //setTimeout(()=>{
							 $('.position-'+i+'-'+ii).addClass("deleteK");
							 $(".position-"+i+"-"+(ii+1)).addClass("deleteK");
							 $(".position-"+i+"-"+(ii+2)).addClass("deleteK");		

							 $(".position-"+i+"-"+(ii)).hide(speedDisappearance,function(){$(this).remove();});
							 $(".position-"+i+"-"+(ii+1)).hide(speedDisappearance,function(){$(this).remove();});
							 $(".position-"+i+"-"+(ii+2)).hide(speedDisappearance,function(){$(this).remove();});  
						  //},speedAnimate);
						  var finRez = true;
						  setTimeout(check,speedDisappearance+100);
						  //return finRez ;
					}
				}
			  }
			  if( $("div").is(".position-"+i+"-"+ii) && $("div").is(".position-"+(i+1)+"-"+ii) && $("div").is(".position-"+(i+2)+"-"+ii) ){
				if(document.querySelector(".position-"+i+"-"+ii).classList[0] == document.querySelector(".position-"+(i+1)+"-"+ii).classList[0] && document.querySelector(".position-"+(i+1)+"-"+ii).classList[0] == document.querySelector(".position-"+(i+2)+"-"+ii).classList[0] &&  document.querySelector(".position-"+i+"-"+ii).classList[2] != "deleteK" &&  document.querySelector(".position-"+(i+1)+"-"+ii).classList[2] != "deleteK"  &&  document.querySelector(".position-"+(i+2)+"-"+ii).classList[2] != "deleteK")
				{	
			
					if(inter == 300)
					{
						for( iii = 0 ; iii < countColor+1; iii++)
							{
								if(document.querySelector(".position-"+i+"-"+ii).classList[0] == Lement[iii])
									{
										purposeGame[iii] +=3;
										purpose();
									} 					 
							}

							$('.position-'+i+'-'+ii).addClass("deleteK");
							$(".position-"+(i+1)+"-"+ii).addClass("deleteK");
							$(".position-"+(i+2)+"-"+ii).addClass("deleteK");					
						setTimeout(()=>{							
							$('.position-'+i+'-'+ii).hide(speedDisappearance,function(){$(this).remove();});
							$(".position-"+(i+1)+"-"+ii).hide(speedDisappearance,function(){$(this).remove();});
							$(".position-"+(i+2)+"-"+ii).hide(speedDisappearance,function(){$(this).remove();});	
						},tyyyfvv);
						var finRez = true;
						setTimeout(check,speedDisappearance+850);
						return finRez ;
					}else{
						for( iii = 0 ; iii < countColor+1; iii++)
							{
								if(document.querySelector(".position-"+i+"-"+ii).classList[0] == Lement[iii])
									{
										purposeGame[iii] +=3;
										purpose();
									} 					 
							}
						//setTimeout(()=>{
							$('.position-'+i+'-'+ii).addClass("deleteK");
							$(".position-"+(i+1)+"-"+ii).addClass("deleteK");
							$(".position-"+(i+2)+"-"+ii).addClass("deleteK");					
							
							$('.position-'+i+'-'+ii).hide(speedDisappearance,function(){$(this).remove();});
							$(".position-"+(i+1)+"-"+ii).hide(speedDisappearance,function(){$(this).remove();});
							$(".position-"+(i+2)+"-"+ii).hide(speedDisappearance,function(){$(this).remove();});	
						//},speedAnimate);
						var finRez = true;
						setTimeout(check,speedDisappearance+100);
						//return finRez ;	
					}
				}
		} //setTimeout(()=>{$('.container').bind('click', animateTest)},speedDisappearance);
		}}
    }
	
//============
var Matchesrezs = 0;
setTimeout(()=>{
	for(let i = 0; i < sizeHorizontal; i++)
	{
       for(var ii = 0; ii < sizeVertically; ii++)
	   {
		  if( $("div").is(".position-"+i+"-"+ii) && $("div").is(".position-"+i+"-"+(ii+1)) && $("div").is(".position-"+i+"-"+(ii+2)) ){
			if(document.querySelector(".position-"+i+"-"+ii).classList[0] == document.querySelector(".position-"+i+"-"+(ii+1)).classList[0] && document.querySelector(".position-"+i+"-"+(ii+1)).classList[0] == document.querySelector(".position-"+i+"-"+(ii+2)).classList[0] &&  document.querySelector(".position-"+i+"-"+ii).classList[2] != "deleteK")
			{Matchesrezs +=1
			}
		  }
		  if( $("div").is(".position-"+i+"-"+ii) && $("div").is(".position-"+(i+1)+"-"+ii) && $("div").is(".position-"+(i+2)+"-"+ii) ){
			if(document.querySelector(".position-"+i+"-"+ii).classList[0] == document.querySelector(".position-"+(i+1)+"-"+ii).classList[0] && document.querySelector(".position-"+(i+1)+"-"+ii).classList[0] == document.querySelector(".position-"+(i+2)+"-"+ii).classList[0] &&  document.querySelector(".position-"+i+"-"+ii).classList[2] != "deleteK")
			{Matchesrezs+=1
			}
} //setTimeout(()=>{$('.container').bind('click', animateTest)},speedDisappearance);
}
}
//console.log(Matchesrezs)
if(Matchesrezs === 0)
{ MatchesOBR = true;

}else{
 setTimeout(check,300);}

},400);
//------

}
// Конец функции удаления кубиков
// Начало функции добавления кубиков
function check() {
	checkOBR = false;
	if(!$('.deleteK').length && MatchesOBR === true)
	{
	for(let ii = 0; ii < sizeHorizontal;ii++)
	{
       for(var i = 0; i < sizeVertically; i++)
	   {   
			if(names[i][ii] == 'yes' )
			{  
				if($("div").hasClass("position-"+i+"-"+ii+"") )
				{	
					break;
				}else{
				   $(".container").prepend('<div  class="'+Lement[getRandomInRange(0, countColor)]+' position-'+i+'-'+ii+'" style="position: absolute; top: 159px; left: '+(ii*50)+'px;" ></div>')
                   $('.position-'+i+'-'+ii).animate({ left:(ii*imageSize), top:(459-((sizeVertically-i)-3)*imageSize) },100);
				   break; 
				 }
			}
    }}
	for(let i = 0; i < sizeHorizontal; i++)
	{
       for(var ii = 0; ii < sizeVertically; ii++)
	   {   

   
			if ( $("div").hasClass("position-"+i+"-"+ii+"") )
			{
		    }
				else
				{
				    	for(var iii = (sizeVertically-(sizeVertically-i))-1; iii > -1; iii--)
						{// console.log("position-"+(i-1)+"-"+ii+"")
							if ( $("div").hasClass("position-"+(iii)+"-"+ii+"") )
							{	if(names[i][ii] == "yes")
								{	if ($('.activ').length)
									{$('.activ').remove();}
									var ffts = '.position-'+iii+'-'+ii;
									$(ffts).animate({ left:(ii*imageSize), top:((459-((sizeVertically-i)-1)*imageSize)+topGame) },50);
									$(ffts).attr("class", $(ffts).attr("class").split(' ')[0]+" position-"+i+"-"+ii)
									iii = -100;
								}
							  }else{

							  }
				    }

                 }
   }}
	}

 // Начала
var isrez = 0;

for(var is = 0; is < sizeHorizontal; is++)
	{
       for(var iis = 0; iis < sizeVertically; iis++)
	   {	   if(names[is][iis] == "yes")
	   {yesProv++
       }
			if ( $("div").hasClass("position-"+is+"-"+iis+"") )
			{isrez++}
	   }
	}//console.log(isrez);console.log(yesProv)
	if(isrez == yesProv)
		{  
			checkOBR = true;
			setTimeout(Matchesuu,speedDisappearance);
			
			}
		else{
			checkOBR = false;
			
            setTimeout(check,300);
			}
			yesProv = 0
			purposeStart();
/* if(checkOBR == true && MatchesOBR == true)
{}else{setTimeout(check,300);} */
//Конец

}

var animateTest = function() {
	console.log(checkOBR)
if(checkOBR === true && MatchesOBR === true)
{//console.log(event.target.classList[2])
    if($('.deleteK').length)
	{}else{
	 if ($('.activ').length)
		{    if($(event.target).attr('class').match(/position(....)/)[0] == 'position-'+(+($('#activ').attr('class').match(/position(....)/)[0])[9]+1)+'-'+($('#activ').attr('class').match(/position(....)/)[0])[11])
				{var a,b;
			      a = $(event.target).attr('class').match(/position(....)/)[0];
				  b = 'position-'+($('#activ').attr('class').match(/position(....)/)[0])[9]+'-'+($('#activ').attr('class').match(/position(....)/)[0])[11],animateTest;
						$('.activ').remove()
						$('.'+b).toggleClass(a+' '+b)
						$(event.target).toggleClass(b+' '+a)
					if(Matches(300))
                        {
						$('.container').unbind('click');
						$($('.'+a)).animate({top: $('.'+b).css( "top")},speedAnimate,);
						$($('.'+b)).animate(
					    {top: $('.'+a).css( "top")},speedAnimate,(function(){$('.container').bind('click', animateTest);}));
						gameMoves -= 1;
						moves ();
						}else{
							console.log("нет хода")
							$('.'+a).toggleClass(a+' '+b)
							$(event.target).toggleClass(b+' '+a)		
							$('.container').unbind('click');
							$($('.'+a)).animate({top: $('.'+b).css( "top")},speedAnimate,
							                (function(){
											$('.'+b).animate(
											{top: $('.'+a).css( "top")},speedAnimate);
								}));
							$('.'+b).animate(
								{top: $('.'+a).css( "top")},
								speedAnimate,
								(function(){
											$('.'+a).animate(
											{top: $('.'+b).css( "top")},
											speedAnimate,
											(function(){
                                            $('.container').bind('click', animateTest);
											})
										    );
								}));}}
			else if($(event.target).attr('class').match(/position(....)/)[0] == 'position-'+(+($('#activ').attr('class').match(/position(....)/)[0])[9]-1)+'-'+($('#activ').attr('class').match(/position(....)/)[0])[11])
				{var a,b;
			      a = $(event.target).attr('class').match(/position(....)/)[0];
				  b = 'position-'+($('#activ').attr('class').match(/position(....)/)[0])[9]+'-'+($('#activ').attr('class').match(/position(....)/)[0])[11],animateTest;
			    	$('.activ').remove()
					$('.'+b).toggleClass(a+' '+b)
	                $(event.target).toggleClass(b+' '+a)
					if(Matches(300))
                        {
						$('.container').unbind('click');
						$($('.'+a)).animate({top: $('.'+b).css( "top")},speedAnimate,);
						$($('.'+b)).animate(
					    {top: $('.'+a).css( "top")},speedAnimate,(function(){$('.container').bind('click', animateTest);}));
						gameMoves -= 1;
						moves ();
						}else{
							$('.'+a).toggleClass(a+' '+b)
							$(event.target).toggleClass(b+' '+a)		
							$('.container').unbind('click');
							$($('.'+a)).animate({top: $('.'+b).css( "top")},speedAnimate,
							                (function(){
											$('.'+b).animate(
											{top: $('.'+a).css( "top")},speedAnimate);
								}));
							$('.'+b).animate(
								{top: $('.'+a).css( "top")},
								speedAnimate,
								(function(){
											$('.'+a).animate(
											{top: $('.'+b).css( "top")},
											speedAnimate,
											(function(){
                                            $('.container').bind('click', animateTest);
											})
										    );
								}));}
				}
			else if($(event.target).attr('class').match(/position(....)/)[0] == 'position-'+($('#activ').attr('class').match(/position(....)/)[0])[9]+'-'+(+($('#activ').attr('class').match(/position(....)/)[0])[11]+1))
				{var a,b;
			      a = $(event.target).attr('class').match(/position(....)/)[0];
				  b = 'position-'+($('#activ').attr('class').match(/position(....)/)[0])[9]+'-'+($('#activ').attr('class').match(/position(....)/)[0])[11],animateTest;
			    	$('.activ').remove()
					$('.'+b).toggleClass(a+' '+b)
	                $(event.target).toggleClass(b+' '+a)
					if(Matches(300))
                        {
						$('.container').unbind('click');
						$($('.'+a)).animate({left: $('.'+b).css( "left")},speedAnimate,);
						$($('.'+b)).animate(
					    {left: $('.'+a).css( "left")},speedAnimate,(function(){$('.container').bind('click', animateTest);}));
                        gameMoves -= 1;
						moves ();
						}else{
							console.log("нет хода")
							$('.'+a).toggleClass(a+' '+b)
							$(event.target).toggleClass(b+' '+a)		
							$('.container').unbind('click');
							$($('.'+a)).animate({left: $('.'+b).css( "left")},speedAnimate,
							                (function(){
											$('.'+b).animate(
											{left: $('.'+a).css( "left")},speedAnimate);
								}));
							$('.'+b).animate(
								{left: $('.'+a).css( "left")},
								speedAnimate,
								(function(){
											$('.'+a).animate(
											{left: $('.'+b).css( "left")},
											speedAnimate,
											(function(){
                                            $('.container').bind('click', animateTest);
											})
										    );
								}));}
				}
			else if($(event.target).attr('class').match(/position(....)/)[0] == 'position-'+($('#activ').attr('class').match(/position(....)/)[0])[9]+'-'+(+($('#activ').attr('class').match(/position(....)/)[0])[11]-1))
			   {var a,b;
				 a = $(event.target).attr('class').match(/position(....)/)[0];
				  b = 'position-'+($('#activ').attr('class').match(/position(....)/)[0])[9]+'-'+($('#activ').attr('class').match(/position(....)/)[0])[11],animateTest;
			    	$('.activ').remove()
					$('.'+b).toggleClass(a+' '+b)
	                $(event.target).toggleClass(b+' '+a)
					if(Matches(300))
                        {
						$('.container').unbind('click');
						$($('.'+a)).animate({left: $('.'+b).css( "left")},speedAnimate,);
						$($('.'+b)).animate(
					    {left: $('.'+a).css( "left")},speedAnimate,(function(){$('.container').bind('click', animateTest);}));
						gameMoves -= 1;
						moves ();
						}else{
							console.log("нет хода 11")
							$('.'+a).toggleClass(a+' '+b)
							$(event.target).toggleClass(b+' '+a)		
							$('.container').unbind('click');
							$($('.'+a)).animate({left: $('.'+b).css( "left")},speedAnimate,
							                (function(){
											$('.'+b).animate(
											{left: $('.'+a).css( "left")},speedAnimate);
								}));
							$('.'+b).animate(
								{left: $('.'+a).css( "left")},
								speedAnimate,
								(function(){
											$('.'+a).animate(
											{left: $('.'+b).css( "left")},
											speedAnimate,
											(function(){
                                            $('.container').bind('click', animateTest);
											})
										    );
								}));}
				}else{$('.activ').remove();}
		}
	else
		{$('.container').html('<div id="activ" class="activ '+$(event.target).attr('class').match(/position(....)/)[0]+'" style="position: absolute; top: '+$(event.target).css("top")+'; left: '+$(event.target).css("left")+';"></div>'+$('.container').html());}
	}
}}
$('.container').bind('click', animateTest);


});