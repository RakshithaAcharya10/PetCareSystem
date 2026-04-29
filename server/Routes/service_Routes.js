const express = require('express');
const { addservice, getservice, deleteservice, updateservice, getservicebyid } = require('../Controller/service_controller');

const route = express.Router();

const upload = require('../Middleware/imageUpload')

route.post('/addservice',upload.single('service_image'), addservice)
route.get('/getservice',getservice)
route.get('/getservicebyid/:id',getservicebyid)  
route.delete('/deleteservice/:id',deleteservice)  
route.put('/updateservice/:id',upload.single('service_image'), updateservice)  


module.exports = route