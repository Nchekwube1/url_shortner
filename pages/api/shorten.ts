import type { NextApiRequest, NextApiResponse } from "next";
import {dbConnect} from "../../util/connection"
import shortid from "shortid";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {db}= await dbConnect();
        if (req.body !== "" &&
      req.body.full !== undefined &&
      req.body.full !== ""
    ) {
      let body = req.body.full;
      const short = shortid.generate();
     await db.collection("urls").insertOne({ short, full: body });
      const response = await db.collection("urls").findOne({ full: body});
      return res.status(201).json({ id: response.short });
    }
else{
    res.statusCode = 409;
    res.json({ error: "no_link_found", error_description: "No link found" });
  }
}
};