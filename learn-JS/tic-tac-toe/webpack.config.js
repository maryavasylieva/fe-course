const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
   },


   module: {
      rules: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: "babel-loader"
      },
      {
         test: /\.css$/,
         use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
       }
     ]
   },


   plugins: [
      new HtmlWebpackPlugin({
         hash: true,
         template: './src/index.html',
         filename: 'index.html'
      }),

      new MiniCssExtractPlugin({
         filename: 'style.css',
       })
   ]
}


// module: {
//    rules: [{
//       test: /\.js$/,
//       exclude: /node_modules/,
//       loader: "babel-loader"
//    }]
// }