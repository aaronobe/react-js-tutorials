var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/client.js",
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
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

/**

*----------------------------------------------------------------------*

(Entry): On line 8, we are taking "client.js" and we are transpiling it on line 24 to be "client.min.js"

***1) On line 14 there is a (Loader); Anythng that's a JS file get gets run through the babel loader with the exception of node_modules and bower_components(if that will be implimented). ****2) On line 16 (presets) "react JSX", es6 code and some bleeding edge stuff will be transpile. ***3)On line 17 (plugins) we are going to convert some "react-html-attrs", add class properties and use decorators.


*----------------------------------------------------------------------*
**/
