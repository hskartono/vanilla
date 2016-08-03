var gulp = require('gulp');
var less = require('gulp-less');
var clean_css = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
    console.log('okeh jalan');
});

gulp.task('less-minify-css', function(){
    gulp.src('amn/css/master.less')
        .pipe(less())
        .pipe(clean_css({
            keepSpecialComments:0,
            processImport:0
        }))
        .pipe(rename('master.min.css'))
        .pipe(gulp.dest('amn/css/'));
});

gulp.task('minify-js', function(){
    gulp.src(['amn/js/amn_component.js', 'amn/js/amn_popup.js'])
        .pipe(concat('amn_master.js'))
        .pipe(gulp.dest('amn/js/'))
        .pipe(rename('amn_master.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('amn/js/'));
});

gulp.task('watch', function(){
    gulp.watch('amn/js/*.js',['minify-js']);
    gulp.watch('amn/css/*.less',['less-minify-css']);
});
