const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')
const auth = require('../middlewares/auth')

router.post('/signUp' , userController.signUp)
router.post('/login' , userController.login)