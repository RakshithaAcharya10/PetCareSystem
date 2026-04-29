const usertable = require("../Models/User_model")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "service-crud"

const registeruser = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        const useremail = await usertable.findOne({ email })
        if (useremail) {
            res.json({ message: "Email already exists" })
        }
        const userdetails = new usertable({
            name,
            email,
            password,
            phone,
            address
        })
        await userdetails.save();
        res.status(201).json({ message: "User added successfully", udata: userdetails })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}

const getuser = async (req, res) => {
    try {
        const getallusers = await usertable.find()
        console.log(getallusers)
        res.status(200).json({ message: "User fetched", allusers: getallusers })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}
const getuserbyid = async (req, res) => {
    try {
        const uid = req.params.id
        const userbyid = await usertable.findById(uid)
        console.log(userbyid)
        res.status(200).json({ message: "User found", byid: userbyid })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}

const deleteuser = async (req, res) => {
    try {
        const did = req.params.id
        const deleteuser = await usertable.findByIdAndDelete(did)
        console.log(deleteuser)
        res.status(200).json({ message: "User deleted", duser: deleteuser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}


const updateuser = async (req, res) => {
    try {
        // const uid = req.params.id
        const { id } = req.params
        const body = req.body
        const updateuser = await usertable.findByIdAndUpdate(id, body, { new: true })
        console.log(updateuser)
        res.status(201).json({ message: "User updated", updatedata: updateuser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}



const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userlogin = await usertable.findOne({ email, password })
        if (!userlogin) {
            res.json({ success: false, message: "Invalid details" })
        }
        else {
            const token = await jwt.sign({id:userlogin._id}, SECRET_KEY)
            res.json({ success: true, message: "Login successfull!!!", token })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}

const getProfile = async (req, res) => {
    try {
        const user = await usertable.findById(req.userid)
        res.json({success:true, udata:user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
}

const updateprofile = async(req, res)=>{
    try {
        const updateduser = await usertable.findByIdAndUpdate(req.userid, req.body, {new:true})
        res.json({message:"Profile Updated", success:true, udetails:updateduser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
}


module.exports = { registeruser, Login, getuser, deleteuser, getProfile, updateprofile, getuserbyid, updateuser }