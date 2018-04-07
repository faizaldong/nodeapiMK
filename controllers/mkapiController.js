var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "faizaL6275",
  database: "majlis_kuliah"
});

exports.list_all_tasks = function(req, res) {
  // con.connect(function(err) {
    // if (err) throw err;
    console.log("Connected!");

    con.query("select * from ajk", function (err, result) {
      if (err) throw err;
      console.log(result[1]);
      res.json(result)
    });

  // });
};