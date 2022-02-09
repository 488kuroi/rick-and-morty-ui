const { createProxyMiddleware } = require('http-proxy-middleware');

const rewriteFn = function (path, req) {
    return path.replace(process.env.REACT_APP_API_FAKE_URL, '');
};

module.exports = function(app) {
  app.use(
    process.env.REACT_APP_API_FAKE_URL,
    createProxyMiddleware({
      target: process.env.REACT_APP_API_BASE_URL,
      changeOrigin: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*',
        'Access-Control-Allow-Origin': '*'
      },
      pathRewrite: rewriteFn,
    })
  );
};