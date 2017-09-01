var orm = require ("../config/orm.js");

var burger = {
  read: function(cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (cb) {
    orm.insertOne("burgers", col, vals, function (res) {
      cb(res);
    })
  }, 
  update: function (cb) {
    orm.updateOne("burgers", "burger_name", function (res) {
      cb(res);
    })
  }, 
  delete: function (cb) {

  }
};