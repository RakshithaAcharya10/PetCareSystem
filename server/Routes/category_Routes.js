const express = require('express');
//express → a Node.js framework used to build web servers and APIs.
const {addcategory,getcategory, deletecategory, updatecategory, Getcategorybyid} = require('../Controller/categoy_controller');

const route = express.Router();

route.post('/addcategory',addcategory)
route.get('/getcategory',getcategory)
route.delete('/deletecategory/:id',deletecategory)  
route.put('/updatecategory/:id',updatecategory)  
route.get('/Getcategorybyid/:id',Getcategorybyid)  


module.exports = route