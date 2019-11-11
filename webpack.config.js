const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin')

module.exports = {
  mode: 'development',

  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  devServer: {
    contentBase: './dist',
    stats: 'minimal'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          },
          'eslint-loader',
        ]
      },
      {test:/\.(png|jpe?g|gif)$/i, use: {loader:'file-loader'}},
      {test:/\.svg$/, use: {loader:'url-loader'}},
      {test:/\.woff$/, use: {loader:'url-loader'}},
      {test:/\.woff2$/, use: {loader:'url-loader'}},
      {test:/\.[ot]tf$/, use: {loader:'url-loader'}},
      {test:/\.eot$/, use: {loader:'url-loader'}},
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              // implementation: require("sass")
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello React'
    }),
    new HtmlWebpackRootPlugin('root'),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ]
}
