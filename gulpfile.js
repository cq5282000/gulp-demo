const gulp = require('gulp');
const runSequence = require('run-sequence');
const source = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer');
const tap = require('gulp-tap');
const concat = require('gulp-concat');
const size = require('gulp-size');
const path = require('path');
const es = require('event-stream');
// gulp.task('one', function() {
//     // 默认的任务代码
//     console.log('task one');
// });

// gulp.task('two', ['one'], function() {
//     console.log('task two');
// });

// gulp.task('three', ['two'], function() {
//     console.log('task three');
// });

// gulp.task('default',['three'], function() {
//     // 将你的默认的任务代码放在这
//     console.log('default');
// });

// gulp.task('default', function() {
//     console.log('123213213123');
// })

// const watcher = gulp.watch('src/js/*.js', ['reload']);

// watcher.on('change', function(event) {
//     console.log('File' + event.path + ' was ' + event.type + ', runining tasks......');
// });

// gulp.task('reload', function(e) {
//     console.log('e', JSON.stringify(e));
// });
// gulp.src(['src/js/*.js', 'src/html/*.html'], { base:'src' })
//     // .pipe(minify())
// .pipe(gulp.dest('build'));

// gulp.src(['!node_modules/**'])
//     // .pipe(minify())
// .pipe(gulp.dest('build'));

const memory = {};

gulp.task('load-lib-files', function() {
    // 从磁盘中读取库文件
    return gulp.src('src/libs/*.js')
    // 将所有库文件拼接到一起
    .pipe(concat('libs.concat.js'))
    // 接入 stream 来获取每个文件的数据
    .pipe(tap(function(file) {
      // 保存文件的内容到内存
      console.log('====================>1', file);
      memory[path.basename(file.path)] = file.contents.toString();
    }));
});

gulp.task('load-versions', function() {
    memory.versions = {};
    // 从磁盘中读取文件
    return gulp.src('src/versions/version.*.js')
    // 接入 stream 来获取每个文件的数据
    .pipe( tap(function(file) {
        // 在 assets 中保存文件的内容
        console.log('===================>2', path.basename(file.path));
        memory.versions[path.basename(file.path)] = file.contents.toString();
    }));
});

gulp.task('write-version', function() {
    // 我们将不容版本的文件的名字保存到一个数组中
    var availableVersions = Object.keys(memory.versions);
    // 我们创建一个数组来保存所有的 stream 的 promise
    var streams = [];

    availableVersions.forEach(function(v) {
        // 以一个假文件名创建一个新的 stream
        var stream = source('final.' + v);
        // 从拼接后的文件中读取数据
        var fileContents = memory['libs.concat.js'] +
        // 增加版本文件的数据
        '\n' + memory.versions[v];

        streams.push(stream);

        // 将文件的内容写入 stream
        stream.write(fileContents);

        process.nextTick(function() {
        // 在下一次处理循环中结束 stream
        stream.end();
        });

        stream
        // 转换原始数据到 stream 中去，到一个 vinyl 对象/文件
        .pipe(vinylBuffer())
        //.pipe(tap(function(file) { /* 这里可以做一些对文件内容的处理操作 */ }))
        .pipe(gulp.dest('output'));
    });

    return es.merge.apply(this, streams);
});

gulp.task('load', function(next) {
    runSequence(['load-lib-files', 'load-versions'], 'write-version', next);
})
