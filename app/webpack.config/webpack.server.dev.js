const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');
const webpackNodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    plugins: [
        new CleanWebpackPlugin(['build'], { root: path.resolve(__dirname , '..') })
    ],
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);