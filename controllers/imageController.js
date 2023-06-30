const Image = require('../model/imageModel')

const imageController= {}

imageController.renderUploadForm = (req,res)=>{
    res.render('uploadForm')
}

imageController.UploadImage=  async (req,res)=>{
    const image = new Image({
       fileName:req.fileName,
       path:req.path
    })
    await image.save();
    res.redirect('/');
}
module.exports=imageController