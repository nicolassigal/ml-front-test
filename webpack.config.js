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
    }
}