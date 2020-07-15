const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'minimal',
  devServer: {
    contentBase: ['./src', './public'],
    hot: true,
    inline: true,
    port: 8000,
  },
});
