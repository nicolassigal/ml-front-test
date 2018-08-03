const path = require('path');

module.exports = {
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/', '**/*.test.js']
            }
        ]
    },
    resolve : {
        alias: {
            Shared: path.resolve(__dirname, 'src/shared/'),
            Mocks: path.resolve(__dirname, 'test/mocks/'),
        }
    }
}
