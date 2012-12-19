(function($) {
  $.fn.animation = function(options) {
  	var events = {};
  	var $that = $(this);
  	var images = new Array();
    var scrollTopStart = 0;
    var timeStart = 0;
    var previousDistance = 1;
    if(!options.speed) options.speed = 300;
  	$.data($that,'loadedImages',0);
    $.data($that,'animationMode','increase');
  	
    // Add plugin code here
   
    for(i=0; i < options.frames; i+=1){
        imageIndex = i*options.delta + 1;
    	if(imageIndex < 10){
    		j="00"+imageIndex;
    	}else if(imageIndex >=10 && imageIndex <100){
    		j="0"+imageIndex;
    	}else if(imageIndex >=100 && imageIndex <1000){
    		j=imageIndex;
    	}
    	images[i]= new Image();
    	images[i].src = options.folder+"/"+options.fileName+j+"."+options.ext;
    	$(images[i]).load(function(){
    		$.data($that,'loadedImages',$.data($that,'loadedImages') +1);
    		if($.data($that,'loadedImages') == options.frames) {
    			initAnimation();
          options.callback();
    		}
    	});
    }
    function initAnimation(){
    	$that.css({
    		'overflow':'hidden',
    		'position': 'relative'
    	});
    	for( i in images){
    		if(i == 0){
    			$that.append($(images[i]).css({position:'absolute'}).attr({'rel':i}).addClass('current'));
    		}else{
    			$that.append($(images[i]).css({position:'absolute',display:'none'}).attr('rel',i));
    		}
    		
    	}
        initCicle();
    }
    function initCicle(){
        if(!options.isPaused){
            current = $that.find('img.current').removeClass('current').attr('rel');
            if( $.data($that,'animationMode') == 'increase'){
                rel = parseInt(current)+1;
                if(rel >= options.frames){
                    rel -= 1;
                     $.data($that,'animationMode','decrement');
                }
            }else{
                rel = parseInt(current)-1;
                if(rel < 0){
                    rel = 1;
                     $.data($that,'animationMode','increase');
                }
            }
            $that.find('img').css('display','none');
            $that.find('img[rel="'+rel+'"]').css({'display':'block'}).addClass('current');
        }
        setTimeout(function(){
            initCicle();
        },options.speed);
    }
    $('.faster').click(function(){
        options.speed-=20;
    });
    $('.slower').click(function(){
        options.speed+=20;
    });
    $(window).bind('scrollstop',function(e){    
        options.isPaused = true;  
        scrollTopStart =  $(window).scrollTop();
        timeStart =0;
        previousDistance = 1; 
        options.speed = 300;
        //console.log('stop');
    }); 
    $(window).bind('scroll',function(e){    
        options.isPaused = false;   
        if(!timeStart  || timeStart === 0){
           timeStart =(new Date()).getTime(); 
        } 
        actualTime = (new Date()).getTime();
        time=(actualTime - timeStart);
        if( time >= 5){
          //console.log(time);  
         // console.log($(window).scrollTop() - scrollTopStart); 
          timeStart=(new Date()).getTime();
          distance = Math.abs($(window).scrollTop() - scrollTopStart); 
            if(distance > previousDistance && previousDistance != 0 ){
                //ratio = distance/previousDistance;
                //console.log(distance);
               newSpeed = options.speed - distance;
               if(newSpeed <= 20){
                    options.speed = 20; 
               }else if(newSpeed >= 300 ){
                  options.speed = 300;
               }else{
                  options.speed = newSpeed;
               }                
                //console.log(  options.speed );
                //console.log('mas rapido');
            }else if(distance < previousDistance && previousDistance != 0){
              /*  newSpeed = options.speed + distance;
                if(newSpeed <= 20){
                    options.speed = 20; 
                }else if(newSpeed >= 300 ){
                  options.speed = 300;
                }else{
                  options.speed = newSpeed;
                }*/
          }
          scrollTopStart = $(window).scrollTop();
          previousDistance = distance;
       }
    });
  };
})(jQuery);