const servicetable = require("../Models/Service_model")
//require() is node.js function to import the file/module
const addservice = async (req, res) => {
    try {
        const { service_name, service_price, service_description, categoryId } = req.body; //destructuring
        const simage = req.file ? req.file.filename:null

        const servicedetails = new servicetable({
            service_name,
            service_price,
            service_description,
            categoryId,
            service_image:simage
        })
        await servicedetails.save(); //save() mongoose function that stores the document in MongoDB
        res.status(201).json({ message: "service added successfully", sdata: servicedetails })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })

    }
}

const getservice = async (req, res) => {
    try {
        const getallservice = await servicetable.find()
        console.log(getallservice)
        res.status(200).json({ message: "service fetched", allservices: getallservice })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })

    }
}


const getservicebyid = async(req, res)=>{
    try {
        const sid = req.params.id
        const servicebyid = await servicetable.findById(sid)
        console.log(servicebyid)
        res.status(200).json({message:"Service found",byid:servicebyid})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error",error})
    }
}


const deleteservice = async (req, res) => {
    try {
        const did = req.params.id
        const deleteservice = await servicetable.findByIdAndDelete(did)
        console.log(deleteservice)
        res.status(200).json({ message: "Service deleted", dservice: deleteservice })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }

}

const updateservice = async (req, res) => {
    try {
        const { service_name, service_price, service_description, categoryId } = req.body; //destructuring
        const simage = req.file ? req.file.filename:null

        const servicedetails = {
            service_name,
            service_price,
            service_description,
            categoryId,
            service_image:simage
        };

        const updateservice = await servicetable.findByIdAndUpdate(req.params.id, servicedetails, { new: true });
        // console.log(updateservice)
        res.status(201).json({success:true,  message: "Service updated", updatedata: updateservice })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}


module.exports = { addservice, getservice, deleteservice, updateservice, getservicebyid }