const mongoose= require('mongoose');

const ImageSchema = new mongoose.Schema({
    fileName:String,
    path:String
})


const Image= mongoose.model("Image",ImageSchema)
module.exports=Image