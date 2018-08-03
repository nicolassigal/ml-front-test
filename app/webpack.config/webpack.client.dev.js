const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, '../public')
    },
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader!sass-loader'
            })
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(['public'], { root: path.resolve(__dirname , '..') }),
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([
          { from: path.resolve(__dirname, '../src/client/assets'), to: path.resolve(__dirname, '../public/assets') }
        ])
      ]
}

module.exports = merge(baseConfig, config);