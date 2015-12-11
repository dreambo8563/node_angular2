// Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var input = './public/scss/*.scss';
var output = './public/stylesheets/';


var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

var tsOptions = { target: "ES5",
        module: "commonjs",
        sourceMap: true,
        watch: true,
        moduleResolution: "node",
        isolatedModules: false,
        jsx: "react",
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        declaration: true,
        noImplicitAny: false,
        noExternalResolve :true,
        removeComments: true,
        noLib: false,
        preserveConstEnums: true,
        suppressImplicitAnyIndexErrors: true
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
     
    // Watch the input folder for change,
    // and run `sass` task when something happens
        gulp.watch(input, ['sass'])
        gulp.watch('./routes/**/*.ts', ['ts'])
         gulp.watch('./*.ts', ['ts'])
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

// Compile typescript sources
gulp.task('ts', function() {  
   var tsResult = gulp.src(['./*.ts','./routes/**/*.ts','./typings/**/*.ts'], { base: "." })
                        .pipe(sourcemaps.init())
                        .pipe(ts(tsOptions))
                        return tsResult.js
                        .pipe(sourcemaps.write())
                        .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass','ts', 'liveload', 'watch']);