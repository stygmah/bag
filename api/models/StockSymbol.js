/**
 * StockSymbol.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const Schema = require('mongoose').Schema;

var StockSymbol = new Schema({
  ticker: {type:String, required:true},
  description: Schema.Types.Mixed
},{
  collection: 'stockSymbol'
});

module.exports = StockSymbol;

