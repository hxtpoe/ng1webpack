var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    javascript: "./src/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: 'es2015'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "app.js"
  },
  plugins: [new HtmlWebpackPlugin()]
};
