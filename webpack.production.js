var webpack = require('webpack');
// var compressionPlugin = require('compression-webpack-plugin');

module.exports = require('./webpack.base')({
  longTermCaching: true,
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      // new compressionPlugin({
      //   asset: "{file}",
      //   regExp: /\.js$/,
      // })
  ]
});
