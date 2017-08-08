var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.set("title","My First App");
app.get('/', function (req, res,next) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
	console.log(req.originalUrl); 
	console.log(req.path); 
	console.log(app.get('title'));
	next();
	},function(req,res){
		console.log("Second Function");
	});
app.param('value', function (req, res,next, value) {
  console.log('CALLED ONLY ONCE with', value);
next();
});

app.get('/:articleName', function (req, res) {
	var articleName = req.params.articleName;
	res.send(template(jsonValue[articleName]));

});
var jsonValue = {
	'firstBlog' :{
			title: 'IoT',
			Date : '2017-05-15',
			body : `<h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>`
},
'secondBlog' :{
			title: 'IoT',
			Date : '2017-05-15',
			body : `<h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>`
}
};
function template(data){
	var title=data.title;
	var date = data.Date	;
	var body= data.body;
	var htmlCode =`<!DOCTYPE html>
<html>
<head>
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<script type="text/javascript" src="/ui/main.js">alert('Welcome to Javascript');</script>
</head>
<body>
<h1>${date}</h1>
<div id='cont'>${body}</div>
</body>
</html>
`
return htmlCode;
}
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
 console.log(`IMAD course app listening on port ${port}!`);
});
