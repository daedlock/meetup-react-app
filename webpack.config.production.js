
/* eslint-disable */

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require("path");

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');


console.log("Started Production Build");

module.exports = {


  // Entry Point
  entry: [
    `${__dirname}/src/app.jsx`
  ],


  //Resolved Directories
  resolve: {
    root: [
      path.resolve("./src/"),
      path.resolve("./src/theme/")
    ],
  },

  //Build Output
  output: {
    path: `${__dirname}/build`,
    filename: 'app.js',
  },



  //Module Definition
  module: {
    /*
     * Module Loaders:
     * Tells Webpack what to do with each file type.
     */
loaders: [
         {
test: /\.css$/,
         loaders: [
           'style?sourceMap',
         'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
         ]},
         {
test: /.jsx?$/,
       loaders: [
         //Compile ES6,JSX
         'babel?presets[]=react,presets[]=es2015',
       ],
       exclude: /node_modules/
         },
         {test: /\.(woff|woff2|otf|svg|ttf|eot)$/, loader: 'url'},

]
          },

          //Plugins
plugins: [
           new CopyWebpackPlugin([
               {
from: './src/index.html',
to: './index.html'
}
           ]),
           new webpack.HotModuleReplacementPlugin(),
],
  };

