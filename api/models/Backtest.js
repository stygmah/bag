/**
 * Backtest.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const Schema = require('mongoose').Schema;

var Backtest = new Schema({
  ticker: {type:String, required:true},
  nombre: String,
  isin: String,
  year: Number,
  pais: String,
  margenBeneficios: Number,
  margenBeneficioMinus1: Number,
  momentum: Number,
  momentum: Number,
  totalAssets: Number,
  valentum: Number,
  valqual: Number,
  value: Number,
  volatilidad260: Number
},{
  collection: 'backtest'
});

module.exports = Backtest;

