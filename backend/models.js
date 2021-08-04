const mongoose = require("mongoose")
const shortId = require("shortid")
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
        default: shortId.generate()
    }
})

module.exports = mongoose.model("urls", schema)