<?php 
    $gallery = node_load(53); 
     $qid=3;
      $query = new EntityFieldQuery;
      $q = db_query("SELECT n.nid FROM {node} n 
         INNER JOIN {nodequeue_nodes} nn ON n.nid=nn.nid WHERE nn.qid = ".$qid." ORDER BY nn.position ASC");
      $result = db_query($q);
      $frontImages=array();

      foreach ($result as $row) {
        $frontImages[]=node_load($row -> nid);
      }
     // echo "<pre>".print_r(file_create_url($frontImages[0]->field_store_image['und'][0]['uri']),false)."</pre>";
   
?>
<div id="<?php print $group ?>-section" class='parallax-section'>
    <div class="parallax-content">
        <h1><?php echo $fields['title']['und'][0]['value']; ?> </h1>
        <?php if(isset($fields['body']) &&  !empty($fields['body'])): ?>
            <div class="body">
                <?php echo $fields['body']['und'][0]['safe_value']; ?>
            </div>
            <div class="view-full">
                <a class="colorbox-load kalei-load" href="/store-gallery?width=807&height=784&iframe=true&"></a>
                <a class="colorbox-load" href="/store-gallery?width=807&height=784&iframe=true">
                view full gallery
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
        <img  src="<?php print file_create_url($frontImages[0]->field_store_image['und'][0]['uri']); ?>" />
        <a class="view-image colorbox-load" href="<?php print file_create_url($frontImages[0]->field_store_image['und'][0]['uri']); ?>"> </a>
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_2" ?>"> 
        <img  src="<?php print file_create_url($frontImages[1]->field_store_image['und'][0]['uri']); ?>" />
        <a class="view-image colorbox-load" href="<?php print file_create_url($frontImages[1]->field_store_image['und'][0]['uri']); ?>"> </a>
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_3" ?>"> 
        <img  src="<?php print file_create_url($frontImages[2]->field_store_image['und'][0]['uri']); ?>" />
        <a class="view-image colorbox-load" href="<?php print file_create_url($frontImages[2]->field_store_image['und'][0]['uri']); ?>"> </a>
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_4" ?>"> 
       <img  src="<?php print file_create_url($frontImages[3]->field_store_image['und'][0]['uri']); ?>" />
       <a class="view-image colorbox-load" href="<?php print file_create_url($frontImages[3]->field_store_image['und'][0]['uri']); ?>"> </a>
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_5" ?> shadown1" style="padding-bottom:20px;"> 
        <img  src="<?php print file_create_url($frontImages[4]->field_store_image['und'][0]['uri']); ?>" />
        <a class="view-image colorbox-load" href="<?php print file_create_url($frontImages[4]->field_store_image['und'][0]['uri']); ?>"> </a>
    </div>
    <div class="kaleidoscope-parallax <?php echo "kaleidoscope_6" ?>"> 
        <img  src="<?php print file_create_url($frontImages[5]->field_store_image['und'][0]['uri']); ?>" />
        <a class="view-image colorbox-load" href="<?php print file_create_url($frontImages[5]->field_store_image['und'][0]['uri']); ?>"> </a>
    </div>
    
    <?php if(isset($fields['product'])):?>
    <?php  foreach($fields['product'] as $id => $product): ?>
        <?php if(isset($product['und'][0]['target_id'])):?>
        <div class="product-parallax <?php echo $group."_product_".$id ?>"> 
             <a class="colorbox-load no-ul" href="<?php print $base_path."node/".$product['und'][0]['target_id'];?>?width=807&height=784&iframe=true">
               <img src="<?php print image_style_url('product_parallax_600',$product['und'][0]['entity']->field_image['und'][0]['uri'] ) ?>" /> 
            </a>
        </div>
        <?php endif; ?>
    <?php endforeach;  ?>
    <?php endif; ?>
</div>