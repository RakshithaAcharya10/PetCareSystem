const express = require('express')
const { registeruser, Login, getuser, deleteuser, getProfile, updateprofile, updateuser, getuserbyid } = require('../Controller/user_controller')
const auth= require("../Middleware/Auth")
const route = express.Router();

route.post('/registeruser', registeruser)
route.post('/Login', Login)
route.get('/getuser', getuser)
route.get('/getuserbyid/:id', getuserbyid)
route.delete('/deleteuser/:id', deleteuser)
route.put('/updateuser/:id', updateuser)
route.get('/getProfile', auth, getProfile)
route.put('/updateprofile', auth, updateprofile)

module.exports = route