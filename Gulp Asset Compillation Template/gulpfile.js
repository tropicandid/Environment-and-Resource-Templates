/*
NPM library requirements
*/
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

/*
THESE ARE THE ONLY THINGS YOU NEED TO CHANGE! 
(unless you want to modify behavior)
*/
var srcSass = '#YOUR_SASS_SRC_PATH#';
var destSass = '#YOUR_SASS_DESTINATION_PATH#';
var srcJs = '#YOUR_JS_SRC_PATH#';
var destJs = '#YOUR_JS_DESTINATION_PATH#';
var srcImg = '#YOUR_IMG_SRC_PATH#';
var destImg = '#YOUR_IMG_DESTINATION_PATH#';

/*
Compiles, and minifies your sass to css files
*/
gulp.task('sass', function () {
 	return gulp.src(srcSass)
	    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	    .pipe(gulp.dest(destSass));
});

/*
Uglifies, and minifies your js files
*/
gulp.task('scripts', function () {
 	return gulp.src(srcJs)
	    .pipe(rename( { suffix: '.min' } ) )
		.pipe(uglify())
		.pipe(jshint())
		.pipe(gulp.dest(destJs));
});

/*
Compresses and removes meta data and white space from images.
Funtional for jpg, png, svg (as far as I know)
*/
gulp.task('img', function () {
 	return gulp.src(srcImg)
 		.pipe(imagemin())
		.pipe(gulp.dest(destImg));
});

gulp.task('watch', function () {
  gulp.watch(srcSass, ['sass']);
  gulp.watch(srcJs, ['scripts']);
  gulp.watch(srcJs, ['img']);
});

gulp.task('default', ['watch', 'scripts', 'sass', 'img']);

