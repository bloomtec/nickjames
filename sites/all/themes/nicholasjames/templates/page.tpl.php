<?php 
if(isset($node) && $node -> nid == "12"):
global $base_path;
 $fieldsGroup = nicholas_james_get_fields($node); 

?>
<div id="nj_loader">
   <img src='<?php  print $base_path.path_to_theme(); ?>/images/site-loading.gif' />
</div>
<div id="header">
    <div class='logo'>
        <img src='<?php  print $base_path.path_to_theme(); ?>/images/logo.png' />
    </div>
    <ul class="social">
        <li><a href="https://twitter.com/NJJewellery" target="_blank"><img src='<?php  print $base_path.path_to_theme(); ?>/images/twitter.png' /></a></li>
        <li><a href="http://en-gb.facebook.com/pages/Nicholas-James-Jewellery/130876803639795" target="_blank"><img src='<?php  print $base_path.path_to_theme(); ?>/images/facebook.png' /></a></li>
        <li><a href="mailto:info@nicholasjames.com?subject='Website request'" target="_blank"><img src='<?php  print $base_path.path_to_theme(); ?>/images/mail.png' /></a></li>
        <div style="clear:both;"></div>
    </ul> 
</div>
<div id="container">
    <div id="nav">
        <ul>
            <li><a class="welcome" href="#welcome-section" title="Welcome Section">  Welcome </a></li>
            <li><a href="#about_us-section" title="About Section"> About Us </a></li>
            <li><a href="#collection-section" title="Collection Section">  Collection </a></li>
            <li><a href="#silver-section" title="Silver Section"> <?php print $fieldsGroup['silver']['title']['und'][0]['value']; ?> </a></li>
            <li><a href="#od-section" title="Other Designers Section">  Other Designers </a></li>
            <li><a href="#store-section" title="Store Section">  The Store </a></li>
            <li><a href="#news-section" title="News Section">  News </a></li>
            <li><a href="#faq-section" title="FAQs Section">  FAQ </a></li>
            <li><a href="#contact-section" title="Contact Section">  Contact </a></li>
            <li class='basket'><a href="#fifth" title="Basket"> Basket (<span class="basket-count">0</span>)</a></li>
        </ul>
    </div>  

    <div id="content">            
        <?php  
            foreach($fieldsGroup as $group => $fields): 
                require_once("sections/$group.inc.php");
            endforeach; 
        ?>

    </div>

    <div id="right-col">
        <ul id="scrol-nav">
            <li><span>Please Scroll</span></li>
            <li><a class='prev' href="#"><img class='scroll-up' alt='up' src='<?php  print $base_path.path_to_theme(); ?>/images/scroll-up.png' /></a></li>
            <li><a class='next' href="#"> <img class='scroll-down' alt='down' src='<?php  print $base_path.path_to_theme(); ?>/images/scroll-down.png' /> </a></li>
        </ul>
    </div>
    <div style="clear:both;"></div>
</div>
<?php endif;?>