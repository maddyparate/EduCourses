const express = require('express')
const router = express.Router()
const LearnerController = require('../controllers/learner')

router.post('/register',LearnerController.create)
router.post('/login',LearnerController.login)

module.exports = router
