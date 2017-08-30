// MySQL connection req
var connection = require('./connection');

// orm object of functions
var orm = {
  selectAll: function(table, cb){
    var query = "SELECT * FROM " + table + ";";
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  insertOne: function(table, val, cb){ 
    var query = "INSERT INTO " + table;

    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },
  updateOne: function(table, col, val, cb){ 
    var query = "INSERT INTO " + table;
    
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

// Export the ORM object for the burger.js model 
module.exports = orm;