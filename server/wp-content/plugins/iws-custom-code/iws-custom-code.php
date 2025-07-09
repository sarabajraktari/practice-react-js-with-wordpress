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