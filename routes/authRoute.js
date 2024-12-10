const express = require("express");
const router = express.Router();
const Product = require("../model/User")
const {signUp, logIn } = require("../controllers/authControllers")

router.post("/signup", signUp)

router.post("/login", logIn)


module.exports = router;