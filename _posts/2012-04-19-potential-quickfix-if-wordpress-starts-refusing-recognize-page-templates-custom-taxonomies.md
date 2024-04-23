---
path: "content/potential-quickfix-if-wordpress-starts-refusing-recognize-page-templates-custom-taxonomies"
layout: Post
title: "Potential quickfix if WordPress starts refusing to recognize page templates for custom taxonomies when permalinks are on"
date: 2012-04-19 10:38:49
---

Is WordPress being sofa kingdom by returning Error 404 for custom taxonomies, or doesn't recognize taxonomy-{name}.php template files in your theme? Does it inexplicably *start* working if you set permalinks to "default"? Can you likewise find very little documentation as to why this might be the case?

In the hopes this will save somebody a bunch of time — and potential lost sleep, as is my case this morning — I'm posting the awful hack-y solution that made stuff start working. I'm *sure* this is the wrong way of doing this, and if you have any plugins that rewrite page URLs, it may make them stop working. No warranty at all if this doesn't work, and I will *not* provide support for anything related to custom posts/taxonomies (*Protip:* For projects outside of WordPress' post/pages/links/media content types, don't use WordPress — ***USE DRUPAL***.).

Anyhoo, add the following to your theme's **functions.php**:

~~~
add_filter('init','flushRules');

// Remember to flush_rules() when adding rules
function flushRules(){
    global $wp_rewrite;
    $wp_rewrite->flush_rules();
}
~~~

**Did this help you? Let me know by leaving a comment!**