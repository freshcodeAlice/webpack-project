const path = require('path');

console.log(path.resolve(__dirname, 'bandle'))

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'bandle')
    },
    mode: 'development'
}
