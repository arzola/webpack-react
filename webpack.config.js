module.exports = {
  entry: ['babel-polyfill', './src/bootstrap.js'],
  output: {
    path: __dirname + '/build',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3333,
    contentBase: __dirname + '/build',
    inline: true
  }
}
