<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */
function nicholas_james_get_fields($node){
	$fields;
	foreach($node as $prop => $value){
		if(strpos($prop,'field') === 0){
			$fieldArray=explode('_', $prop);
			switch ($fieldArray[1]) {
				case 'about':
					if(count($fieldArray) == 4){
						$fields['about_us'][$fieldArray[3]]=$value;
					}
					if(count($fieldArray) == 5){
						$fields['about_us'][$fieldArray[3]][$fieldArray[4]]=$value;
					}
					break;
				
				default:
					if(count($fieldArray) == 3){
						$fields[$fieldArray[1]][$fieldArray[2]]=$value;
					}
					if(count($fieldArray) == 4){
						$fields[$fieldArray[1]][$fieldArray[2]][$fieldArray[3]]=$value;
					}
					break;
			}
			
		}		
	}
	$return['welcome']=$fields['welcome'];
	$return['about_us']=$fields['about_us'];
	$return['collection']=$fields['collection'];
	$return['silver']=$fields['silver'];
	$return['od']=$fields['od'];
	$return['store']=$fields['store'];
	$return['news']=$fields['news'];
	$return['faq']=$fields['faq'];
	$return['contact']=$fields['contact'];

	return $return;	
}

function nicholasjames_views_mini_pager($vars) {
  global $pager_page_array, $pager_total;

  $tags = $vars['tags'];
  $element = $vars['element'];
  $parameters = $vars['parameters'];
  $quantity = $vars['quantity'];

  // Calculate various markers within this pager piece:
  // Middle is used to "center" pages around the current page.
  $pager_middle = ceil($quantity / 2);
  // current is the page we are currently paged to
  $pager_current = $pager_page_array[$element] + 1;
  // max is the maximum page number
  $pager_max = $pager_total[$element];
  // End of marker calculations.



  if ($pager_total[$element] > 1) {

    $li_previous = theme('pager_previous',
      array(
        'text' => (isset($tags[1]) ? $tags[1] : t('‹‹')),
        'element' => $element,
        'interval' => 1,
        'parameters' => $parameters,
      )
    );
    if (empty($li_previous)) {
      $li_previous = "<a class='previous disabled'>previous</a>";
    }

    $li_next = theme('pager_next',
      array(
        'text' => (isset($tags[3]) ? $tags[3] : t('››')),
        'element' => $element,
        'interval' => 1,
        'parameters' => $parameters,
      )
    );

    if (empty($li_next)) {
      $li_next = "<a class='next disabled'>next</a>";
    }

    $items[] = array(
      'class' => array('pager-previous'),
      'data' => $li_previous,
    );

   /* $items[] = array(
      'class' => array('pager-current'),
      'data' => t('@current of @max', array('@current' => $pager_current, '@max' => $pager_max)),
    );*/

    $items[] = array(
      'class' => array('pager-next'),
      'data' => $li_next,
    );
     $items[] = array(
      'class' => array('pager-close'),
      'data' => "<a class='close'>close</a>",
    );
    return theme('item_list',
      array(
        'items' => $items,
        'title' => NULL,
        'type' => 'ul',
        'attributes' => array('class' => array('pager')),
      )
    );
  }else{// if there isn't items only show the close buttons
    $items[] = array(
      'class' => array('pager-close'),
      'data' => "<a class='close'>close</a>",
    );
    return theme('item_list',
      array(
        'items' => $items,
        'title' => NULL,
        'type' => 'ul',
        'attributes' => array('class' => array('pager')),
      )
    );
  }
}