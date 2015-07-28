
// gulpfile.js

// Base setup
var gulp    = require('gulp'),
    concat  = require('gulp-concat');

// Folders
var src = './src/';

// Compile and concatenate .less files
gulp.task('less', function() {
  return gulp.src([
            src + '*.less'
          ])
    .pipe(concat('library.less'))
    .pipe(gulp.dest(''));
});

// Set up watcher
gulp.task('watch', function() {

  // Watch .less files
  gulp.watch(src + '*.less', ['less']);

});

// Default task
gulp.task('default', ['less', 'watch']);
