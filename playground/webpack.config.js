const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // (1)

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

      // (3) remove the last config (style-loader), but use this one instead
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  // (2) save as style.css
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
}

module.exports = config
