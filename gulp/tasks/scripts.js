let uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		babel = require('gulp-babel');
    scriptsPATH = {
        "input": "./dev/static/js/",
        "output": "./build/static/js/"
    };

module.exports = function () {
    $.gulp.task('libsJS:dev', () => {
				return $.gulp.src([
				'node_modules/jquery/dist/jquery.min.js',
				'node_modules/bootstrap/dist/js/bootstrap.min.js',
				'node_modules/slick-carousel/slick/slick.min.js',
				'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
			])
            .pipe(concat('libs.min.js'))
            .pipe($.gulp.dest(scriptsPATH.output));
    });

    $.gulp.task('libsJS:build', () => {
				return $.gulp.src([
				'node_modules/jquery/dist/jquery.min.js',
				'node_modules/bootstrap/dist/js/bootstrap.min.js',
				'node_modules/slick-carousel/slick/slick.min.js',
				'node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
		])
						.pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe($.gulp.dest(scriptsPATH.output));
					});

					$.gulp.task('js:dev', () => {
						return $.gulp.src([scriptsPATH.input + '*.js',
            '!' + scriptsPATH.input + 'libs.min.js'])
            .pipe($.gulp.dest(scriptsPATH.output))
            .pipe($.browserSync.reload({
							stream: true
            }));
    });

    $.gulp.task('js:build', () => {
			return $.gulp.src([scriptsPATH.input + '*.js',
			'!' + scriptsPATH.input + 'libs.min.js'])
			.pipe($.gulp.dest(scriptsPATH.output))
    });

    $.gulp.task('js:build-min', () => {
        return $.gulp.src([scriptsPATH.input + '*.js',
				'!' + scriptsPATH.input + 'libs.min.js'])
				.pipe(concat('main.min.js'))
				.pipe(babel({
					presets: ['@babel/preset-env']
				}))
				.pipe(uglify())
				.pipe($.gulp.dest(scriptsPATH.output))
			});
		};
