let {MONGODB_URI,MONGODB_DB} = process.env;
import { myGlobal } from "../lib/types";
import { MongoClient } from "mongodb";
declare const global: myGlobal;
if (!MONGODB_URI) {
  throw new Error(
    "please define a MONGO_URI connection string inside .env.local"
  );
}


let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}


export async function dbConnect () {
     const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGODB_URI).then(client => {
      return {
        client,
        db:client.db(MONGODB_DB)
      }
    
    })
  }

  cached.conn = await cached.promise
  return cached
}
