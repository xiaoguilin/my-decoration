var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/help', function(request, response) {
  response.render('pages/help')
});

app.get('/notice', function(request, response) {
  response.render('pages/notice')
});

app.get('/item_detail', function(request, response) {
  response.render('pages/item_detail')
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


