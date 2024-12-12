const express = require("express");
const router = express.Router();
const Product = require("../model/User")
const {signUp, logIn, getAdmin } = require("../controllers/adminControllers")

router.post("/Asignup", signUp)

router.post("/Alogin", logIn)

router.get("/Alogin", getAdmin)


module.exports = router;