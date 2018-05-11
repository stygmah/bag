/**
 * StockSymbolController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const db = require('../services/DbService');
const stockSymbolSchema = require('../models/StockSymbol');


module.exports = {
  create: (req,res)=>{
    var collection = require('../services/tickers');
    var StockSymbol = db.model('StockSymbol',stockSymbolSchema);
    StockSymbol.insertMany(collection,null,(error,doc)=>{
        if(error){
          res.send(err);
        }else{
          res.send();
        }
      });
  },
  getSymbols: (req,res)=>{

  }
};

var buildJson = (json)=>{
    var one = [];
    var two = [];
    json.forEach((element) => {
        console.log(element);
    });
}