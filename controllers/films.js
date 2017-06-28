var express = require('express');
var app = express();
var filmRouter = express.Router();
//models

var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var FilmQuery = require( "../db/filmQuery.js" );
var query = new FilmQuery();


//film index
filmRouter.get('/', function(req, res) {
  query.all( function( docs ) {
    res.json( docs )
  })
});

//film by id
filmRouter.get('/:id', function(req, res){
  res.json(films[req.params.id]);
});

//film update
filmRouter.put('/:id', function(req, res) {
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films[req.params.id] = film;
  res.json({data: films});
});

//add new film
filmRouter.post('/', function(req, res) {
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors 
  });
  films.push(film);
  res.json({data: films});
});

//delete film
filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({data: films});
});

filmRouter.post('/:id/reviews', function(req, res) {
  var film = new films[req.params.id];
  var review1 = new Review({
    comment: "Worst. Film. Ever.",
    rating: 0,
    author: "Ally"
  });
  film.addReview(review1);
  res.json({data: films});
});

module.exports = filmRouter;