
const path = require('path');
module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  lintOnSave: false, // 是否开启eslint保存检测, 有效值: true || false || 'error'
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
function addStyleResource(rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
          patterns: [
              path.resolve(__dirname, 'src/styles/variable.less'), // 需要全局导入的less
              path.resolve(__dirname, 'src/styles/mixin.less'),
          ],
      })
}