var express = require('express');
var app = express();
var db = require('./db');

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// //handle 404
// app.use(function(request, response, next) {
//   response.status(404).send('Sorry cant find that page!');
// });
// //handle error
// app.use(function(err, request, response, next) {
//   console.error(err.stack);
//   response.status(500).send('Something broke!');
// });

app.get('/', function(request, response) {
  response.render('pages/index', {categories: db.categories});
  //response.render('pages/index', {categories: my_categories});
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

app.post('/', function(request, response)  {
  response.send('Got a POST request');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
/*
var my_categories = [
	{
		"name": "keychain", 
		"name_cn": "钥匙扣",  
		"product_id": "10000",
		"title": "Delicate keychain",
		"title_cn": "小巧的钥匙扣，装饰您的生活",
		"description": "Decorate your life, <br>Happy Mood starts here!",
		"description_cn": "一个小巧的钥匙扣，几个漂亮有型的小物件，<br>每天愉快的心情由此开启。",
		"items": [
			{
				"item_name": "Santa Claus",  
				"item_name_cn": "圣诞老人", 
				"item_id": "10001", 
				"item_description": "The feeling of the festival",
				"item_description_cn": "圣诞老人每天带来节日感觉，开启好运吧",
				"image_file": "20141020161343500.jpg"
			},
			{
				"item_name": "clownman",  
				"item_name_cn": "小丑人", 
				"item_id": "10002", 
				"item_description": "Happyness everyday!",
				"item_description_cn": "我很丑，可是我每天给大家带来快乐",
				"image_file": "20141020161344593.jpg"
			}
			]
	},
	{
		"name": "earring", 
		"name_cn": "耳环",  
		"product_id": "20000",
		"title": "Tiny earring",
		"title_cn": "小巧的钥匙扣，装饰您的生活",
		"description": "That's what you want!",
		"description_cn": "这就是你钟爱的耳环！",
		"items": [
			{
				"item_name": "AAA",  
				"item_name_cn": "AAA", 
				"item_id": "20001", 
				"item_description": "The feeling of the festival",
				"item_description_cn": "圣诞老人每天带来节日感觉，开启好运吧",
				"image_file": "20141020161316515.jpg"
			},
			{
				"item_name": "BBB",  
				"item_name_cn": "BBB", 
				"item_id": "20002", 
				"item_description": "Happyness everyday!",
				"item_description_cn": "我很丑，可是我每天给大家带来快乐",
				"image_file": "20141020161316781.jpg"
			}
			]
	}
	];

*/