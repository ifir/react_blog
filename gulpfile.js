var gulp = require('gulp');
var sass = require('gulp-sass');//编译sass
var webpack = require('webpack-stream');//连接webpack.config.js
var nodemon = require('gulp-nodemon');//实时重启服务
var runSequence = require('run-sequence');//任务先后順序
var changed = require('gulp-changed');//过滤变动的文件
var plumber = require('gulp-plumber');//捕获处理任务中的错误

var config = require('./webpack.config.js');
var reactjspath = 'src/components/**/*.js';
var scsspath = 'src/assets/styles/*.scss';
var imgpath = 'src/assets/images/*.*';

gulp.task('sass', function (){
	return gulp.src(scsspath)
	.pipe(plumber())
	.pipe(changed('./src/output/css'))
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(gulp.dest('./src/output/css'))
});

gulp.task('webpack', function (){
	return gulp.src(reactjspath)
	.pipe(plumber())
	.pipe(changed('./src/output'))
	.pipe(webpack(config))
  	.pipe(gulp.dest('./src/output/js'));
});

gulp.task('images', function (){
	return gulp.src(imgpath)
	.pipe(plumber())
	.pipe(changed('./src/output/img'))
  	.pipe(gulp.dest('./src/output/img'));
});

gulp.task('nodemon', function() {
	nodemon({
		script: 'app.js',
		ext: 'js jsx scss'
		/*env: {
			'NODE_ENV': 'development'
		}*/
	})
});

gulp.task('watch',function (){
	gulp.watch(scsspath, ['sass']);
	gulp.watch(reactjspath,['webpack']);
	gulp.watch(imgpath,['images']);
});

gulp.task('default', function(callback){
	 runSequence(
	 	['sass', 'webpack', 'images', 'watch'],
	 	'nodemon',
	 	callback
	 )
});