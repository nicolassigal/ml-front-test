require('babel-register')({
    presets: [ 'env' ]
})

module.exports = require('./api/server');