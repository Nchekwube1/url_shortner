import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../util/connection"
import shortid from "shortid";
import { Types } from "mongoose";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { db } = await dbConnect();
    console.log

    if (
      req.body !== "" &&
      req.body.full !== undefined &&
      req.body.full !== ""
    ) {
      let body = req.body.full;
      const short = shortid.generate();

      const entry = await db
        .collection("url")
        .insertOne({ _id: new Types.ObjectId(), short, full: body });
      const reponse = await db.collection("url").findOne({ url: body });

      res.statusCode = 201;
      return res.json({ short: reponse.short });
    }

    res.statusCode = 409;
    res.json({ error: "no_link_found", error_description: "No link found" });
  }
};