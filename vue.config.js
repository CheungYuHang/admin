const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/admin' : '/', // 部署应用包时的基本 URL
  outputDir: 'dist', // 生产环境构建文件的目录
  // assetsDir: 'assets', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件
  filenameHashing: true, // 是否开启文件名哈希
  chainWebpack: config => {
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config.set('externals', {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        axios: 'axios',
        mockjs: 'Mock',
        echarts: 'echarts'
      })
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
    // 抽离文件
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        elementUI: {
          name: 'chunk-elementUI',
          priority: 20,
          test: /element-variables.scss/
        }
      }
    })
    // 路径别名
    config.resolve.alias.set('@', resolve('src')).set('@api', resolve('src/api'))
  },
  devServer: {
    open: false, // 自动打开浏览器
    port: 8080, // 端口号
    hot: true, // 开启热加载
    hotOnly: false
  }
}
