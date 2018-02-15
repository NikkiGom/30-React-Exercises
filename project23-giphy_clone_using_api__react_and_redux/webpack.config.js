const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

const productionConfig = merge([
  
    parts.loadImages({
      options: {
        limit: 15000,
        name: "[name].[ext]",
      },
    }),
  
  ]);
  
  const developmentConfig = merge([
  
    parts.loadImages(),
  
  ]);
  
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|png|svg)$/, use: {loader: "url-loader",options: {limit: 25000,},},},
      { test: /\.(jpg|png|svg)$/, use: {loader: "file-loader",options: {name: "[path][name].[hash].[ext]",},},},
    ]
  },
plugins: [HtmlWebpackPluginConfig]
}