var ajk_m = require('../models/ajkModel');

exports.Listing = function(req, res) {
  ajk_m.GET(function(err, dataJson){
    res.json(dataJson)
  })
};