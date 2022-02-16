const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathToBundle = path.resolve(__dirname, 'bundle');


module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MY AWESOME WEBPACK PAGE',
            template: './index.html'
        })
    ],
    output: {
        filename: '[contenthash].js',
        path: pathToBundle,
        clean: true,
    },
    mode: 'production',
    devServer: {
        static: pathToBundle,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
        ]
    }
}
