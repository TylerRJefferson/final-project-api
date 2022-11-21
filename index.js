import express from "express";
import cors from "cors";
import "dotenv/config";

import { addVehicle, getAllVehicles } from "./vehicles.js";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => console.log(`API running on port ${process.env.PORT}`))

app.post("/", addVehicle)
app.get("/", getAllVehicles)