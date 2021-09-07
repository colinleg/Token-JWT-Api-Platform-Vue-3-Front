const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const precss = require('precss');



// Création de la tache Gulp, qui chargera tous les plugins de postcss
function taskPostcss() {

    const plugins = [

        precss,
        tailwindcss,
        autoprefixer,
        rename,

    ];
    // on précise bien pour ne pas avoir de boucle, les enfants DIRECT de style/
    return gulp.src('./src/style/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./src/dest'));

}

// Création d'une tache Gulp, qui surveille les changement des fichiers css, et envoie a postcss
gulp.task('watchPostcss', () => {
    gulp.watch('./src/style/**/*.css', taskPostcss)
});