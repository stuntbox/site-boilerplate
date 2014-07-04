Basic Website Boilerplate
===========

A set of simple website starter files, using [Bourbon](http://bourbon.io)-flavored [Sass](http://sass-lang.com) and [Grunt](http://gruntjs.com). 

# Checklist

## HTML:
- Update page `<title>`. 
- Update page description `<meta>`. 
- Remove Respond.js proxy `<link>`s and script call if not serving CSS across domains (i.e. you’re not using a CDN). 
- If using Typekit, update script call in `<head>` w/ kit id and uncomment. 
- Update `<body>` id attribute. (Handy for [specificty issues](http://css-tricks.com/id-your-body-for-greater-css-control-and-specificity/) and as a courtesy to folks who write their own user styles.)
- If using Google Analytics, update script call at bottom of page with tracking ID and uncomment.  
- Double-check filepaths in `<script>` and `<link>` elements for absolute vs relative URLs. 

## JavaScript:
- Update [Modernizr build](http://modernizr.com/download/) as needed. (Always create and switch to a custom build before deploying to production.) 

## Images: 
- Update favicon, Apple touch icon, and Windows tile images as needed. 
