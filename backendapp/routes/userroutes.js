const usercontroller = require("../controllers/usercontroller")

const express = require("express")
const userrouter = express.Router()

// job seekeer routes
userrouter.post("/insertuser",usercontroller.insertuser)
userrouter.post("/checkuserlogin",usercontroller.checkuserlogin)


module.exports = userrouter