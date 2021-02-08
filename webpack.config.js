const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT = path.resolve(__dirname, 'src');

module.exports = {
  context: ROOT,

  entry: './index',
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
};
