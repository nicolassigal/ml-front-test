const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('../webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, '../public')
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader!postcss-loader!sass-loader'
            })
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(['public'], { root: path.resolve(__dirname , '..') }),
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([
          { 
            from: path.resolve(__dirname, '../src/client/assets'),
            to: path.resolve(__dirname, '../public/assets')
          }
        ]),
        new UglifyJsPlugin({
          uglifyOptions: {
            sourceMap: false,
            compress: true,
          }
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
        })
      ]
}

module.exports = merge(baseConfig, config);