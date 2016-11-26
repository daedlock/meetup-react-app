/* eslint-disable */

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');


var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');


console.log("Started");

module.exports = {


  // Entry Point
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3333',
    'webpack/hot/only-dev-server',
    `${__dirname}/src/app.jsx`,
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


  //Dev Tools
  devtool: '#inline-source-map',


  //Dev Server
  devServer: {
    port: '3333',
    contentBase:'./build',
    inline: true,
    historyApiFallback: true,
    hot: true
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
         // 'importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
         'css?modules&importLoaders=1&localIdentName=[hash:base64:5]',
         // 'postcss-loader',
         //
         ]},
         {
test: /.jsx?$/,
       loaders: [
         //Compile ES6,JSX
         'babel?presets[]=react,presets[]=es2015',
       'eslint-loader'
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
           // new ExtractTextPlugin('app.css', { allChunks: true }),


],


  //PostCSS Configuration
  postcss: function postCss() {
    return [
      autoprefixer
    ];
  }


};

