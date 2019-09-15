const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function json () {
  return src( 'src/pug/settings.json' )
    .pipe( dest( './docs' ) );
}

function html() {
  return src('src/pug/index.pug')
    .pipe(pug())
    .pipe(dest('./docs'))
}

function css() {
  return src('src/pug/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('./docs/css'))
}

function js() {
  return src('src/pug/*.js', { sourcemaps: true })
    // .pipe(concat('app.min.js'))
    .pipe(dest('./docs/js', { sourcemaps: true }))
}

function assets () {
  return src( 'src/img/*' )
    .pipe( dest( './docs/img' ) );
}

exports.js = js;
exports.css = css;
exports.html = html;

exports.default = parallel(html, css, js, json, assets);
