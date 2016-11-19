var webpack = require('webpack');
var path = require('path');
var debug = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname,

  devtool: debug ? "inline-sourcemap" : null,

  entry: path.join(__dirname, "src/index.js"),

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
 
  resolve: {
  	extensions: ['', '.js', '.jsx']
  },

  output: {
    path: __dirname + "/public/js",
    publicPath: "/js/",
    filename: "bundle.js"
  },

  devServer: {
  	contentBase: './public',
  	hot: true
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
  ],

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};