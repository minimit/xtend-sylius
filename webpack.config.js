const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: env,
  context: path.resolve(__dirname, ''),
  entry: {
    'assets/theme': ['./assets/theme.js', './assets/theme.less'],
  },
  output: {
    filename: '../../public/assets/shop/[name].min.js',
    path: __dirname,
  },
  resolve: {
    alias: {
      // resolve xtend-library js and less
      'xtend-library': [
        path.resolve(__dirname, './xtend-library'),
        path.resolve(__dirname, './node_modules/xtend-library'),
      ],
    },
  },
  cache: false, // @FIX compilation on new files when still compiling node_modules
  module: {
    unsafeCache: false, // @FIX compilation on new files when still compiling node_modules
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../public/assets/shop/[name].min.css',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
    ],
  },
  devtool: 'source-map',
  stats: {
    colors: true,
  },
}
