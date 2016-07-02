var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {test: /\.html$/, loader: 'underscore-template-loader'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass'},
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  resolve: {
    modulesDirectories: [__dirname + '/node_modules'],
    root: __dirname
  },
  resolveLoader: {
    root: __dirname + '/node_modules'
  }
};
