var env=require('./environments/env'); //reference of dbConnection.js

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: env.host,
  user: env.user,
  password: env.password,
  database: env.database
});

module.exports=connection;