var orm = require ("../config/orm.js");

var burger = {
  read: function(cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  create: function (val, cb) {
    orm.insertOne("burgers", "burger_name", val, function (res) {
      cb(res);
    })
  }, 
  update: function (col, condition, cb) {
    orm.updateOne("burgers", col, condition, function (res) {
      cb(res);
    })
  }
};

module.exports = burger;