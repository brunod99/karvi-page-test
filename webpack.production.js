const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.css',
      fix: true,
      failOnError: false,
      quiet: false,
      emitErrors: true, // by default this is to true to check the CSS lint errors
    }),
    new Dotenv({
      path: './.env.production',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'public'},
      ],
    }),
  ],
});
