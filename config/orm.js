// MySQL connection req
var connection = require('./connection');

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// orm object of functions
var orm = {
  selectAll: function(table, cb){
    var query = "SELECT * FROM " + table + ";";
    connection.query(query, function(err, result) {
      if (err) {throw err }
      cb(result);
    });
  },
  insertOne: function(table, col, val, cb){ 
    var query = "INSERT INTO " + table;
    query += " (";
    query += col.toString();
    query += ", devoured) VALUES (?, false)";

    connection.query(query, val, function(err, result) {
      if (err) { throw err };
      cb(result);
    })
  },
  updateOne: function(table, col, condition, cb) { 
    console.log(col);
    
    var query = "UPDATE " + table;

    query += " SET " + objToSql(col);
    query += " WHERE ";
    query += condition;
    
    console.log(query);
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

// Export the ORM object for the burger.js model 
module.exports = orm;