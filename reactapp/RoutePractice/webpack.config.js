var config = {
   entry: './App/main.js',
   output: {
      path:'/',
      filename: 'bundle.js',
   },
   devServer: {
      port: 3000
   },
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
           
         }
      ]
   }
}
module.exports = config;