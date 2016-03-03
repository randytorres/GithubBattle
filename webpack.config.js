module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_module/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
