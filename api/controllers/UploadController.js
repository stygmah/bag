/**
 * UploadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
convert = require('excel-as-json').processFile;

const options = {

}


module.exports = {
    upload: (req,res)=>{
      req.file('file').upload(function (err, uploadedFiles) {
        convert(uploadedFiles[0].fd, null, options,function(err, output) {
          console.log('succes');
          res.send();
        });
      });
    }
};



