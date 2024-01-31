const router =require("./routes/task.cjs")
const bodybodyParser =require("body-parser")
 const express = require('express');
 const mongoose = require('mongoose');
//  const schama =require('./schama/user.cjs')

 

 const app = express('')
 app.use(bodybodyParser.json())
   
  const url ='mongodb+srv://ibrahim:24685@ibrahimm2.da8eyon.mongodb.net/?retryWrites=true&w=majority'
   
  const connectdb = async () =>{
try{
    mongoose.set('strictQuery',false)
    mongoose.connect(url)
    console.log('connected too don')
}catch(err){
    console.log('connected too err')
    process.exit()

}
  }
  connectdb()

 app.use('/',router)

  app.listen(8000)