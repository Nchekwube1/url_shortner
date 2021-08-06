const express = require("express")
const cors = require("cors")
const app = express()
const shortId = require("shortid")
const mongoose = require("mongoose")
const schema = require("./models")
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect("mongodb://localhost/urlshortner", { useUnifiedTopology: true, useNewUrlParser: true }, () => { console.log("connected to db successfully") })
let db = mongoose.connection

db.once("open", () => { console.log("db open") })
db.on("error", () => {
    console.log("an error occured")
})

app.post("/urls", (req, res) => {
    let fullurl = req.body.full
    const newUrl = new schema({
        _id: new mongoose.Types.ObjectId(),
        full: fullurl,
        short: shortId.generate()
    })
    newUrl.save()
        .then(
            res.status(200).send({
                id: newUrl.short
            })
        )
        .catch(err => { res.status(500).json({ err: err }) })
})
app.post("/urls/:id", async (req, res) => {
    let id = req.params.id
    try {
        await schema.find({ short: id })
            .then(id => {
                let fullUrl = id[0].full
                res.status(200).send(fullUrl)
            }
            )
    }
    catch (err) {

    }

})




app.listen(process.env.PORT || 5000, () => {
    console.log("listening on port 5000");
})