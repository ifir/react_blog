var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

gulp.task('webpack', function (){
	gulp.src('./src/components/*.js')
	.pipe(webpack( require('./webpack.config.js') ))
  	.pipe(gulp.dest('./src/output'));
});

gulp.task('default', ['webpack']);