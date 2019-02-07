const merge = require('webpack-merge');
const path = require('path');

const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'source-map',
  entry: './test/app.js',
  devServer: {
    contentBase: path.join(__dirname, 'test'),
    compress: true,
    port: 9200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    }
  }
})