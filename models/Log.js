const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  log: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Logs", logsSchema);