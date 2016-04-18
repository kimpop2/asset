var gulp = require('gulp');
//var runSequence = require('run-sequence');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

gulp.task('default', ['sass', 'templatecache']);

