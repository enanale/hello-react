const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  devServer: {
    contentBase: './dist',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     // {
      //     //   loader: MiniCssExtractPlugin.loader
      //     // },
      //     'css-loader',
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         implementation: require("sass")
      //       }
      //     }
      //   ]
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello React'
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ]
}
