var webpack = require('webpack');
var compressionPlugin = require('compression-webpack-plugin');

module.exports = require('./webpack.base')({
  longTermCaching: true,
  minimize: true,
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new compressionPlugin({
        asset: "{file}",
        regExp: /\.js$/,
      })
  ]
});
