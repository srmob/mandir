var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);

var app = express();
app.use(function(req, res, next) {
  if (req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }
  next();
});
app.use(express.static('src/views'));
app.use(express.static('public'));
app.use('/api/v1', require('./api')(wagner));

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port 3000..!');
