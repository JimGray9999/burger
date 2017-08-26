var mysql = require('mysql');
var connection;

// connect to the JawsDB if running in this environment
// else connect to the localhost MySQL db
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
};

connection.connect();
module.exports = connection;