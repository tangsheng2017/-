const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: `dist/${process.env.NODE_ENV}`,
  assetsDir: 'static',
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      }),
      new webpack.DefinePlugin({
        process: {
          env: JSON.stringify(process.env) // 将属性转化为全局变量，让代码中可以正常访问
        }
      })
    ]
  },
  devServer: {
    proxy: {
      // 本地开发时，将 API 请求代理到 API 服务器
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // pathRewrite是使用proxy进行代理时，对请求路径进行重定向以匹配到正确的请求地址
        }
      }
    }
  }
})
