var orm = require("../config/orm.js");

var burger = {
  read: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cb) {

  }, 
  update: function(cb) {

  },
  delete: function(cb) {

  }
};