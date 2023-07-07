module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["last 15 versions"],
      browsers: ["Android >= 4.0", "iOS >= 7", "ie >= 10"],
    },
    "postcss-pxtorem": {
      rootValue: 192,
      propList: ["*"], //属性的选择器，*表示通用
      selectorBlackList: [], //忽略的选择器
    },
  },
};
