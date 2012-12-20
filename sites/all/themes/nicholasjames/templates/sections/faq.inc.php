<?php /*
<div id="<?php print $group ?>-section" class='parallax-section'>
    <div class="parallax-content">
        <h1><?php echo $fields['title']['und'][0]['value']; ?> </h1>
        <?php if(isset($fields['body']) &&  !empty($fields['body'])): ?>
            <div class="body" style="width: 180px;">
                <?php echo $fields['body']['und'][0]['safe_value']; ?>
           </div>
        <?php endif; ?>
    </div>
    <?php if(isset($fields['main']['image']) && !empty($fields['main']['image'])): ?>
        <div class="main_image">
            <img src="<?php print $base_path ?>sites/default/files/<?php print $fields['main']['image']['und'][0]['filename'] ?>" />
        </div>
    <?php endif; ?>

    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_1" ?>"> 
        <img  src="<?php  print $base_path.path_to_theme(); ?>/images/faq_kaleidoscope_1.png" />
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_2" ?> shadown1" style="padding-bottom:35px;"> 
        <img   src="<?php  print $base_path.path_to_theme(); ?>/images/faq_kaleidoscope_2.png" />
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_3" ?>"> 
       <img  src="<?php  print $base_path.path_to_theme(); ?>/images/faq_kaleidoscope_3.png" />
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_4" ?>"> 
        <img  src="<?php  print $base_path.path_to_theme(); ?>/images/faq_kaleidoscope_4.png" />
    </div>
    <?php  for($i=1; $i <= 8; $i++): ?>
        <div class="kaleidoscope-parallax faq-parallax <?php echo "faq_".$i ?>"> 
          
            <a class="colorbox-load" href="/node/<?php print $fields[$i]['und'][0]['entity']->nid ?>?width=845&height=784&iframe=true&rel=faq">
                <?php print $fields[$i]['und'][0]['entity']->title; ?>
            </a>
        </div>
    <?php endfor;  ?>
    
    <?php if(isset($fields['product'])):?>
    <?php  foreach($fields['product'] as $id => $product): ?>
        <?php if(isset($product['und'][0]['product_id'])):?>
        <div class="product-parallax <?php echo $group."_product_".$id ?>"> 
            <img src="<?php print $base_path ?>sites/default/files/styles/product_parallax_600/public/<?php print commerce_product_load($product['und'][0]['product_id'])->field_images['und'][0]['filename'] ?>" />
        </div>
        <?php endif; ?>
    <?php endforeach;  ?>
    <?php endif; ?>
</div>
*/ ?>