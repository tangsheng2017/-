module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      exclude: /node_modules/i
    }
  }
}
