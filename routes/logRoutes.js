const express = require('express')
const router = express.Router()
const logsController = require('../controllers/logsController')

router.route('/')
    .get(logsController.getAllLogs)

module.exports = router