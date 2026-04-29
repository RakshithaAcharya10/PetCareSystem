const mongoose = require("mongoose")
const serviceschema = new mongoose.Schema({
  service_name: { type: String },
  service_price: { type: Number },
  service_description: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref:"Category" },
  service_image: { type: String }
})

module.exports = mongoose.model("Service", serviceschema)