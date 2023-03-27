const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  // *** rules === loaders > can use interchangeably
  module: {
    rules: [
      {
        use: 'babel-loader',
      },
    ],
  },
}

module.exports = config
