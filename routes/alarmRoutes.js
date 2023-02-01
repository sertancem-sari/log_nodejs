const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/alarm(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'alarm.html'))
})

module.exports = router