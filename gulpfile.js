const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
  return src('src/pug/*.pug')
    .pipe(pug())
    .pipe(dest('./docs'))
}

function css() {
  return src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('./docs/css'))
}

function js() {
  return src('client/javascript/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('./docs/js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.html = html;

exports.default = parallel(html, css, js);
