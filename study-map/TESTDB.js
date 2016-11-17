var config = require('./config.secret.json');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var url = config.DBURL;

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  newStudySpot = {
	outlets: 3,
	space: 'good',
	noise: 'low',
	crowdedness: 'not very',
	building: 'MAP',
	rating: null,
	reviews: null,
	description: 'Quiet area in NW corner of 5th floor',
	indoors: 1,
	nearCoffee: 1,
	name: 'Good Spot'
    }

db.studySpots.insert( newStudySpot);

  db.close();
});

