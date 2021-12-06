import mongoose,{Schema,Model} from "mongoose"
const schema:Schema<any, Model<any, any, any, any>, any> = new Schema({
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
const Url:Model<any, {}, {}, {}> = mongoose.model("url", schema)

module.exports = mongoose.models.url || Url