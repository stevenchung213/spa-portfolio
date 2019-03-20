const express = require('express');
var fs = require('fs');
var https = require('https');
const path = require('path');
const compression = require('compression');

const port = 10000;
const app = express();

app.use(compression());

// app.get('*.js', (req, res, next) => {
//   console.log(req.url);
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });

app.use(express.static(path.resolve(__dirname + '/../dist')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
