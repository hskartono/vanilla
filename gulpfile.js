var gulp = require('gulp');
var less = require('gulp-less');
var clean_css = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

const ALL_JS_PATH = 'amn/js/*.js';
const ALL_CSS_PATH = 'amn/css/*.less';
const DEST_JS = 'amn/js/';
const DEST_CSS = 'amn/css/';
const SRC_JS = 'amn/js/';
const SRC_CSS = 'amn/css/';

gulp.task('default', function(){
    console.log('okeh jalan');
});

gulp.task('less-minify-css', function(){
    gulp.src(SRC_CSS + 'master.less')
        .pipe(less())
        .pipe(clean_css({
            keepSpecialComments:0,
            processImport:0
        }))
        .pipe(rename('master.min.css'))
        .pipe(gulp.dest(DEST_CSS));
});

gulp.task('minify-js', function(){
    gulp.src([SRC_JS + 'amn_component.js', SRC_JS + 'amn_popup.js'])
        .pipe(concat('amn_master.js'))
        .pipe(gulp.dest(DEST_JS))
        .pipe(rename('amn_master.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(DEST_JS));
});

gulp.task('watch', function(){
    gulp.watch(ALL_JS_PATH, ['minify-js']);
    gulp.watch(ALL_CSS_PATH, ['less-minify-css']);
});
