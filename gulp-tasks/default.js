var gulp = require('gulp');
var bower = require('gulp-bower');

var sass = require('gulp-sass');
var sh = require('shelljs');

var sourcemaps      = require('gulp-sourcemaps');
var templateCache   = require('gulp-angular-templatecache');

// 추가
var clean       = require('gulp-clean');
var rename      = require('gulp-rename');
var bower_path  = './bower_components';
var server_path = './';
var app_path = './app/www/';
var sass_path   = './app/scss/';
var lib_path    = app_path + 'lib';
var js_path     = app_path + 'js';
var view_path   = app_path + 'views';
var css_path    = app_path + 'css';
// 추가 끝

var paths = {
    sass    : [sass_path + '/**/*.scss'],
    js      : [js_path + '/**/*.js'],
    templatecache: [view_path + '/**/*.html'],
    
    bower_components: [
        bower_path + '/ionic/scss/**/*.scss',
        bower_path + '/ionic/fonts/*.*',
        bower_path + '/ionic/js/ionic.bundle.js',
    ]
};

gulp.task('bower', function() {
  return bower(bower_path)
    .pipe(gulp.dest(lib_path))
});

gulp.task('sass', function(done) {
    gulp.src(sass_path + 'ionic.app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(css_path)) //'../mobp-server/www/css/'))
        .on('end', done);
});

gulp.task('templatecache', function(done) {
    gulp.src(paths.templatecache)
        .pipe(templateCache({ standalone: true, filename: 'views.js', module: 'mobp.views', root: 'views/' }))
        .pipe(gulp.dest(js_path)) //'../mobp-server/www/js/'))
        .on('end', done);
});

// bower 라이브러리를 www/lib (lib_path) 아래 복사
/*
gulp.task('bower', function() {
    gulp.src(paths.bower_components, { base: bower_path })
        .pipe(gulp.dest(lib_path));
});
*/

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.templatecache, ['templatecache']);
});

/*gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});
*/
gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
