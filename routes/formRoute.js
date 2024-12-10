const express = require("express");
const router = express.Router();
const Form = require("../model/form")
const {submit, check, getData } = require("../controllers/formControllers")

router.post("/data", submit)

router.post("/check", check)

router.get("/data", getData)


module.exports = router;