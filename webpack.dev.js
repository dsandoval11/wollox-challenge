const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const DESTINATION = path.resolve(__dirname, '.tmp');

module.exports = merge(commonConfig, {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '.tmp'),
    compress: true,
    hot: true,
    open: true,
    port: 9000,
  },
  output: {
    path: DESTINATION,
    filename: 'js/index.js'
  },
});
