const Router = require('express');
const contaenr = require('../contenar/conten.cjs');
const uosr =require("../model/user.cjs")
const route = Router.Router()


route.get("/api/task",contaenr.gttodo)
route.post("/api/task/:id",contaenr.addtodo)
route.put("/api/task/:id",contaenr.putdotto)
route.delete("/api/task/:id",contaenr.deletedoto)




module.exports= route