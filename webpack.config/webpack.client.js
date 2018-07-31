const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
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
        new ExtractTextPlugin('styles.css')
      ]
}

module.exports = merge(baseConfig, config);