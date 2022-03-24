/* eslint-disable import/no-commonjs */

module.exports = {
  env: {
    NODE_ENV: '"development"',
    REQUEST_URL: 'http://10.199.209.111:8081',
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      proxy: {
        '/app-web': {
          target: 'http://10.199.209.111:8081',
          // pathRewrite: {
          //   '^/app-web': '/app-web',
          // },
          changeOrigin: true,
        },
      },
    },
  },
};
