module.exports = {
  entry: './src/searchBar.js',
  output: {
    path: __dirname,
    filename: './dist/build.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016', 'react']
        }
      }
    ]
  }
};
