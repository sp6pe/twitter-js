
var express = require('express');
var router = express.Router();
var tweetBank = require("../tweetBank")



router.get('/', function(req,res){
    var tweets = tweetBank.list();
    res.render('index',{ title: 'Twitter.js', tweets: tweets } )
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});



// router.get('/stylesheets/style.css',function(req,res){
//     res.sendfile('./public/stylesheets/style.css');
// });

router.use(express.static('public'));




// app.use(function (req, res, next) {
//     // do your logging here
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//     console.log(req.method, req.url, res.statusCode);
//     next();
// });

// app.use('/special',function (req, res, next) {
//     // do your logging here
//     // call `next`, or else your app will be a black hole — receiving requests but never properly responding
//     console.log("Special area reached by: " + req.params.name);
//     next();
// });

// app.get('/test/:name/:person1/:person2/:person3', function(req, res){
//     var people = [{name: req.params.person1}, {name: req.params.person2}, {name: req.params.person3}];
//     res.render( 'index', {title: req.params.name, people: people} );
// });





module.exports = router;