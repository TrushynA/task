var express = require("express");
var cors = require("cors");
var app = express();
const http = require('http');
const port = 8080;
const ip = '172.16.0.160';

var request = [];
app.use(cors());
app.get("/", function(req, res) {
  res.header("Access-Control-Allow-Origin", "http://172.16.0.160:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "localhost",
    user: "testu",
    password: "BorisSerenkov41&",
    database: "test"
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT test3.Name, test3.Connection_string, test3.Db_ip, test3.Db_name, test3.Server_ip, test33.Port_cs, test33.Port_db, test33.Name_lat FROM test3 LEFT JOIN test33 ON test3.Db_ip = test33.Db_ip", function(err, result, fields) {
      if (err) throw err;
      //   console.log(result);
      request = result;
      console.log(request);
    });
  });
  res.json(request);
});

app.listen(port,ip, () => console.log(`Listening on port ${port}`));
