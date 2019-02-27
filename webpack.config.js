//ssr start
// const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
// const path = require('path');
//
// module.exports = {
//   entry: './server/index.js',
//   output: {
//     path: path.resolve(__dirname, 'server'),
//     filename: 'ssrIndex.js',
//     publicPath: '/'
//   },
//   target: 'node',
//   externals: nodeExternals(),
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: `'production'`
//       }
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       }
//     ]
//   }
// };
//ssr end

//non-ssr
module.exports = {
  entry: __dirname + '/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/temp'
  }
};
