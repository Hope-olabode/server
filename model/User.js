const  mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname:String,
  userName:String,
  password:String,
  role:String
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;
