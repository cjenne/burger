// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWS_URL) {
  connection = mysql.createConnection(process.env.JAWS_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Monk3yH8sPa$$word$",
  database: "burger_db"
  })
}

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Monk3yH8sPa$$word$",
//   database: "burger_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;
