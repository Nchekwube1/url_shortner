const express = require("express")
const app = express()
const schema = require("./models")
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 5000");
})