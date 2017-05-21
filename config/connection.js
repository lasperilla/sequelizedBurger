// Set up MySQL connection.
const mysql = require("mysql");
const path = require("path");
// const pass = require("./pw.js")
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  const pass = require(path.join(__dirname, "pw.js"))
  connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: pass.pass,
    database: "burgers_db"
  });
  // console.log('didnt connect to jaws')
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
