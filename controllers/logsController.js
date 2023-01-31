const Log = require('../models/Log')
const asyncHandler = require('express-async-handler')


const getAllLogs = asyncHandler(async (req, res) => {

    const logs = await Log.find().lean()

    if (!logs?.length) {
        return res.status(400).json({ message: 'No logs found' })
    }

    res.json(logs)
})



module.exports = {
    getAllLogs
}