const express = require('express');
var fs = require('fs');
var https = require('https');
const path = require('path');
const compression = require('compression');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.dev.js');
const webpack = require('webpack');

const port = 3000;
const app = express();

app.use(compression());

app.use(express.static(path.resolve(__dirname + '/../dist')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});


new WebpackDevServer(webpack(config), {
  contentBase: __dirname +'/../dist',
  hot: true,
  historyApiFallback: true,
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:' + port);
});
