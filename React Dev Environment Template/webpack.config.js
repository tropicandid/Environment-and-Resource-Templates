var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/');
var BUILD_DIR = path.resolve(__dirname, 'build/');


var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  watch: true,
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './')
  }
};
module.exports = config;