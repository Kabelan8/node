var mongoose=require("mongoose");
var Schema=mongoose.Schema

var kabe= new Schema({
    user_name:String,
    user_id:Number,
    dept:String,
    phone_no:String
})
module.exports=mongoose.model("Kabe",kabe)
