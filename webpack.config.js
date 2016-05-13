const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  loaders: [
    {test: /\.jsx?$/, include: `${__dirname}/src`, loader: 'babel-loader'}
  ],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`
  },
  plugins: [HTMLWebpackPluginConfig]
};

