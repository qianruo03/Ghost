var gulp = require('gulp');
var minifyhtml = require("gulp-minify-html");

var minifyCss  = require("gulp-clean-css");
var minifyjs   = require("gulp-uglify");
var concat     = require("gulp-concat");
//html压缩
gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minifyhtml())
	.pipe(gulp.dest('dist'))
});

//css压缩
gulp.task('csstask',function(){
	gulp.src('./css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('./dist/css'))
});

//js压缩
gulp.task('jstask',function(){
	gulp.src('js/*.js')
	.pipe(minifyjs())
	.pipe(concat('all.js'))
	.pipe(gulp.dest('dist/js'))
})

//监听

gulp.task('watch',function(){
	gulp.watch('*.html',['htmltask']);
	gulp.watch('css/*.css',['csstask']);
	gulp.watch('js/*.js',['jstask']);
});
