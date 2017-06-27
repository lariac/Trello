const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');


module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    javascript: './components/App/App.jsx'
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[hash].bundle.js',
    sourceMapFilename: '[hash].map'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    historyApiFallback: true
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: [path.join(__dirname, '/node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')]
          }
        }]
      },
      {
        test: /\.(jpg|png|svg|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },

      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery'
      },

      { test: /bootstrap-sass[/]assets[/]javascripts[/]/, loader: 'imports?jQuery=jquery' }


    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.tpl.ejs',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version'],
          }),
          precss(),
        ],
      },
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  node: {
    net: 'empty',
    dns: 'empty'
  }
};