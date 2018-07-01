const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'source-map',

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.resolve(__dirname, 'src/public'),
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://localhost:8081'
    }
  },

  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [path.join(__dirname, "src/assets")],
        loader: "file-loader?name=assets/[name].[ext]"
    },

      // https://webpack.js.org/loaders/babel-loader/
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      // https://webpack.js.org/loaders/sass-loader/
      {
        test: /\.(c|sa|sc)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      // $: 'jquery',
      _: 'lodash',
    })
  ]
};
