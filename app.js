var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Mongoose

var db = mongoose.connect('mongodb://localhost/bookstore', {
    useMongoClient: true
    /* other options */
});

app.get('/', function (req, res) {
    res.send('Please use /api/books or /api/genres');

});

app.get('/api/genres', function (req, res) {
    res.send('Please use /api/books or /api/genres');

});

app.listen(3000);
console.log('Running on port 3000...');