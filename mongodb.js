// import { MongoClient } from "mongodb";
const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://umairyahya1999:Umair99@cluster0.wpfe6g6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const database = "Products";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}
module.exports = dbConnect;
