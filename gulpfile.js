// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var input = './public/scss/*.scss';
var output = './public/stylesheets/';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

// Task
gulp.task('liveload', function () {
    // listen for changes
    livereload.listen();
    // configure nodemon
    nodemon({
        // the script to run the app
        exec: 'node --debug',
        script: 'app.js',
        ext: 'js',
    }).on('restart', function () {
        // when the app has restarted, run livereload.
        gulp.src('app.js')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
    })
});

gulp.task('watch', function () {
    return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
        .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});


gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(output));
});

gulp.task('default', ['sass', 'liveload', 'watch']);