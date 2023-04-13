const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://0c38-210-16-95-84.in.ngrok.io',
      changeOrigin: true,
    })
  );
};
