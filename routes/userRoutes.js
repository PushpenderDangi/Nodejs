const express = require('express')
const { registerUser, loginUser, currentUser } = require('../controllers/userController')

const router = express.Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

// this is for information of the current user i.e who is the current user
router.get('/current', currentUser)

module.exports = router