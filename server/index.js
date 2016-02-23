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
app.use('/api/v1', require('./api')(wagner));

app.listen(3000);
console.log('Listening on port 3000!');
