var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cp = require('child_process');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');

var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'bundle';

/*
 * Build the Jekyll Site
 * runs a child process in node that runs the jekyll commands
 */


/*
 * Rebuild Jekyll & reload browserSync
 */


/*
 * Build the jekyll site and launch browser-sync
 */


/*
* Compile and minify sass
*/


/*
* Compile fonts
*/


/*
 * Minify images
 */


/**
 * Compile and minify js
 */