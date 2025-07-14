<?php

/*
Plugin Name: IWS Custom Code
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: Add Custom Code
Author: Sara
Version: 1.0.0
*/

remove_filter('the_excerpt', 'wpautop');
remove_filter('the_content', 'wpautop');

function iwsGetFeatureImgSrc($obj, $fieldName, $request){
    if($obj['featured_media']){
        $img = wp_get_attachment_image($obj['featured_media']);
        return $img;
    }
    return false;
}

add_action('rest_api_init', function(){
    register_rest_field('post', 'featured_src', [
        'get_callback' => 'iwsGetFeatureImgSrc',
    ]);
});