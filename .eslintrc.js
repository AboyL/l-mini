module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": ["eslint:recommended", "standard"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "globals": { // 脚本在执行期间访问的额外的全局变量
    "Component": true,
    "Page": true,
    "wx": true,
    "App": true
  },
  "rules": {
    "semi": "off",
    "space-before-function-paren": "off",
    "no-self-compare": "off",
    // 启用的规则及其各自的错误级别。
    "indent": [ // 强制执行一致的缩进（4个空格）
      1,
      2
    ],
    "linebreak-style": [
      0,
      "error",
      "windows"
    ],
    "quotes": [ // 强制一致使用反引号，双引号或单引号（反引号或单引号）
      1,
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "semi": [ // 要求或禁止使用分号代替 ASI (semi)
      1,
      "always"
    ],
    "no-console": "off",
    "no-undef": [2], // 禁用未声明的变量
  }
}