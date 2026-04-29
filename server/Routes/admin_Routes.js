const express=require("express")
const {registeradmin,loginadmin}=require('../Controller/admin_controller')

const route=express.Router()

route.post("/registeradmin",registeradmin)
route.post("/loginadmin",loginadmin)

module.exports=route