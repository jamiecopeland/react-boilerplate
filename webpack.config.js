var path = require('path');
var webpack = require('webpack');
var htmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'client', 'src', 'Main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    root: path.resolve(__dirname, 'client', 'src'),
    extensions: ['', '.js', '.jsx', '.scss', '.html'],
    modulesDirectories: ['node_modules', 'assets', 'client/src']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['react-hot', 'babel',],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=8192&name=[path][name]--[hash:6].[ext]'
      },
      {
        test: /\.(eot|ttf|woff)$/,
        loader: 'url-loader?limit=10000&name=[path][name]--[hash:6].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?module&localIdentName=[local]!autoprefixer-loader!sass-loader?outputStyle=compressed'
      }
    ]
  },
  plugins: [
    new htmlwebpackPlugin({
      template: path.resolve(__dirname, 'client', 'index.html'),
      inject: 'body'
    }),
    new webpack.OldWatchingPlugin()
  ]
};
