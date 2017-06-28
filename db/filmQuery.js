var MongoClient = require("mongodb").MongoClient;
var FilmQuery = function() {
  this.url = "mongodb://localhost:27017/ratings_site";
}

FilmQuery.prototype = {
  all: function( onQueryFinished ) {
    MongoClient.connect( this.url, function(err, db) {
      if ( err ) return;
      var collection = db.collection( "films");
      collection.find().toArray(function( err, docs) {
        if ( err ) return;
        onQueryFinished( docs );
      });
    })
  }
}

module.exports = FilmQuery;