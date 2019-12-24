const { src, dest, task, series, watch } = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const transformRpx = require('./transform_rpx');
const { clean } = require('./utils');

const outputPath = '../dist/';

// 所有任务
const taskList = [{
  path: `../src/**/*.less`,
  task: 'dispose-less'
}];

task('dispose-less', () => {
  const path = `../src/**/*.less`;
  return src(path)
    .pipe(less())
    .pipe(rename((item) => {
      item.extname = '.wxss';
    }))
    .pipe(transformRpx())
    .pipe(dest(outputPath));
});

// 处理公共元素
const copyList = ['js', 'json', 'wxss', 'wxml', 'wxs', 'png', 'svg', 'jpeg', 'jpg'];

copyList.forEach(item => {
  const path = `../src/**/*.${item}`;
  taskList.push({
    path,
    task: `copy-${item}`
  });
  task(`copy-${item}`, () => {
    return src(path)
      .pipe(
        dest(outputPath)
      );
  });
});

task('watch', () => {
  taskList.forEach(item => {
    watch(item.path, series(item.task));
  });
});

task('default', series(
  clean(outputPath),
  ...taskList.map(v => v.task),
  'watch'
));
