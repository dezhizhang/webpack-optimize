# webpack 优化

### IgnorePlugin 忽略不需要打包文件

```js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPluin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build.js"),
    filename: "build.js",
  },
  plugins: [
    new webpack.IgnorePlugin({
      contextRegExp: /moment$/,
      resourceRegExp: /locale/g,
    }),
    new HtmlWebpackPluin({
      template: "./public/index.html",
      inject: "body",
    }),
  ],
};
```
### 分析打包速度speed-measure-webpack-plugin
```js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPluin = require('html-webpack-plugin');
+const speedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
+const smv = new speedMeasureWebpackPlugin()

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
```
