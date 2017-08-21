/**
 * Created by Administrator on 2017/8/21.
 */
var gulp = require('gulp');
var CleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

/**
  * CSS压缩：gulp-clean-css
  */
gulp.task('cssminify',function () {
    gulp.src(['./CSS/*.css'])
        .pipe(CleanCSS())
        .pipe(gulp.dest('./dist/CSS'))
});

/**
  * HTML压缩：gulp-htmlmin
  */
gulp.task('htmlminify',function () {
   gulp.src('./*.html')
       .pipe(htmlmin({collapseWhitespace:true}))
       .pipe(gulp.dest("./dist/HTML"));
});