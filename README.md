Basic Website Boilerplate
===========

A set of simple website starter files, using [Bourbon](http://bourbon.io)-flavored [Sass](http://sass-lang.com) and [Grunt](http://gruntjs.com). Requires [node.js](http://nodejs.org). 

## Getting Started
- Copy this project to a new directory. 
- Go to your new project directory in the command line, and enter the following:  
```
npm update --save-dev
```
- That’s it. To watch your project directory for changes and automatically compile Sass, and lint + minify your JS, simply type `grunt` and hit enter. 
- Additional Grunt tasks included: 
  - `grunt svg`: Clean + minify SVGs placed in the `img\_source` directory. Outputs to `img\` directory by default. Configurable under the `svgmin` task in the included Gruntfile. 
  - `grunt build`: Compile Sass, lint + minify JS without the `watch` option. 

## Checklist
A few other items to fill out or customize depending on your project…

### HTML:
- Update page `<title>`. 
- Update page description `<meta>`. 
- Remove Respond.js proxy `<link>`s and script call in the `<head>` if not serving CSS across domains (i.e. if you’re not using a CDN). 
- If using Typekit, update script call in `<head>` w/ kit id and uncomment. 
- Update `<body>` id attribute. (Handy for [specificty issues](http://css-tricks.com/id-your-body-for-greater-css-control-and-specificity/) and as a courtesy to folks who write their own user styles.)
- If using Google Analytics, update script call at bottom of page with tracking ID and uncomment.  
- Double-check filepaths in `<script>` and `<link>` elements for absolute vs relative URLs. 

### JavaScript:
- Update [Modernizr build](http://modernizr.com/download/) as needed. (Always create and switch to a [custom build](http://modernizr.com/download/) before deploying to production.) 

### Images: 
- Update favicon, Apple touch icon, and Windows tile images as needed. 

### Misc: 
- Update `name`, `description`, `repository`, and `bugs` values in `package.json` if you’re using it for your project. 
