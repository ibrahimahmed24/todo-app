const mongoose = require('mongoose');

const Schema  = mongoose.Schema

const usreSchema = new Schema({
  title:{type:String},
  description:{type:String},

  compieted:{type:Boolean,default:false}
})
module.exports=mongoose.model('Scama',usreSchema)
