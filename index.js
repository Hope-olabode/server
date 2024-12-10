const  express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const formRoute = require("./routes/formRoute")
const authRoute = require("./routes/authRoute")
const adminRoute = require("./routes/adminRoute")


dotenv.config();
const app = express()
app.use(express.json())

app.use(cors())

// routes

app.use("/auth", authRoute)
app.use("/form", formRoute)
app.use("/auth", adminRoute)

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("connected to mongoDB"))
  .catch(err => console.log("failed to conect to mongoDB", err))

app.listen(process.env.port, () => {
  console.log(`server is running on port ${process.env.PORT}`)
})

app.get("/giveme", async(req, res)=> {
  res.send('you will show in postman')
})

/* app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({})
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}) */

/* app.post('/auth/signup', async(req, res)=> {
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
      Firstname: data.name,
      Lastname: data.name2,
      email: data.email,
      password: hashedPassword
    }
    const realNewUser = new UserModel(newUser)
    const savedUser = await realNewUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
  
})


app.post('/auth/login', async(req, res)=> {
  try{
    const {email, password} = req.body
    const User = await UserModel.findOne({email})
    if (User){
      const passwordMatch = await bcrypt.compare(password, User.password)
      if(passwordMatch){
        res.json("Success")
      }
      else {
        res.status(401).json("Password does not match!")
      }
      
    }else{
      res.status(401).json("No Records found")
    }
  }catch(error){
    res.status(500).json({error:error.message})
  }
}) */