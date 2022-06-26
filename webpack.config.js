const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPluin = require('html-webpack-plugin');
const speedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smv = new speedMeasureWebpackPlugin()

module.exports = smv.wrap({
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build.js'),
        filename: 'build.js'
    },
    plugins: [
        new webpack.IgnorePlugin({
            contextRegExp: /moment$/,
            resourceRegExp: /locale/g
        }),
        new HtmlWebpackPluin({
            template: './public/index.html',
            inject: 'body'
        }),
        new speedMeasureWebpackPlugin()
    ]
})