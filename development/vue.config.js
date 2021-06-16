module.exports = {
  productionSourceMap: false,
  publicPath: '',
  filenameHashing: false,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: '隨機抽獎器',
      author: 'ツキノリュウ'
    },
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/_mixin.scss";`
      }
    }
  }
}