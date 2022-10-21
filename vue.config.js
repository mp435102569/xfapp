const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend-api-01.newbee.ltd',
        changeOrigin: true
      },
    }
  }
})
