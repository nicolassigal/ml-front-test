const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    devtool: 'source-map',
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);