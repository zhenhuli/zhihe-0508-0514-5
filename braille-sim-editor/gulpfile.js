const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const detectPort = require('detect-port');

const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  html: {
    src: '*.html',
    dest: 'dist'
  }
};

function styles() {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

function watch() {
  gulp.watch(paths.scss.src, styles);
  gulp.watch(paths.js.src, scripts);
  gulp.watch(paths.html.src, html);
}

async function serve() {
  const defaultPort = 3000;
  const port = await detectPort(defaultPort);
  
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: port,
    open: true,
    notify: false
  });
}

const build = gulp.parallel(styles, scripts, html);
const dev = gulp.series(build, gulp.parallel(serve, watch));

exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.build = build;
exports.dev = dev;
exports.default = dev;
