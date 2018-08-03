const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('../webpack.config');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    plugins: [
        new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname , '..') }),
        new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: false,
                compress: true,
              }
        })
    ],
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);