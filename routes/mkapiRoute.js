var express = require('express');
var router = express.Router();
var ajk_c = require('../controllers/ajkController');


// /\/\/\/\/\/\/\/\/\/\/\/\ AJK /\/\/\/\/\/\/\/\/\/\/\/\
router.get('/admin/api/ajk', function(req, res, next) { ajk_c.Listing(req, res); });

module.exports = router;
