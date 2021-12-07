import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../util/connection"
import Url from "../../models/Url";
import shortid from "shortid";
import { Types } from "mongoose";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    await dbConnect();
    console.log(req.body.full)
    res.status(201).json({"message":"yeah"})
    
    // if (req.body !== "" &&
    //   req.body.full !== undefined &&
    //   req.body.full !== ""
    // ) {
    //   let body = req.body.full;
    //   const short = shortid.generate();
    //   const entry = await Url.create({ _id: new Types.ObjectId(), short, full: body });
    //   const reponse = await Url.findOne({ url: body });
   
    //   return res.status(201).json({ id: reponse.short });
    // }
// else{
//     res.statusCode = 409;
//     res.json({ error: "no_link_found", error_description: "No link found" });
//   }
}
};