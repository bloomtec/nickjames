<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 *//*
$output=str_replace("views-ajax-processed-processed","views-ajax-processed-processed colorbox-load",$output);
$hrefI=strpos($output,"href")+6;
$hrefF=strpos($output,'"',$hrefI);
$href=substr($output,$hrefI,$hrefF-$hrefI);
$newHref=$href.'?widht=960px&height=784px&iframe=true" class="colorbox-load no-ul';
$output = str_replace($href,$newHref,$output);*/
?>
<?php print $output; ?>