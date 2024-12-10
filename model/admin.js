const  mongoose  = require("mongoose");

const AdminSchema = new mongoose.Schema({
  fullname:String,
  email:String,
  password:String
})

const AdminModel = mongoose.model("admins", AdminSchema)

module.exports = AdminModel;
