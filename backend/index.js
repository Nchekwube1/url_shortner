const express = require("express")
const cors = require("cors")
const app = express()
const schema = require("./models")
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 5000");
})