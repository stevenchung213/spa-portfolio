const webpack = require('webpack'),
  CompressionPlugin = require('compression-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = env => {

  console.log(env, '**** PRODUCTION BUILD STARTING ****');

  return {
    mode: 'development',
    entry: __dirname + '/src/index.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$/, /\.js$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        })
      ],
      namedModules: false,
      namedChunks: false,
      nodeEnv: 'production',
      removeEmptyChunks: true,
      flagIncludedChunks: true,
      occurrenceOrder: true,
      sideEffects: true,
      usedExports: true,
      concatenateModules: true,
      noEmitOnErrors: true,
      checkWasmTypes: true,
      minimize: true,
    },
    plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new WorkboxPlugin.GenerateSW({
        swDest: __dirname + '/dist/service-worker.js',
        clientsClaim: true,
        skipWaiting: true,
        include: [/\.html$/, /\.js$/, /\.css$/],
        precacheManifestFilename: 'sc-manifest.[manifestHash].js',
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: new RegExp('/'),
            handler: 'StaleWhileRevalidate'
          },
        ]
      })
    ],
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    }
  }
};
