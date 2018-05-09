/**
 * UploadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const db = require('../services/DbService');
const backtestSchema = require('../models/Backtest');
const convert = require('excel-as-json').processFile;


const options = {

}


module.exports = {
    upload: (req,res)=>{
      req.file('file').upload(function (err, uploadedFiles) {
        convert(uploadedFiles[0].fd, null, options,function(erro, output) {
          var Backtest = db.model('Backtest',backtestSchema);
            Backtest.insertMany(output,null,(error,doc)=>{
              if(error){
                res.send(err);
              }else{
                res.send();
              }
            });
        });
      });
    }
};

