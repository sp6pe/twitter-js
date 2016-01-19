var express = require( 'express' );
var app = express(); // creates an instance of an express application
var swig = require('swig');
var routes = require('./routes/');
var path = require('path');


app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

app.use('/', routes);

// app.use(express.static('public'));

app.listen(3000, function(){
    console.log("example app listening on port 3000!")
});





// swig.renderFile(__dirname + '/views/index.html', {
//     title: 'Twitter Clone',
//     people: [{name: 'Cody'},{name: 'Jai'}, {name: 'Gabe'}]
// }, function (err, output) {
//     console.log(output);

