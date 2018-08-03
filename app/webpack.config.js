const path = require('path');

module.exports = {
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve : {
        alias: {
            Shared: path.resolve(__dirname, 'src/shared/')
        }
    }
}
