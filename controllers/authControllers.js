const UserModel = require("../model/User")
const bcrypt = require('bcrypt')


const signUp = async(req, res)=> {
  try {
    const data = req.body
    console.log(data)
    const existingUser = await UserModel.findOne({email:data.email});
    console.log(existingUser)
    if (existingUser) {
      return res.status(400).json({error: "Email already exists"})
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = {
      fullname: data.name,
      email: data.email,
      password: hashedPassword
    }
    const realNewUser = new UserModel(newUser)
    const savedUser = await realNewUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const logIn = async(req, res)=> {
  try{
    const {email, password} = req.body
    const User = await UserModel.findOne({email})
    if (User){
      const passwordMatch = await bcrypt.compare(password, User.password)
      if(passwordMatch){
        res.json("Success")
      }
      else {
        res.status(401).json("Incorrect Password")
      }
      
    }else{
      res.status(401).json("Email does not exist")
      return res.status(401)
    }
  }catch(error){
    res.status(500).json({error:error.message})
  }

}


module.exports = {
  signUp,
  logIn
}