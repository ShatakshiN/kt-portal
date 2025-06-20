const express = require('express')

const router = express.Router()

const authenticate = require('../middlewares/auth')

const User = require('../models/user')

const userController = require('../controllers/user')

router.post('/signup' , userController.signup)


router.post('/login' , userController.login)


module.exports = router;