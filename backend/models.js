const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("url", schema)