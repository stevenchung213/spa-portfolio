const webpack = require('webpack'),
  CompressionPlugin = require('compression-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  WorkboxPlugin = require('workbox-webpack-plugin'),
  ImageminPlugin = require("imagemin-webpack"),
  imageminGifsicle = require("imagemin-gifsicle"),
  imageminJpegtran = require("imagemin-jpegtran"),
  imageminOptipng = require("imagemin-optipng"),
  imageminSvgo = require("imagemin-svgo"),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  CssNano = require('cssnano');

module.exports = env => {

  console.log(env, '**** PRODUCTION BUILD STARTING ****');

  return {
    mode: 'development',
    entry: __dirname + '/src/index.jsx',
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessor: CssNano,
          cssProcessorOptions: {
            discardComments: {
              removeAll: true
            },
            safe: true
          },
          canPrint: false
        })
      ],
    },
    plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
      new ImageminPlugin({
        bail: false,
        cache: true,
        imageminOptions: {
          plugins: [
            imageminGifsicle({
              interlaced: true
            }),
            imageminJpegtran({
              progressive: true
            }),
            imageminOptipng({
              optimizationLevel: 5
            }),
            imageminSvgo({
              removeViewBox: true
            })
          ]
        }
      }),
      new MiniCssExtractPlugin({
        filename: "styles.css"
      }),
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 8192,
        minRatio: 0.8
      }),
      new WorkboxPlugin.GenerateSW({
        swDest: __dirname + '/dist/service-worker.js',
        clientsClaim: true,
        skipWaiting: true,
        include: [/\.html$/, /\.js$/, /\.css$/],
        precacheManifestFilename: '/assets/sc-manifest.[manifestHash].js',
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: new RegExp('/'),
            handler: 'StaleWhileRevalidate'
          },
        ]
      })
    ],
    module: {
      rules: [
        {
          test: [/\.jsx$/, /\.js$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '/fonts/[name].[ext]'
            }
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '/img/[name].[ext]'
            }
          }
        },
        {
          test: /\.bundle\.js$/,
          use: {
            loader: 'bundle-loader',
            options: {
              name: 'sc'
            }
          }
        },
        // {
        //   test: /(\.woff|\.woff2)$/,
        //   loader: 'url?name=font/[name].[ext]&limit=10240&mimetype=application/font-woff'
        // },
        // {
        //   test: /\.ttf$/,
        //   loader: 'ignore-loader'
        // },
        // {
        //   test: /\.eot$/,
        //   loader: 'ignore-loader'
        // }
      ]
    },
    output: {
      filename: '[name]_bundle.js',
      chunkFilename: '[id]_bundle.js',
      path: __dirname + '/dist'
    }
  }
};
