const FormModel = require("../model/form")



const submit = async(req, res)=> {
  try {
    const data = req.body
    console.log(data)
    const form = new FormModel(data)
    const savedForm = await form.save(form)
    res.status(201).json(savedForm)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const check = async(req, res)=> {
  try {
    const data = req.body
    console.log(data)
    console.log(data.date)
    console.log(data.email)
    
    const User = await FormModel.findOne(data)
    
    if (User ) {
      res.json("a")
      console.log("a")
    } else {
      res.json("b")
      console.log("b")
    }
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const getData = async (req, res) => {
  try {
    const form = await FormModel.find({})
    res.status(200).json(form)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}







module.exports = {
  submit,
  check,
  getData
}