const del = require('del');

// 清除
const clean = (cleanPath) => function taskClean () {
  return del([cleanPath], {
    force: true
  });
};

module.exports = {
  clean
};
