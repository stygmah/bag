/**
 * Backtest.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
const Schema = require('mongoose').Schema;

var Backtest = new Schema({
  Ticker: {type:String},
  Nombre: Schema.Types.Mixed,
  Isin: Schema.Types.Mixed,
  Year: Schema.Types.Mixed,
  Pais: Schema.Types.Mixed,
  MargenBeneficios: Schema.Types.Mixed,
  MargenBeneficioMinus1: Schema.Types.Mixed,
  ['P MOMENTUM']: Schema.Types.Mixed,
  TotalAssets: Schema.Types.Mixed,
  VALENTUM: Schema.Types.Mixed,
  VALQUAL: Schema.Types.Mixed,
  VALUE: Schema.Types.Mixed,
  Volatilidad260: Schema.Types.Mixed
},{
  collection: 'backtest'
});

module.exports = Backtest;

