var gulp = require('gulp');
var watch = require('gulp-debounced-watch');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var eslint = require('gulp-eslint');
var clean = require('gulp-clean');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var webpack = require('webpack-stream');
var gutil = require('gulp-util');

const SRC_PATH = './ui-app';
const DEST_PATH = './src/main/resources/public'

const requiredPackages = {
	'reboot-ui': '2.0.0-a-61'
};

/**
 * Start browser sync and proxy to the web
 */
gulp.task('browser-sync', ['build'], function() {
	return browserSync({
		proxy: {
			target: 'localhost:8080'
		},
		browser: false,
		ghostMode: false,
		notify: false
	});
});

gulp.task('check', function(cb) {
	require('execa').shell('npm list --depth=0 --json=true')
	.then(function(result) {
		return result;
	})
	.catch((e) => {
		return e;
	})
	.then(function(result) {
		var data = JSON.parse(result.stdout);
		var hasError;
		Object.keys(requiredPackages).forEach((expect) => {
			gutil.log('checking', gutil.colors.blue(expect), '...');
			if (data.dependencies[expect].version !== requiredPackages[expect]) {
				gutil.log(gutil.colors.red(`${expect} mismatch, expected ${requiredPackages[expect]}, found ${data.dependencies[expect].version}`));
				hasError = true;
			}
		});
		if (hasError) {
			throw new gutil.PluginError();
		} else {
			cb();
		}
	});
});

gulp.task('build', ['check'], function() {
	var config = Object.create(require('./webpack.config.js'));
	return gulp.src(`${SRC_PATH}/entry.js`)
	.pipe(plumber())
	.pipe(webpack(config))
	.pipe(gulp.dest(DEST_PATH));
});

gulp.task('serve', [
	'check',
	'browser-sync'
], function() {
	var config = Object.create(require('./webpack.config.js'));
	config.watch = true;
	gulp.src(`${SRC_PATH}/entry.js`)
		.pipe(plumber())
		.pipe(webpack(config))
		.pipe(gulp.dest(DEST_PATH));
	// watch('./src/main/resources/public/**/*.*', reload);
	watch('./build/resources/main/public/**/*.*', reload);
});

gulp.task('default', ['build']);