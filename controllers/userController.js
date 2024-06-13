const asynchandler = require('express-async-handler')

const registerUser = asynchandler(async(req,resp) =>{
    resp.status(200).json({message: "User registerd successfully"})
})

const loginUser = asynchandler(async(req,resp) => {
    resp.status(200).json({message: "User login successfully"})
})

const currentUser = asynchandler(async(req,resp) => {
    resp.json({message: "Current user information"})
})

module.exports = { registerUser, loginUser, currentUser }