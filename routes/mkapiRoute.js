var express = require('express');
var router = express.Router();
var todoList = require('../controllers/mkapiController');

// GET users listing. 
router.get('/tasks', function(req, res, next) {
  todoList.list_all_tasks(req, res)
});

module.exports = router;
