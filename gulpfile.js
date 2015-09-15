/* jshint node:true */
'use strict';

var gulp = require('gulp');
var karma = require('karma').server;
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var pathApp = 'src/main/webapp';
var pathTest = '.';
var pathDist = 'target/dist';
var pathFinal = pathDist + '/static';

gulp.task('clean', require('del').bind(null, [pathDist]));

gulp.task('jshint', function() {
  return gulp.src(pathApp + '/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'))
    .pipe(gulp.dest(pathFinal + '/'));
});

gulp.task('html', ['styles'], function() {
  var lazypipe = require('lazypipe');
  var cssChannel = lazypipe()
    .pipe($.csso)
    .pipe($.replace, 'bower_components/bootstrap/fonts', 'fonts');

  var assets = $.useref.assets({searchPath: '{src/main/webapp}'});

  return gulp.src(pathApp + '/**/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.ngAnnotate()))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', cssChannel()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest(pathFinal));
});

gulp.task('images', function() {
  return gulp.src(pathApp + '/assets/img/**/*')
    // .pipe($.cache($.imagemin({
    //   progressive: true,
    //   interlaced: true
    // })))
    .pipe(gulp.dest(pathFinal + '/assets/img'));
});

gulp.task('icos', function() {
  return gulp.src(pathApp + '/assets/ico/**/*')
    // .pipe($.cache($.imagemin({
    //   progressive: true,
    //   interlaced: true
    // })))
    .pipe(gulp.dest(pathFinal + '/assets/ico'));
});

gulp.task('extras', function() {
  return gulp.src([
    pathApp + '/*.*',
    '!' + pathApp + '/*.html',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest(pathFinal));
});

gulp.task('styles', function() {
  return gulp.src(pathApp + '/assets/css/**/*')
    // .pipe($.cache($.imagemin({
    //   progressive: true,
    //   interlaced: true
    // })))
    .pipe(gulp.dest(pathFinal + '/assets/css'));
});

gulp.task('languages', function() {
  return gulp.src(pathApp + '/assets/i18n/**/*')
    // .pipe($.cache($.imagemin({
    //   progressive: true,
    //   interlaced: true
    // })))
    .pipe(gulp.dest(pathFinal + '/assets/i18n'));
});

gulp.task('fonts', function() {
  return gulp.src(require('main-bower-files')().concat('bower_components/fontawesome/fonts/*')
    .concat('bower_components/bootstrap/fonts/*'))
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(pathFinal + '/assets/fonts'))
});

// inject bower components
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;
  var exclude = [
    'angular-mocks',
    'jasmine-jquery'
  ];

  gulp.src(pathApp + '/**/*.html')
    .pipe(wiredep({exclude: exclude}))
    .pipe(gulp.dest(pathApp));

  gulp.src(pathTest + '/*.js')
    .pipe(wiredep())
    .pipe(gulp.dest(pathTest));
});
 
gulp.task('test', ['wiredep'], function(done) {
  karma.start({
    configFile: __dirname + '/' + pathTest + '/karma.conf.chrome.js',
    singleRun: false
  }, done);
});

gulp.task('testBuild', ['wiredep'], function(done) {
  karma.start({
    configFile: __dirname + '/' + pathTest + '/karma.conf.phantomjs.js',
    singleRun: true
  }, done);
});

gulp.task('connect', ['wiredep'], function() {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic(pathApp))
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    .use('/bower_components', serveStatic('bower_components'))
    .use(serveIndex(pathApp));

  require('http').createServer(app)
    .listen(8000)
    .on('listening', function() {
      console.log('Started connect web server on http://localhost:8000');
    });
});

gulp.task('watch', ['connect'], function() {
  $.livereload.listen();

  // watch for changes
  gulp.watch([
    pathApp + '/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('serve', ['watch'], function() {
  if (argv.open) {
    require('opn')('http://localhost:8000');
  }
});

gulp.task('builddist', ['jshint', 'html', 'fonts', 'images', 'icos', 'extras', 'languages'],
  function() {
  return gulp.src(pathFinal + '/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('testDist', ['builddist'], function() {
  gulp.start('testBuild');
});

gulp.task('build', ['clean'], function() {
  gulp.start('testDist');
});
