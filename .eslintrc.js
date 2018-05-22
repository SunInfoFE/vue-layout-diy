// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // Common
    // 使用类型安全的 === 和 !==
    'eqeqeq': [1, 'always'],
    'no-unused-vars': [1],

    // 风格约束
    // 缩进为2个空格
    'indent': [1, 2],
    // 键名和冒号之前不能有空格，冒号和键值间至少一个空格
    'key-spacing': [1, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 不允许行末出现空格
    'no-trailing-spaces': [1],
    // 使用单引号
    'quotes': [1, 'single'],
    // 句末需要分号
    'semi': [1, 'always'],
    // 方法括号前要有空格
    'space-before-function-paren': [1, 'always'],

    // ES6
    // 箭头函数的参数必须使用圆括号
    'arrow-parens': [1, 'always'],
    // 箭头前后必须有空格
    'arrow-spacing': [1],
    // 禁止修改const变量
    'no-const-assign': [2],
    // 禁止使用var
    'no-var': [2]
  }
}
