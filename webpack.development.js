const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8000,
  },
  plugins: [
    new Dotenv({
      path: './.env',
    }),
  ],
});
