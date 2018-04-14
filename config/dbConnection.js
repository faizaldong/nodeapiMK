var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "faizaL6335",
  database: "majlis_kuliah"
});

module.exports=connection;