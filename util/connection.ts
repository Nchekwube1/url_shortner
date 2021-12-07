import mongoose from "mongoose";
let {MONGO_URI} = process.env;

if (!MONGO_URI) {
  throw new Error(
    "please define a MONGO_URI connection string inside .env.local"
  );
}


let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}


async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, { keepAlive: true }).then(client => {
      return client
    
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect