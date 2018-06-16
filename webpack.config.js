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
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { minimize: true } },
        'sass-loader',
        'postcss-loader'
      ]
    }
  ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};