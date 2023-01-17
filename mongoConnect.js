import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGO_URI)
const db = client.db("Final_Project")
export const vehicles = db.collection("vehicles")
//connect to vehicles collection

client.connect()
console.log("Connected to MongoDB")