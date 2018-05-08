/**
 * UploadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    upload: (req,res)=>{
      req.file('file').upload(function (err, uploadedFiles) {
        res.send();
      });
    }
};

