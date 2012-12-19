<article<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  <?php print render($title_prefix); ?>
  <?php if (!$page && $title): ?>
  <header>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h2>
  </header>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($display_submitted): ?>
  <footer class="submitted">
    <?php // echo "<pre>".print_r($node->field_blog_category,true)."</pre>"?>
    by <?php print strtoupper($name); ?> on <?php print date("M j, Y", $node->created); ?> 
    <br />
    in <?php echo !empty($node->field_blog_category) ? strtoupper($node->field_blog_category['und'][0]['taxonomy_term']->name) : "UNCATEGORIZED" ?>
  </footer>
  <?php endif; ?>  

  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      print render($content);
    ?>
  </div>
    <?php /*
  <div class="clearfix">
    <?php if (!empty($content['links'])): ?>
      <nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>

*/
global $base_url;
  ?>
<ul class="social">
  <li>
    <a class="sl-twitter" onclick="window.open('http://twitter.com/share?url=<?php  echo rawurlencode($base_url."/?url:".substr($_SERVER["REQUEST_URI"],1)."#news-section") ?>','ventanacompartir', 'toolbar=0, status=0, width=650, height=450');"  target="_blank" href="javascript: void(0);"> twitter </a>
  </li>
  <?php if(isset($node -> field_image['und'][0]['uri'])):?>
  <li>
    <a class="sl-facebook" onclick="window.open('https://www.facebook.com/dialog/feed?%20%20app_id=393219600756459&%20%20link=<?php  echo rawurlencode($base_url."/?url:".substr($_SERVER["REQUEST_URI"],1)."#news-section") ?>&%20%20picture=<?php if(isset($node -> field_image['und'][0]) ) print file_create_url($node -> field_image['und'][0]['uri']) ?>&%20%20name=<?php echo $title ?>&%20%20description=<?php $node -> field_summary['und'][0]['value']?>&%20%20redirect_uri=http://nj.darpal.com/close','ventanacompartir', 'toolbar=0, status=0, width=800, height=450');" target="_blank" href="javascript: void(0);"> facebook </a>
  </li>
  <?php else: ?>
  <li>
    <a class="sl-facebook" onclick="window.open('https://www.facebook.com/dialog/feed?%20%20app_id=393219600756459&%20%20link=<?php  echo rawurlencode($base_url."/?url:".substr($_SERVER["REQUEST_URI"],1)."#news-section") ?>&%20%20name=<?php echo $title ?>&%20%20description=<?php $node -> body['und'][0]['value']?>&%20%20redirect_uri=http://nj.darpal.com/close','ventanacompartir', 'toolbar=0, status=0, width=800, height=450');" target="_blank" href="javascript: void(0);"> facebook </a>
  </li>
  <?php endif;?>
  <li>
    <a class="sl-mail" href="#"> mail </a>
  </li>
</ul>
</article>
<?php //echo $base_url."/?url=".substr($field_summaryQUEST_URI"],value>
