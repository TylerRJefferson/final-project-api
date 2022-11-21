import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGO_URI)
const db = client.db("Final_Project")
export const vehicles = db.collection("vehicles")

client.connect()
console.log("Connected to MongoDB")