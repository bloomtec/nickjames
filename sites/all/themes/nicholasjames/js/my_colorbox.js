jQuery(function(){
    jQuery('.close').click(function(){
      parent.jQuery("#cboxClose").click();
    });
     jQuery('.previous').click(function(){
      parent.jQuery("#cboxPrevious").click();
    });
      jQuery('.next').click(function(){
      parent.jQuery("#cboxNext").click();
    });
    jQuery.each(jQuery('.page-other-designers-list .field-name-field-designer-image'),function(i,val){
      console.log('hola');
    	number = (i <= 8)? "0"+(i+1)+".":i+".";
    	jQuery(this).append("<span class='od-number'>"+number+"</span>");
    });
    jQuery.each(jQuery('.page-other-designers-list .views-field-title'),function(i,val){
      number= (i <= 8)? "0"+(i+1)+".":i+".";
      jQuery(this).prepend(number);
    });    
    jQuery.each(jQuery(".view-faqs-list .views-row  a"),function(){
      jQuery(this).text(toTitleCase(toTitleCase(jQuery(this).text().toLowerCase())));
    });

    jQuery(document).bind('cbox_complete', function(){
       jQuery('body').css('overflow','hidden');
       jQuery('iframe').contents().find('.page-other-designers-list .block-system-main.block-without-title').jScrollPane();
  
    });
    jQuery(document).bind('cbox_closed', function(){
       jQuery('body').css('overflow','scroll');
    });
    function toTitleCase(str) {
      return str.replace(/(?:^|\s)\w/g, function(match) {
          return match.toUpperCase();
      });
    }
});