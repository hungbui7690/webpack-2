const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },

      // ***
      {
        use: ['style-loader', 'css-loader'], // css-loader will process, then it will be sent to style-loader
        test: /\.css$/,
      },
    ],
  },
}

module.exports = config
