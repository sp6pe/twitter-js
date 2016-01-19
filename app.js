var express = require( 'express' );
var app = express(); // creates an instance of an express application


app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(req.method, req.url, res.statusCode);
    next();
});

app.use('/special/:name',function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log("Special area reached by " + req.params.name);
    next();
});

app.get('/', function(req, res){
  res.send('hello world');
});



app.listen(3000, function(){
	console.log("example app listening on port 3000!")
});