var 
    gulp = require("gulp"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    minifycss = require("gulp-minify-css"),
    notify = require("gulp-notify"),
    sass = require("gulp-ruby-sass"),
    livereload = require("gulp-livereload");

// Tasks
// Javascript
gulp.task("compile-scripts", function() { 
    return gulp.src("input/js/**/*.js")
        .pipe(concat("scripts.js"))
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("output/js"))
        .pipe(notify({ message: "Scripts task complete" }));
});

// CSS
gulp.task("compile-theme", function() { 
    return sass("input/sass/base.sass", { style: "expanded" })
        .pipe(rename({basename: "theme"}))
        .pipe(gulp.dest("output/css"))
        .pipe(rename({basename: "theme", suffix: ".min"}))
        .pipe(minifycss())
        .pipe(gulp.dest("output/css"))
        .pipe(notify({ message: 'Styles task complete' }));
});

//
// Watchers
//

gulp.task('watch-all', function() {

    gulp.watch("input/sass/**/*.sass", ["compile-theme"]);
    gulp.watch("input/js/**/*.js", ["compile-scripts"]);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(["output/**/*"]).on("change", livereload.changed);
});