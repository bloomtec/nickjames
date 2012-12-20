<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>
<head profile="<?php print $grddl_profile; ?>">
    <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
  
  <link type="text/css" rel="stylesheet" href="http://fast.fonts.com/cssapi/fdf6cfab-5b5f-404b-8136-01988a377629.css"/ <http://fast.fonts.com/cssapi/fdf6cfab-5b5f-404b-8136-01988a377629.css%22/>

</head>
<body<?php print $attributes;?>>

<div id="fb-root"></div>
 <script src="http://connect.facebook.net/en_US/all.js"></script>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
  <script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
</body>
</html>
