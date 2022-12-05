import express from "express";
import cors from "cors";
import "dotenv/config";

import { addVehicle, getAllVehicles, updateLogs } from "./vehicles.js";

const app = express();
app.use(express.json({limit:"5mb"}));
app.use(cors());

app.post("/", addVehicle)
app.get("/", getAllVehicles)
app.patch("/:vehicle_id", updateLogs)

app.listen(process.env.PORT, () => console.log(`API running on port ${process.env.PORT}`))
