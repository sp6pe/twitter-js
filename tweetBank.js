var _ = require('lodash');

var data = [ { name: 'Dave Docsreader',
    text: 'Fullstack Academy is amazing! The instructors are just so sweet. #fullstacklove #codedreams' },
  { name: 'Ayana McQueue',
    text: 'Fullstack Academy is breathtaking! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'Charlotte Ecma',
    text: 'Fullstack Academy is amazing! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'Dave Binder',
    text: 'Fullstack Academy is wonderful! The instructors are just so sweet. #fullstacklove #codedreams' },
  { name: 'Charlotte Hashington',
    text: 'Fullstack Academy is amazing! The instructors are just so funny. #fullstacklove #codedreams' },
  { name: 'Dave Docsreader',
    text: 'Fullstack Academy is awesome! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'Charlotte Ecma',
    text: 'Fullstack Academy is wonderful! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Nimit OLogn',
    text: 'Fullstack Academy is breathtaking! The instructors are just so breathtaking. #fullstacklove #codedreams' },
  { name: 'Charlotte Ecma',
    text: 'Fullstack Academy is wonderful! The instructors are just so mindblowing. #fullstacklove #codedreams' },
  { name: 'Shanna Binder',
    text: 'Fullstack Academy is awesome! The instructors are just so breathtaking. #fullstacklove #codedreams' },
  ]

function add (name, text) {
    data.push({name: name, text: text});
}

function list () {
    return _.cloneDeep(data);
}

function find (properties) {
    return _.filter(data, properties);
}

module.exports = {add : add, list: list, find: find};



var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}




