var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var babel       = require('gulp-babel');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'transpile'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/js/index.js", ['transpile']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('transpile', function() {
    return gulp.src("app/js/index.js")
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('app/js/dist'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);



