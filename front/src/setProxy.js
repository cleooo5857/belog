const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
       "/*",
       createProxyMiddleware({
<<<<<<< HEAD
           target: "http://15.164.220.47:8080/",
=======
           target:process.env.REACT_APP_BASE_URL,
>>>>>>> c583def3023df4d9b457492810c32def89c99338
           changeOrigin: true,
       })
   );
};