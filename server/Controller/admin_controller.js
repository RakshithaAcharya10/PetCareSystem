const admintable=require("../Models/Admin_model")
const jwt=require('jsonwebtoken')
const SECRET_KEY="admin-secret"

  const registeradmin=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const admindetail=new admintable({
            email,
            password
        }) 
        await admindetail.save();
        
        res.status(201).json({message:"Admin added successfully",udata:admindetail})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}
const loginadmin=async(req,res)=>{
    try {
        const {email,password}=req.body
        const userlogin=await admintable.findOne({
            email,
            password
        })
        if(!userlogin){
            res.json({
                success:false,
                message:"Invalid admin details"
            })
        }
        else{
            const token=await jwt.sign(userlogin.id,SECRET_KEY)
            res.json({success:true, message:"Login Successful",token}
            )
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}
module.exports={registeradmin,loginadmin}