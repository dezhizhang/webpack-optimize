const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPluin = require('html-webpack-plugin');
const speedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin');

const smv = new speedMeasureWebpackPlugin()
const src = path.resolve(__dirname,'src');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'build.js'),
        filename: 'build.js',
        library: 'hello',
        libraryTarget: 'umd',
    },
    optimization:{
        moduleIds:'deterministic',
        chunkIds:"deterministic",
        // minimize:true,
        // minimizer:[new TerserPlugin()]
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MinicssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin({
            contextRegExp: /moment$/,
            resourceRegExp: /locale/g
        }),
        new HtmlWebpackPluin({
            template: './public/index.html',
            inject: 'body',
            minify:{
                removeComments:true,
                collapseBooleanAttributes:true
            }
        }),
        new MinicssExtractPlugin({
            filename: '[name].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
    ]
}