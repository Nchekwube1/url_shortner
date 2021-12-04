import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import shortId from "shortid";
import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const app: Application = express();
import schema from "./models";
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
let weburi = `mongodb+srv://Xisco:${MONGO_PASSWORD}@cluster0.a78ej.mongodb.net/urlsDb?retryWrites=true&w=majority`;
mongoose.connect(weburi, { keepAlive: true }, () => {
  console.log("connected to db successfully");
});
let db: Connection = mongoose.connection;

db.once("open", () => {
  console.log("db open");
});
db.on("error", () => {
  console.log("an error occured");
});

app.post("/urls", (req: Request, res: Response) => {
  let fullurl = req.body.full;
  const newUrl = new schema({
    _id: new mongoose.Types.ObjectId(),
    full: fullurl,
    short: shortId.generate(),
  });
  newUrl
    .save()
    .then(
      res.status(200).send({
        id: newUrl.short,
      })
    )
    .catch((err: any) => {
      res.status(500).json({ err: err });
    });
});
app.post("/urls/:id", async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    await schema.find({ short: id }).then((id: any) => {
      let fullUrl = id[0].full;
      res.status(200).send(fullUrl);
    });
  } catch (err: any) {
    res.status(500).json({ err: err });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port 5000");
});
