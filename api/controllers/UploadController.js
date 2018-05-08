/**
 * UploadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var multer = require('multer');
var storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname.replace(path.extname(file.originalname), "") + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage }).single('file');

module.exports = {
    upload: (req,res)=>{
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
                 res.send();
            }
             res.json({error_code:0,err_desc:null});
             res.send();
        });
    }
};

