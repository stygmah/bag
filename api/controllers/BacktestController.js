/**
 * BacktestController
 *
 * @description :: Server-side logic for managing backtests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const db = require('../services/DbService');
const backtestSchema = require('../models/Backtest');

module.exports = {
  addMany: (req,res)=>{

    var Backtest = db.model('Backtest',backtestSchema);
    Backtest.create().exec((err,doc)=>{
      res.send(doc);
    })
  },
  getMany: (req,res)=>{
    var Backtest = db.model('Backtest',backtestSchema);
    Backtest.find({}).exec((err,doc)=>{
      res.send(doc);
    })
  }
};

