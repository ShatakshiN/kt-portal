const express = require('express')

const router = express.Router()

const authenticate = require('../middlewares/auth')

const Team = require('../models/team');
const Employee = require('../models/employee');

const teamController = require('../controllers/team');

router.get('/teamInfo', authenticate, teamController.teamInfo);

router.get('/clientTeamInfo',authenticate, teamController.clientTeamInfo)



module.exports = router;