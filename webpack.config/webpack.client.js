const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');

const config = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public')
    },
    devtool: 'source-map'
}

module.exports = merge(baseConfig, config);