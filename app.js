var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());


Genre = require('./model/genres');
Book = require('./model/books');

//Connect to Mongoose

var db = mongoose.connect('mongodb://localhost/bookstore', {
    useMongoClient: true
    /* other options */
});

/// DEFAULT GET HERE ///
app.get('/', function (req, res) {
    res.send('Please use /api/books or /api/genres');

});

/// GET GENRES HERE ///
app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if(err) {
            throw err;
        }
        res.json(genres);

    });

});

/// POST GENRES HERE ///
app.post('/api/genres', function (req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genre) {
        if(err) {
            throw err;
        }
        res.json(genre);
    });

});

/// PUT GENRES HERE ///
app.put('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if(err) {
            throw err;
        }
        res.json(genre);
    });

});

/// DELETE GENRES HERE ///
app.delete('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    // On s'en fiche de déclarer : var genre = req.body; car on n'ajoute aucune donnée.
    Genre.deleteGenre(id, function (err, genre) {
        if(err) {
            throw err;
        }
        res.json(genre);
    });

});

/// GET BOOKS HERE ///

app.get('/api/books', function (req, res) {
    Book.getBooks(function (err, books) {
        if(err) {
            throw err;
        }
        res.json(books);

    });

});

app.get('/api/books/:_id', function (req, res) {
    Book.getBookById(req.params._id,function (err, book) {
        if(err) {
            throw err;
        }
        res.json(book);

    });

});

/// POST BOOK HERE ///

app.post('/api/books', function (req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if(err) {
            throw err;
        }
        res.json(book);
    });

});

/// PUT BOOKS HERE ///
app.put('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, function (err, book) {
        if(err) {
            throw err;
        }
        res.json(book);
    });

});

/// DELETE BOOK HERE ///
app.delete('/api/books/:_id', function (req, res) {
    var id = req.params._id;

    Book.deleteBook(id, function (err, book) {
        if(err) {
            throw err;
        }
        res.json(book);
    });

});



app.listen(3000);
console.log('Running on port 3000...');