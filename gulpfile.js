var gulp = require('gulp');

gulp.task('prismjs', function () {
  gulp.src([
    './node_modules/prismjs/themes/prism-tomorrow.css',
    './node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css',
    './node_modules/prismjs/prism.js',
    './node_modules/prismjs/plugins/line-numbers/prism-line-numbers.min.js',
    './node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'
  ]).pipe(gulp.dest('./public/dist/prismjs'));
});
