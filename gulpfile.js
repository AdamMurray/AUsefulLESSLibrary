
// gulpfile.js

// Base setup
var gulp    = require('gulp'),
    less    = require('gulp-less'),
    concat  = require('gulp-concat');

// Folders
var src = 'src/';

// Concatenate .less files
gulp.task('less', function() {
  return gulp.src([
            src + '*.less'
          ])
    .pipe(concat('library.less'))
    .pipe(gulp.dest(''));
});

// Compile and concatenate .less files
gulp.task('less-to-css', function() {
  return gulp.src([
            src + '*.less'
          ])
    .pipe(less())
    .pipe(concat('library.css'))
    .pipe(gulp.dest(''));
});

// Set up watcher
gulp.task('watch', function() {

  // Watch .less files
  gulp.watch(src + '*.less', ['less', 'less-to-css']);

});

// Default task
gulp.task('default', ['less', 'less-to-css', 'watch']);
