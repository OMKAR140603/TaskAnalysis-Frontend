module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://84d3-210-16-94-134.ngrok-free.app/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
