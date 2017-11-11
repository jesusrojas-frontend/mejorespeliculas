/*const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      pug = require('gulp-pug');

gulp.task('default', () =>{
  browserSync.init({
    server: './'
  });
  gulp.watch('./*.html').on('change',browserSync.reload);
  gulp.watch('./css/*.css').on('change',browserSync.reload);
  gulp.watch('./js/*.js').on('change',browserSync.reload);
  gulp.watch('./sass/*.sass', ['sass']);//.on('change', )
  gulp.watch('./jade/*.pug', ['pug']);//.on('change', )
})
gulp.task('sass', () =>{
  gulp.src('./sass/*.sass')
    .pipe(sass())
    .pipe(autoprefixer({
      versions: ['last 2 browers']
    }))
    .pipe(gulp.dest('./css'))
})
gulp.task('pug', ()=>{
  gulp.src('./jade/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
})*/
const gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	rucksack = require('rucksack-css'),
	cssnext = require('postcss-cssnext'),
	cssnested = require('postcss-nested'),
	mixins = require('postcss-mixins'),
	lost= require('lost'),
	sourcemaps = require('gulp-sourcemaps')
	atImport = require('postcss-import'),
	csswring = require('csswring'),
	mqpacker = require('css-mqpacker'),
	pug = require('gulp-pug'),
	browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', () => {
	browserSync.init({
    server: './'
  });
 })

// Tarea para procesar el CSS
gulp.task('css', ()=>{

	const processor = [
		atImport(),
		mixins(),
		cssnested,
		lost(),
		rucksack(),
		cssnext({browsers: ['> 5%', 'ie 8']}),
		mqpacker(),
		csswring()
	]
	return gulp.src('./postcss-cssnext/estilos.css')
		.pipe(sourcemaps.init())
		.pipe(postcss(processor))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream())
})

// Tarea para vigilar los cambios
gulp.task('watch', ()=>{
	gulp.watch('./postcss-cssnext/*.css', ['css'])
	gulp.watch('./jade/*.pug', ['pug'])
	gulp.watch('./*.html').on('change', browserSync.reload)
})
gulp.task('pug', ()=>{
  gulp.src('./jade/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
})

gulp.task('default',['watch','serve'])