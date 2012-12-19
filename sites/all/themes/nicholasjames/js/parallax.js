var autoScroll=false;
var scrolling=false;
var initiated=0;
var lastStopIsForScrollTo=false;
var PARALLAX = function(callback) { 
	var $window = jQuery(window);
	var $welcomeSection = jQuery('#welcome-section');
	var $about_usSection = jQuery('#about_us-section');	
	var $collectionSection = jQuery('#collection-section');
	var $silverSection = jQuery('#silver-section');
	var $odSection = jQuery('#od-section');
	var $storeSection = jQuery('#store-section');
	var $newsSection = jQuery('#news-section');
	var $faqSection = jQuery('#faq-section');
	var $contactSection = jQuery('#contact-section');
	// WELCOME PARALLAX BLOCKS
	var welcomeProducts={};
	var $welcomeMainImage = jQuery('#welcome-section .main_image');
	var $welcomeKaleidoscope1 = jQuery('#welcome-section .kaleidoscope_1');
	var $welcomeKaleidoscope2 = jQuery('#welcome-section .kaleidoscope_2');
	var $welcomeKaleidoscope3 = jQuery('#welcome-section .kaleidoscope_3');
	for(i=1; i<=12; i++){
		welcomeProducts[i]=jQuery('#welcome-section .welcome_product_'+i);
	}
	// ABOUT US PARALLAX BLOCKS
	var $aboutUsMainImage = jQuery('#about_us-section .main_image');
	var $aboutUsKaleidoscope1 = jQuery('#about_us-section .kaleidoscope_1');
	var $aboutUsKaleidoscope2 = jQuery('#about_us-section .kaleidoscope_2');
	var $aboutUsKaleidoscope3 = jQuery('#about_us-section .kaleidoscope_3');
	var aboutUsProducts={};
	for(i=1; i<=7; i++){
		aboutUsProducts[i]=jQuery('#about_us-section .about_us_product_'+i);
	}
	// COLLECTION PARALLAX BLOCKS
	var $collectionMainImage = jQuery('#collection-section .main_image');
	var $collectionKaleidoscope1 = jQuery('#collection-section .kaleidoscope_1');
	var $collectionKaleidoscope2 = jQuery('#collection-section .kaleidoscope_2');
	var $collectionKaleidoscope3 = jQuery('#collection-section .kaleidoscope_3');
	var $collectionKaleidoscope4 = jQuery('#collection-section .kaleidoscope_4');
	var collectionProducts={};
	for(i=1; i<=5; i++){
		collectionProducts[i]=jQuery('#collection-section .collection_product_'+i);
	}
	// COLLECTION PARALLAX BLOCKS
	var $silverMainImage = jQuery('#silver-section .main_image');
	var $silverKaleidoscope1 = jQuery('#silver-section .kaleidoscope_1');
	var $silverKaleidoscope2 = jQuery('#silver-section .kaleidoscope_2');
	var $silverKaleidoscope3 = jQuery('#silver-section .kaleidoscope_3');
	var $silverKaleidoscope4 = jQuery('#silver-section .kaleidoscope_4');
	var silverProducts={};
	for(i=1; i<=6; i++){
		silverProducts[i]=jQuery('#silver-section .silver_product_'+i);
	}
	// OTHER DESIGNERS PARALLAX BLOCKS
	var $odKaleidoscope1 = jQuery('#od-section .kaleidoscope_1');
	var $odKaleidoscope2 = jQuery('#od-section .kaleidoscope_2');
	var $odKaleidoscope3 = jQuery('#od-section .kaleidoscope_3');
	var odProducts={};
	for(i=1; i<=8; i++){
		odProducts[i]=jQuery('#od-section .od_product_'+i);
	}
	 //THE STORE PARALLAX BLOCKS
	var $storeKaleidoscope1 = jQuery('#store-section .kaleidoscope_1');
	var $storeKaleidoscope2 = jQuery('#store-section .kaleidoscope_2');
	var $storeKaleidoscope3 = jQuery('#store-section .kaleidoscope_3');
	var $storeKaleidoscope4 = jQuery('#store-section .kaleidoscope_4');
	var $storeKaleidoscope5 = jQuery('#store-section .kaleidoscope_5');
	var $storeKaleidoscope6 = jQuery('#store-section .kaleidoscope_6');
	
	// NEWS PARALLAX BLOCKS
	var $newsMainImage = jQuery('#news-section .main_image');
	var $newsLastest = jQuery('#news-section .lastest');
	var $newsKaleidoscope1 = jQuery('#news-section .kaleidoscope_1');
	var $newsKaleidoscope2 = jQuery('#news-section .kaleidoscope_2');
	var $newsKaleidoscope3 = jQuery('#news-section .kaleidoscope_3');
	var $newsKaleidoscope4 = jQuery('#news-section .kaleidoscope_4');
	var $newsKaleidoscope5 = jQuery('#news-section .kaleidoscope_5');
	var $newsKaleidoscope6 = jQuery('#news-section .kaleidoscope_6');

	// FAQ PARALLAX BLOCKS
	var $faqMainImage = jQuery('#faq-section .main_image');
	var $faqKaleidoscope1 = jQuery('#faq-section .kaleidoscope_1');
	var $faqKaleidoscope2 = jQuery('#faq-section .kaleidoscope_2');
	var $faqKaleidoscope3 = jQuery('#faq-section .kaleidoscope_3');
	var $faqKaleidoscope4 = jQuery('#faq-section .kaleidoscope_4');

	var $faq1 = jQuery('#faq-section .faq_1');
	var $faq2 = jQuery('#faq-section .faq_2');
	var $faq3 = jQuery('#faq-section .faq_3');
	var $faq4 = jQuery('#faq-section .faq_4');
	var $faq5 = jQuery('#faq-section .faq_5');
	var $faq6 = jQuery('#faq-section .faq_6');
	var $faq7 = jQuery('#faq-section .faq_7');
	var $faq8 = jQuery('#faq-section .faq_8');

	
	// CONTACT PARALLAX BLOCKS
	var $contactMainImage = jQuery('#contact-section .main_image');
	var $contactKaleidoscope1 = jQuery('#contact-section .kaleidoscope_1');
	var $contactKaleidoscope2 = jQuery('#contact-section .kaleidoscope_2');
	var $contactKaleidoscope3 = jQuery('#contact-section .kaleidoscope_3');
	var contactProducts={};
	for(i=1; i<=3; i++){
		contactProducts[i]=jQuery('#contact-section .contact_product_'+i);
	}
	var $endImage = jQuery('#contact-section .end-section');

	
	var windowHeight = $window.height(); //get the height of the window
	var xOffset=(($window.width()- jQuery("#container").width())/2);
	//settings for snap animation
	var delta=90;
	var welcomeSectionDeltaI= 0;
	var welcomeSectionDeltaF= delta;
	var about_usSectionDeltaI= 900 - delta;
	var about_usSectionDeltaF= 900 + delta;
	var collectionSectionDeltaI= 1800 - delta;
	var collectionSectionDeltaF= 1800 + delta;
	var silverSectionDeltaI= 2700 - delta;
	var silverSectionDeltaF= 2700 + delta;
	var odSectionDeltaI= 3600 - delta;
	var odSectionDeltaF= 3600 + delta;
	var storeSectionDeltaI= 4500 - delta;
	var storeSectionDeltaF= 4500 + delta;
	var newsSectionDeltaI= 5400 - delta;
	var newsSectionDeltaF= 5400 + delta;
	var faqSectionDeltaI= 6300 - delta;
	var faqSectionDeltaF= 6300 + delta;
	var contactSectionDeltaI= 7200 - delta;
	var contactSectionDeltaF= 7200 + delta;


	//apply the class "inview" to a section that is in the viewport
	jQuery('#welcome-section, #about_us-section, #collection-section, #silver-section, #od-section, #store-section, #news-section, #faq-section, #contact-section').bind('inview', function (event, visible) {
		if (visible == true) {
			jQuery(this).addClass("inview");
		} else {
			jQuery(this).removeClass("inview");
		}
	});
	
			
	//function that places the navigation in the center of the window
	function RepositionNav(){
		var windowHeight = $window.height(); //get the height of the window
		var navHeight = jQuery('#nav ul').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		//jQuery('#nav ul').css({"top": newtop,width:jQuery('#nav').width()}); //set the new top position of the navigation list
		jQuery('#scrol-nav').css({"top": newtop});
	}
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return (x+xOffset)+ "px " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	function newPosLT(x, windowHeight, pos, adjuster, inertia){
		return {left:(x)+"px ",top:(-((windowHeight + pos) - adjuster) * inertia)  + "px"};
	}
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar	
		if($welcomeSection.hasClass("inview")){
			//call the newPos function and change the background position
			windowHeight=900;
			//welcomeProducts
			$welcomeMainImage.css(newPosLT(181, windowHeight, pos, 1135, 0.3)); 					
			$welcomeKaleidoscope1.css(newPosLT(146, windowHeight, pos, 745, 0.9));
			$welcomeKaleidoscope2.css(newPosLT(388, windowHeight, pos, 825, 0.6));
			$welcomeKaleidoscope3.css(newPosLT(48, windowHeight, pos, 1590, 0.7));
			welcomeProducts[1].css(newPosLT(226, windowHeight, pos, 865, 0.9));	
			welcomeProducts[2].css(newPosLT(259, windowHeight, pos, 930, 0.5));			
			welcomeProducts[3].css(newPosLT(258, windowHeight, pos, 1385, 0.3));
			welcomeProducts[4].css(newPosLT(554, windowHeight, pos, 2070, 0.2));
			welcomeProducts[5].css(newPosLT(552, windowHeight, pos, 1680, 0.4));
			welcomeProducts[6].css(newPosLT(97, windowHeight, pos, 1650, 0.4));
			welcomeProducts[8].css(newPosLT(1, windowHeight, pos, 1355, 0.9));
			welcomeProducts[7].css(newPosLT(163, windowHeight, pos, 1250, 1.2));			
			welcomeProducts[9].css(newPosLT(299, windowHeight, pos, 1850, 0.5));
			welcomeProducts[11].css(newPosLT(125, windowHeight, pos, 2790, 0.3));
			welcomeProducts[10].css(newPosLT(167, windowHeight, pos, 6400, 0.1));
			welcomeProducts[12].css(newPosLT(156, windowHeight, pos, 6293, 0.1));			
		}
		if($about_usSection.hasClass("inview")){
			windowHeight=900;
			$aboutUsMainImage.css(newPosLT(29, windowHeight, pos, 2040, 0.3));
			//$aboutUsKaleidoscope1.css(newPosLT(357, windowHeight, pos, 800, 0));
			$aboutUsKaleidoscope2.css(newPosLT(67, windowHeight, pos, 2130, 1.3));	
			$aboutUsKaleidoscope3.css(newPosLT(263, windowHeight, pos, 2569, 0.6));
			aboutUsProducts[1].css(newPosLT(573, windowHeight, pos, 1700, -0.5));
			aboutUsProducts[2].css(newPosLT(43, windowHeight, pos, 2530, 0.5));
			aboutUsProducts[3].css(newPosLT(89, windowHeight, pos, 1130, -0.5));
			aboutUsProducts[4].css(newPosLT(153, windowHeight, pos, 2375, 0.8));
			aboutUsProducts[5].css(newPosLT(246, windowHeight, pos, 2290, 1.2));
			aboutUsProducts[6].css(newPosLT(479, windowHeight, pos, 2140, 1.5));
			aboutUsProducts[7].css(newPosLT(562, windowHeight, pos, 2330, 1.3));		
		}
		if($collectionSection.hasClass("inview")){
			windowHeight=900;
			$collectionMainImage.css(newPosLT(167, windowHeight, pos, 2800, 1.5));

			//$collectionKaleidoscope1.css(newPosLT(151, windowHeight, pos, 2560, 0.9));
			$collectionKaleidoscope2.css(newPosLT(400, windowHeight, pos, 2650, 0.7));
			$collectionKaleidoscope3.css(newPosLT(50, windowHeight, pos, 3700, 0.5));
			$collectionKaleidoscope4.css(newPosLT(303, windowHeight, pos, 5380, 0.2));

			collectionProducts[1].css(newPosLT(212, windowHeight, pos, 2650, 0.8));
			collectionProducts[2].css(newPosLT(474, windowHeight, pos, 2820, 1.1));
			collectionProducts[3].css(newPosLT(352, windowHeight, pos, 2820, 1.5));
			collectionProducts[4].css(newPosLT(211, windowHeight, pos, 2923, 1.8));
			collectionProducts[5].css(newPosLT(194, windowHeight, pos, 3090, 1.8));

		}
		if($silverSection.hasClass("inview")){
			windowHeight=900;
			$silverMainImage.css(newPosLT(311, windowHeight, pos, 3710, 1.5));
			//$silverKaleidoscope1.css(newPosLT(418, windowHeight, pos, 3470.5, 0.9));
			//$silverKaleidoscope2.css(newPosLT(192, windowHeight, pos, 3700.5, 0.7));			
			$silverKaleidoscope3.css(newPosLT(233, windowHeight, pos, 4900, 0.5));
			$silverKaleidoscope4.css(newPosLT(461, windowHeight, pos, 6310, 0.2));
			silverProducts[1].css(newPosLT(284, windowHeight, pos, 3550, 0.8));
			silverProducts[2].css(newPosLT(303, windowHeight, pos, 3550, 1.1));
			silverProducts[3].css(newPosLT(162, windowHeight, pos, 3720, 1.5));
			silverProducts[4].css(newPosLT(428, windowHeight, pos, 3800, 1.8));
			silverProducts[5].css(newPosLT(300, windowHeight, pos, 3830, 1.8));
			silverProducts[6].css(newPosLT(293, windowHeight, pos, 5790, 0.3));
		}
		if($odSection.hasClass("inview")){
			windowHeight=900;
			//$odKaleidoscope1.css(newPosLT(198, windowHeight, pos, 4380.5, 0.9));
			$odKaleidoscope2.css(newPosLT(378, windowHeight, pos, 4850, 0.7));
			$odKaleidoscope3.css(newPosLT(233, windowHeight, pos, 5430, 0.5));

			odProducts[1].css(newPosLT(135, windowHeight, pos, 4450, 1.8));
			odProducts[2].css(newPosLT(169, windowHeight, pos, 4475, 1.2));
			odProducts[3].css(newPosLT(169, windowHeight, pos, 4560, 1.7));
			odProducts[4].css(newPosLT(552, windowHeight, pos, 3810, -0.3));
			odProducts[5].css(newPosLT(550, windowHeight, pos, 4655, 1.8));
			odProducts[6].css(newPosLT(485, windowHeight, pos, 4780, 1.8));
			odProducts[7].css(newPosLT(547, windowHeight, pos, 4935, 1.1));
			odProducts[8].css(newPosLT(451, windowHeight, pos, 5255, 0.8));
			/*odProducts[8].css(newPosLT(475, windowHeight, pos, 5790, 0.3));*/
		}
			
		if($storeSection.hasClass("inview")){
			windowHeight=900;
			//$storeKaleidoscope1.css(newPosLT(162, windowHeight, pos, 5300, 0.5));
			$storeKaleidoscope2.css(newPosLT(317, windowHeight, pos, 5500, 0.8));
			$storeKaleidoscope3.css(newPosLT(133, windowHeight, pos, 5620, 1.2));
			$storeKaleidoscope4.css(newPosLT(197, windowHeight, pos, 5980, 0.7));
			$storeKaleidoscope5.css(newPosLT(539, windowHeight, pos, 5850, 1.1));
			$storeKaleidoscope6.css(newPosLT(201, windowHeight, pos, 9000, 0.2));
			
		}
		if($newsSection.hasClass("inview")){
			windowHeight=900;
			$newsMainImage.css(newPosLT(53, windowHeight, pos, 3160, -0.1));
			$newsLastest.css(newPosLT(305, windowHeight, pos, 6382, 1.5));
			//$newsKaleidoscope1.css(newPosLT(305, windowHeight, pos, 5990, 0.9));
			$newsKaleidoscope2.css(newPosLT(135, windowHeight, pos, 6340, 0.9));
			$newsKaleidoscope3.css(newPosLT(182, windowHeight, pos, 6320, 0.7));
			$newsKaleidoscope4.css(newPosLT(215, windowHeight, pos, 7210, 0.5));
			$newsKaleidoscope5.css(newPosLT(349, windowHeight, pos, 7920.5, 0.3));
			
		}
		if($faqSection.hasClass("inview")){
			windowHeight=900;
			$faqMainImage.css(newPosLT(380, windowHeight, pos, 6830, -0.3));
			//$faqKaleidoscope1.css(newPosLT(303, windowHeight, pos, 7075, 0.9)); 
			$faqKaleidoscope2.css(newPosLT(123, windowHeight, pos, 7573.5, 0.9));
			$faqKaleidoscope3.css(newPosLT(223, windowHeight, pos, 7815, 0.7));
			//$faqKaleidoscope4.css(newPosLT(359, windowHeight, pos, 8700, 0.5));

			$faq1.css(newPosLT(221, windowHeight, pos, 7300, 0.6));
			$faq2.css(newPosLT(365, windowHeight, pos, 7365, 0.5));
			$faq3.css(newPosLT(293, windowHeight, pos, 7460, 0.8));
			$faq4.css(newPosLT(439, windowHeight, pos, 7550, 0.7));
			$faq5.css(newPosLT(222, windowHeight, pos, 7680, 0.7));
			$faq6.css(newPosLT(390, windowHeight, pos, 7680, 0.8));
			$faq7.css(newPosLT(531, windowHeight, pos, 7900, 0.6));
			$faq8.css(newPosLT(291, windowHeight, pos, 7818, 0.8)); 
		}
		if($contactSection.hasClass("inview")){
			windowHeight=900;
			$contactMainImage.css(newPosLT(63, windowHeight, pos, 6900, -0.3));
			$contactKaleidoscope1.css(newPosLT(30, windowHeight, pos, 8120, 0.9));
			$contactKaleidoscope2.css(newPosLT(225, windowHeight, pos, 8540.5, 0.9));
			$contactKaleidoscope3.css(newPosLT(537, windowHeight, pos, 8500, 1.1));
			contactProducts[1].css(newPosLT(69, windowHeight, pos, 8380, 0.7));
			contactProducts[2].css(newPosLT(45, windowHeight, pos, 8900, 0.4));
			contactProducts[3].css(newPosLT(76, windowHeight, pos, 8800, 0.5));
			$endImage.css(newPosLT(38, windowHeight, pos, 9460, 0.5));
		}
		/*if($endSection.hasClass("inview")){
			windowHeight=300;
			endSectionImage.css(newPosLT(63, windowHeight, pos, 9000, 1.3));
		}*/
		//console.log(pos);
	}
	
	// check if the scroll has stoped
	var firstScroll=true;
	//var
	hasBeenStoped=false;
	$window.bind('scrollstop',function(e){	
//		console.log(hasBeenStoped);
		if(!hasBeenStoped){
			goToCorrectPosition($window.scrollTop());
		}else{
			hasBeenStoped=false
		}
		jQuery.each(jQuery('video'),function(){
			if(!this.paused) this.pause();
		});
			
	});
	var contentWidth = 730;
	RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		RepositionNav(); //reposition the navigation list so it remains vertically central
		
		//Resize the grid
		var containerOffset=(jQuery(window).width() - contentWidth)/2;
		var containerHeight = jQuery('#container').height();
		jQuery('#nav').css({'height':jQuery('#container').height(),width:containerOffset*2*0.70});
  		jQuery('#right-col').css({'height':jQuery('#container').height(),width:(containerOffset*2*0.30)});
  		// jQuery('#nav').css({'height':containerHeight,width:jQuery(window).width()*0.2083333});
 		// jQuery('#right-col').css({'height':containerHeight,width:jQuery(window).width()*0.03125});
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
		jQuery.each(jQuery('video'),function(){
			if(this.paused) this.play();
		});
	});	
	//________________________________FUNCTIONS_____________________________________________________________________

	function goToCorrectPosition(pos){	
		if(pos >= welcomeSectionDeltaI && pos <= welcomeSectionDeltaF){
			snap(pos,'#welcome-section',welcomeSectionDeltaI);
		}else if(pos != 900 && pos > about_usSectionDeltaI && pos <= about_usSectionDeltaF){
			snap(pos,'#about_us-section',about_usSectionDeltaI);
		}else if(pos != 1800 && pos > collectionSectionDeltaI && pos <= collectionSectionDeltaF){
			snap(pos,'#collection-section',collectionSectionDeltaI);
		}else if(pos != 2700 && pos > silverSectionDeltaI && pos <= silverSectionDeltaF){
			snap(pos,'#silver-section',silverSectionDeltaI);
		}else if(pos != 3600 && pos > odSectionDeltaI && pos <= odSectionDeltaF){
			snap(pos,'#od-section',odSectionDeltaI);
		}else if(pos != 4500 && pos > storeSectionDeltaI && pos <= storeSectionDeltaF){
			snap(pos,'#store-section',storeSectionDeltaI);
		}else if(pos != 5400 && pos > newsSectionDeltaI && pos <= newsSectionDeltaF){
			snap(pos,'#news-section',newsSectionDeltaI);
		}else if(pos != 6300 && pos > faqSectionDeltaI && pos <= faqSectionDeltaF){
			snap(pos,'#faq-section',faqSectionDeltaI);
		}else if(pos != 7200 && pos > contactSectionDeltaI && pos <= contactSectionDeltaF){
			snap(pos,'#contact-section',contactSectionDeltaI);
		}else{
			hasBeenStoped=false;
		}		
	}
	function snap(pos,section, deltaI){
		jQuery.scrollTo(section,{
			duration:100,
			onAfter:function(){
				jQuery('#nav li').removeClass('current');
			    jQuery('a[href="'+section+'"]').parent().addClass('current');
			    window.location.hash=jQuery('li.current a').attr('href');			    
			    if(pos == deltaI){
			    	hasBeenStoped=false;
			    }else{
			    	 hasBeenStoped=true;	
			    }
			    inSectionAnimation();	   
			}
		});
	}
	function inSectionAnimation(){
		jQuery('li.current').animate({'background-position-x':'+=8'},400,function(){
			jQuery('li.current').animate({'background-position-x':'-=8'},400);
		});
	}
callback();
};
(function(){function j(s,r,i){if(s.addEventListener){s.addEventListener(r,i,false)}else{s.attachEvent("on"+r,i)}}function q(s,r,i){if(s.removeEventListener){s.removeEventListener(r,i)}else{s.detachEvent("on"+r,i)}}function m(t,s){if(!t.length){t=[t]}for(var u in s){for(var r=0;r<t.length;r++){t[r].style[u]=s[u]}}}var h=0,l="";if(typeof document.cancelFullScreen!="undefined"){h=true}else{var e="webkit moz o ms khtml".split(" ");for(var f=0,n=e.length;f<n;f++){l=e[f];if(typeof document[l+"CancelFullScreen"]!="undefined"){h=true;break}}}function g(i){if(h){switch(l){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;default:return document[l+"FullScreen"]}}else{return !!i.eh5v}}var k=0;function c(i){if(h){return(l==="")?i.requestFullScreen():i[l+"RequestFullScreen"]()}else{if(!i){return}if(k){d(k)}var s={position:"fixed",left:0,top:0,right:"auto",bottom:"auto",width:window.innerWidth+"px",height:window.innerHeight+"px",backgroundColor:"rgba(0,0,0,0.9)",border:"none",zIndex:9999999};i.eh5v={};for(var r in s){i.eh5v[r]=i.style[r]}for(var r in s){i.style[r]=s[r]}j(document.body,"keydown",o);k=i}}function d(i){if(h){return(l==="")?document.cancelFullScreen():document[l+"CancelFullScreen"]()}else{if(!i){return}for(var r in i.eh5v){i.style[r]=i.eh5v[r]}i.eh5v=0;q(document.body,"keydown",o);k=0}}function o(i){if(i.keyCode==27){d(k)}}var p;function a(w,u){if(w.eh5v){return}w.eh5v={fullScreen:function(i){if(i){c(w)}else{if(g(w)){d(w)}}return g(w)}};var s;if(!u.noFS&&w.getAttribute("controls")&&(window.opera||/MSIE/.test(navigator.userAgent)||navigator.mozVibrate)){var y=/(.*\/)[^\/]+/.exec(w.poster)[1]+"fullscreen.png";if(!p){p=new Image();p.src=y}s=document.createElement("div");m(s,{position:"absolute",zIndex:10,display:"none",right:"0px",top:"0px",width:"28px",height:"28px",background:'rgba(0,0,0,0.50) url("'+y+'") 50% 50% no-repeat',border:"none"});w.parentNode.appendChild(s);function t(){s.style.display="none"}j(w,"mouseover",function(){s.style.display="block"});j(w,"mouseout",function(){t()});j(s,"mouseover",function(){s.style.display="block"});j(s,"click",function(){c(w);t()})}j(w,"dblclick",function(){if(g(w)){d(w)}else{c(w)}if(s){setTimeout(t,100)}});if(!w.getAttribute("loop")){j(w,"ended",function(){setTimeout(function(){w.load();w.pause()},400)})}if(/Android/.test(navigator.userAgent)){var x=w.getElementsByTagName("source"),r;for(var v=x.length-1;v>=0;v--){if(!x[v].type){r=x[v].src}else{if(r&&/mp4/.test(x[v].type)){x[v].src=r;w.load()}}}}}var b=document.getElementsByTagName("video");for(var f=0;f<b.length;f++){a(b[f],{noFS:0})}})();