var express = require('express');
var app = express();
var port = 8080;

var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var router = require('./app/routes');
app.use('/', router);

// static files
app.use(express.static(__dirname + '/public'));

// start server
app.listen(port, function() {
  console.log('app started')
});
