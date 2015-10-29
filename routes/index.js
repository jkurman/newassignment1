var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var graph=mongoose.model('GraphData');

router.get('/', function(req, res, next) {
  graph.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});

module.exports = router;
