const categorytable = require("../Models/Category_model")
//require() is node.js function to import the file/module
const addcategory = async (req, res) => {
    try {
        const { category_name, category_description } = req.body; //destructuring
        const categorydetails = new categorytable({
            category_name,
            category_description
        })
        await categorydetails.save(); //save() mongoose function that stores the document in MongoDB
        res.status(201).json({ message: "category added successfully", cdata: categorydetails })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })

    }
}

const getcategory = async (req, res) => {
    try {
        const getallcategory = await categorytable.find()
        console.log(getallcategory)
        res.status(200).json({ message: "category fetched", allcategory: getallcategory })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })

    }
}

const deletecategory = async (req, res) => {
    try {
        const did = req.params.id
        const deletecategory = await categorytable.findByIdAndDelete(did)
        console.log(deletecategory)
        res.status(200).json({ message: "Category deleted", duser: deletecategory })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }

}

const updatecategory = async (req, res) => {
    try {
        // const uid = req.params.id
        const { id } = req.params
        const body = req.body
        const updatecategory = await categorytable.findByIdAndUpdate(id, body, { new: true })
        console.log(updatecategory)
        res.status(201).json({ message: "Category updated", updatedata: updatecategory })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}


const Getcategorybyid = async (req, res) => {
    try {
        const cid = req.params.id
        console.log(cid)
        const singlecategory = await categorytable.findById(cid)
        console.log(singlecategory)
        res.status(200).json({ message: "Category found", cdata: singlecategory })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}

module.exports = { addcategory, getcategory, deletecategory, updatecategory, Getcategorybyid }