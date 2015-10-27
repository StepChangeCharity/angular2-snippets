'use strict';

var gulp = require('gulp'),
    tslint = require('gulp-tslint');

gulp.task('ts-lint', function(){
      return gulp.src('./src/app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

// TODO: add other lint style etc.

// Lint everything
gulp.task('lint', ['ts-lint']);