var webpack = require('webpack');
var path = require('path');
var APP_DIR = path.resolve(__dirname, 'js/');
var BUILD_DIR = path.resolve(__dirname, 'public/assets/js/');


var config = {
  /* Where your compiler is reading from */
  entry: [APP_DIR + '/app', APP_DIR + '/utils', APP_DIR + '/login'],

  /* Where your files will be deposited */
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/assets/js/'
  },

  devServer: {
    contentBase: path.resolve(__dirname, './')
  },

  module : {
    /* Your loaders are what process and transform your files */
    loaders : [
      {
        test : [/\.jsx?/,/\.es6$/],  // Regular expression that tests what kind of files to run through the loader
        include : APP_DIR, // Can also be exclude, to prevent searching through certain fiels
        loader : 'babel-loader' // Module you installed
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader',
        enforce: 'pre'
      }
    ]
  },

  resolve: {
    extensions: [' ','.js','.jsx','.es6']
  },

  watch: true
};

module.exports = config;