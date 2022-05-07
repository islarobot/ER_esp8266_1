var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('value: ' + req.query.id);
});

app.listen(8000);
