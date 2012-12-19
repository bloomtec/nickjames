<div id="<?php print $group ?>-section" class='parallax-section'>
    <div class="parallax-content">
        <h1><?php echo $fields['title']['und'][0]['value']; ?> </h1>
        <?php if(isset($fields['body']) &&  !empty($fields['body'])): ?>
            <div class="body">
                <?php echo $fields['body']['und'][0]['safe_value']; ?>
           </div>
            <div class="view-full">
                <a  class="colorbox-load kalei-load" href="/range?width=807&height=784&iframe=true"></a>
                <a  class="colorbox-load" href="/range?width=807&height=784&iframe=true">
                view all silver
                </a>
           </div>
        <?php endif; ?>
    </div>
    <?php if(isset($fields['main']['image']) && !empty($fields['main']['image'])): ?>
        <div class="main_image">
           <img src="<?php print file_create_url($fields['main']['image']['und'][0]['uri']) ?>" />
        </div>
    <?php endif; ?>

    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_1" ?>"> 
       <img  src="<?php  print $base_path.path_to_theme(); ?>/images/silver_kaleidoscope_1.png" />
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_2" ?>"> 
        <img   src="<?php  print $base_path.path_to_theme(); ?>/images/silver_kaleidoscope_2.png" />
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_3" ?> shadown1"> 
        <img  src="<?php  print $base_path.path_to_theme(); ?>/images/silver_kaleidoscope_3.png" />
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_4" ?> shadown1"> 
        <img  src="<?php  print $base_path.path_to_theme(); ?>/images/silver_kaleidoscope_4.png" />
    </div>

    <?php if(isset($fields['product'])):?>
    <?php  foreach($fields['product'] as $id => $product): ?>
        <?php if(isset($product['und'][0]['target_id'])):?>
        <div class="product-parallax <?php echo $group."_product_".$id; if($id ==5) print ' shadown1'; ?>"> 
            <a class="colorbox-load no-ul" href="<?php print $base_path."node/".$product['und'][0]['target_id'];?>?width=807&height=784&iframe=true">
               <img src="<?php print image_style_url('product_parallax_600',$product['und'][0]['entity']->field_image['und'][0]['uri'] ) ?>" /> 
            </a>
            <?php if(in_array($id, array(2,3,5))): ?>
               <a class="view-product colorbox-load no-ul" href="<?php print $base_path."node/".$product['und'][0]['target_id'];?>?width=807&height=784&iframe=true"> </a>
            <?php endif;?>
        </div>
        <?php endif; ?>
    <?php endforeach;  ?>
    <?php endif; ?>
</div>