const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, 'src');

module.exports = {
  context: ROOT,

  entry: './index',
  module: {
    rules: [
      {
        test: /.html$/,
        exclude: /index.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            useRelativePath: true,
            publicPath: ''
            // esModule: false,
          },
        }],
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf)$/,
        use: 'file-loader?outputPath=fonts/'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AngularJS - Webpack',
      favicon: './assets/favicon.ico',
      template: './index.html',
      inject: true
    }),
  ]
};
