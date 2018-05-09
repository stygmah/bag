const mongoose = require('mongoose');

var conection = sails.config.datastores.default;
var route;

if(sails.config.datastores.default.password && sails.config.datastores.default.username){
  route = `mongodb://${sails.config.datastores.default.username}:${sails.config.datastores.default.password}@${sails.config.datastores.default.url}:${sails.config.datastores.default.port}/${sails.config.datastores.default.database}`;
}else{
  route = `mongodb://${sails.config.datastores.default.url}:${sails.config.datastores.default.port}/${sails.config.datastores.default.database}`;
}

var db = mongoose.createConnection(route);

module.exports = db;
