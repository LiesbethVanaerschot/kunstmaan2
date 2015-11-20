var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var input = 'assets/sass/**/*.scss';
var output = 'assets/css';

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass())
    // Write the resulting CSS in the output folder
    .pipe(autoprefixer())
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "www.kunstmaan.dev"
    });

    gulp.watch("assets/sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("assets/js/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);