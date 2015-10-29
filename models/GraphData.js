var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  id: String,
  threesMade: String,
  threesPercentage: String,
  threesAttempted: String
}, 
{
  collection: 'graph-data-collection'
});

mongoose.model('GraphData', GraphDataSchema);