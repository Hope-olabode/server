const express = require("express");
const router = express.Router();
const Product = require("../model/User")
const {signUp, logIn } = require("../controllers/adminControllers")

router.post("/Asignup", signUp)

router.post("/Alogin", logIn)


module.exports = router;