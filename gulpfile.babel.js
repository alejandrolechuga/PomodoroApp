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

gulp.task('develop',['build', 'copy']);
gulp.task('build', () => {
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
    .pipe(gulp.dest('public/dist/'));
  return b;
});

gulp.task('copy', () => {
  let dependencies = [
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/angular2-polyfills.min.js'
  ];

  return gulp
    .src(dependencies)
    .pipe(gulp.dest('public/dist'));
});
