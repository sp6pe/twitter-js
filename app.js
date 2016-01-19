var express = require( 'express' );
var app = express(); // creates an instance of an express application
var swig = require('swig');


app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});



app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(req.method, req.url, res.statusCode);
    next();
});

app.use('/special',function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log("Special area reached by: " + req.params.name);
    next();
});

app.get('/test/:name/:person1/:person2/:person3', function(req, res){
    var people = [{name: req.params.person1}, {name: req.params.person2}, {name: req.params.person3}];
    res.render( 'index', {title: req.params.name, people: people} );
});



app.listen(3000, function(){
    console.log("example app listening on port 3000!")
});


// swig.renderFile(__dirname + '/views/index.html', {
//     title: 'Twitter Clone',
//     people: [{name: 'Cody'},{name: 'Jai'}, {name: 'Gabe'}]
// }, function (err, output) {
//     console.log(output);

