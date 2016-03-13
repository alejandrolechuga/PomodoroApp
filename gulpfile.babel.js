'use strict';

import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import assign from 'object-assign';
import browserify from 'browserify';
import babelify from 'babelify';
import del from 'del';
import cssnano from 'gulp-cssnano';
import sass from 'gulp-sass';
import concat from 'gulp-concat';


gulp.task('dev',[
  'build.js',
  'build.copy',
  'build.scss'
]);

gulp.task('build.js', () => {
  const b = browserify('src/index.js', { cache:{}, debug: true })
    .transform(babelify)
    .bundle()
    .on('error', (err) => {
      console.log(err);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/dist/js'));
  return b;
});

gulp.task('build.copy', () => {
  let dependencies = [
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/angular2-polyfills.min.js',
    'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min.js'
  ];

  return gulp
    .src(dependencies)
    .pipe(gulp.dest('public/dist/js/'));
});

gulp.task('build.scss', () => {
  return gulp
    .src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'compressed'}).on('error', sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/dist/css/'));
});
