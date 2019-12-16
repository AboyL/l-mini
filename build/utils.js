const del = require('del');

// 清除
const clean = (cleanPath) => function task_clean () {
  return del([cleanPath], {
    force: true
  });
};

module.exports = {
  clean,
};