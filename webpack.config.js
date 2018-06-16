const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',

  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      test: /\.s?css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { minimize: true } },
        { loader: 'sass-loader' },
        { loader: 'postcss-loader' }
      ]
    },
  ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};