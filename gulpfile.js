var gulp = require('gulp');

gulp.task('one', function() {
    // 默认的任务代码
    console.log('task one');
});

gulp.task('two', ['one'], function() {
    console.log('task two');
});

gulp.task('three', ['two'], function() {
    console.log('task three');
});

gulp.task('default',['three'], function() {
    // 将你的默认的任务代码放在这
    console.log('default');
});

gulp.src(['src/js/*.js', 'src/html/*.html'], { base:'src' })
    // .pipe(minify())
.pipe(gulp.dest('build'));