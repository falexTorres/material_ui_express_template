var gulp = require('gulp');

gulp.task('watch', ['build'], function() {
	gulp.watch('public/javascripts/home/*.js', ['browserify']);
	gulp.watch('public/javascripts/splash/*.js', ['browserify']);
	gulp.watch('public/javascripts/themes/*.js', ['browserify']);
	//gulp.watch('views/*.jade', ['start']);
	//gulp.watch('models/*.js', ['start']);
	//gulp.watch('routes/*.js', ['start']);
});
