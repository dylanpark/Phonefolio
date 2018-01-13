const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let extractCss = new ExtractTextPlugin('css/style.css');
let generateHtml = new HtmlWebpackPlugin({ template: 'src/index.html' });

module.exports = (env = {}) => {
  const debug = !env.production;  
  return {
    node: {
      fs: 'empty'
    },
    devtool: "inline-sourcemap",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname),
      filename: "bundle.js"
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'src', 'page')
      ]
    },
    module: {
      rules: [
        {
          test: /\.js|\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          include: [
            path.join( __dirname, 'src')
          ],
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: [{loader: 'style-loader'}],
            use: ['css-loader', 'sass-loader']
          }))
        }
      ]
    },
    plugins: debug ? [
      extractCss,
      generateHtml
    ] : [
      extractCss,
      generateHtml,
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
    ],
  };
}
