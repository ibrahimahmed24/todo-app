const rout =require('../routes/task.cjs')

const user =require('../model/user.cjs')



exports.gttodo = async function (req,res) {
  try{
    const book =await  Bookmodel.find()
    return res.json({massge:'Done' , data:book})

  } catch(err){
    return res.status(403).json({maseege:'err'})
  } 
}

exports.addtodo =async function(req,res){
    try{
        const user= new user.create(req.body)
        await user.save()
        return res.status(200).json({maseege:'don',user})
    } catch(err){
        return res.status(400).json({maseege:'erradd'})

    } 
}
exports.putdotto = async function(req,res){
    try{
    const {id} =req.params
    const datatoupdate=req.body
    const task =await task.findByAndUpdate(id,datatoupdate,{new:true})
    return res.status(200).josn({maseege:updatedon})
    } catch(err){
        return res.status(400).json({maseege:'err'})

    } 
}
exports.deletedoto =async function(req,res){
    try{
        const {id} =req.params
        const task =await task.findByAnddelete(id)
        return res.status(200).josn({maseege:'deleteed'})

    } catch(err) {
        return res.status(400).json({maseege:'err'})

    } 
}