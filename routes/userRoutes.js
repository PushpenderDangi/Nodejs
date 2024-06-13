const express = require('express')

const router = express.Router()

router.post('/register', (req,resp) =>{
    resp.status(200).json({message: "User registerd successfully"})
})

router.post('/login', (req,resp) => {
    resp.status(200).json({message: "User login successfully"})
})

// this is for the status of the current user i.e who is the current user
router.post('/current', (req,resp) => {
    resp.json({message: "Current user information"})
})