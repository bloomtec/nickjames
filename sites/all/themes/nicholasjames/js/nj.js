var nj={};
nj.loaders=function(){
  var jQueryimages=jQuery('.product-parallax, .kaleidoscope-parallax');
	var imagessLenth=jQuery('.product-parallax, .kaleidoscope-parallax').length;
	var imagesLoad=0;
	jQuery.each(jQueryimages,function(i,val){
		jQuery(val).ready(function(){
			imagesLoad+=1;
			if(imagesLoad==imagessLenth){

        if(window.location.hash != ''){         
          jQuery("a[href='"+window.location.hash+"']").parent().addClass('current'); 
          jQuery.scrollTo( jQuery('div[id="'+window.location.hash.slice(1)+'"]').position().top + 1);       
        }else{
          jQuery("a[href='#welcome-section']").parent().addClass('current');
          jQuery.scrollTo( jQuery('div[id="welcome-section"]').position().top + 1);
         // jQuery.scrollTo('1');
        }       
          PARALLAX(function(){                 
             setTimeout(function(){ 
              jQuery('#nj_loader').fadeOut('slow',function(){
                jQuery('#content, #header, #right-col, #nav').css('visibility','visible');
              });
            },1000);   
             setTimeout(function(){
              jQuery('#nav a').fadeOut('medium',function(){
                jQuery('#nav ul').hover(
                  function(){
                    jQuery('#nav a').fadeIn('medium');
                  },
                  function(){
                    jQuery('#nav a').fadeOut('medium');
                  }
                );
              });
            },7000);   
          });

          jQuery('#nav').localScroll({
          duration:1500,
          onBefore:function(){
           autoScroll=true;
           initiated+=1;

          },
          onAfter:function(){
            autoScroll=false;
            initiated-=1;
            nj.inSectionAnimation();
          },
          hash:true
        });        
        params=(decodeURIComponent(window.location.search.substring(1)).split(":"));
        if(params[0] == "url"){
          url = params[1];
           jQuery.fn.colorbox({
              iframe:true,
              open:true,
              href:"/"+url,              
              width:1000,
              height:784,
              fixed:true,
              opacity:'0.7'
              
            });          
        }

			}
		});
	});
}
nj.inSectionAnimation =  function(){
	jQuery('li.current').animate({'background-position-x':'+=8'},400,function(){
		jQuery('li.current').animate({'background-position-x':'-=8'},400);
	});
}
jQuery(function(){
  jQuery("#welcome-section .kaleidoscope-parallax .wrapper").animation({ // 80,3 - 60,4 - 48,5 - 40,6 - 35,7 - 30,8 - 26,9 - 24,10
    fileName:"Anim-A",
    frames: 30,
    folder:'/sites/all/themes/nicholasjames/sequences/welcome/sequence_trans_diet',
    ext:'gif',
    isPaused:true,
    delta:8,
    callback: function(){
      nj.loaders();    
    }
  });   
  var contentWidth = 730;
  var containerHeight=8100;
  var containerOffset=(jQuery(window).width() - contentWidth)/2; 
  jQuery(".social").css("margin-right", jQuery('#right-col').width());
  jQuery('#nav').css({'height':containerHeight,width:containerOffset*2*0.70});
  jQuery('#right-col').css({'height':containerHeight,width:containerOffset*2*0.30});

  jQuery('.faq-parallax a').each(function(i,val){
    jQuery(this).css('margin-top',(84 - jQuery(this).height())/2);

  });
 
  jQuery('#nav li').hover(
    function(){
      jQuery(this).animate({'background-position-x':'+=3'},200);  
    },function(){
      jQuery(this).animate({'background-position-x':'-=3'},200); 
    }
  ); 

  jQuery('#scrol-nav .next').click(function(e){
    e.preventDefault();
    if(jQuery('#nav li.current').next()){
           jQuery('#nav li.current').next().find('a').click();
      }
  });
 jQuery('#scrol-nav .prev').click(function(e){
   e.preventDefault();
    if(jQuery('#nav li.current').prev()){
           jQuery('#nav li.current').prev().find('a').click();
      }
  });
  jQuery('#nav li').click(function(){
      jQuery('#nav li').removeClass('current');
      jQuery(this).addClass('current');
  });
  jQuery('.logo').click(function(){
    jQuery('.welcome').click();
  });

  jQuery(".page-blog .social li a").click(function(e){
    e.preventDefault();
  });
});
function getParams(){
  var GET = {};
  var query = window.location.search.substring(1).split("&");
  for (var i = 0, max = query.length; i < max; i++)
  {
      if (query[i] === "") // check for trailing & with no param
          continue;

      var param = query[i].split("=");
      GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
  }
  return GET;
}