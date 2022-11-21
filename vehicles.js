import { vehicles } from "./mongoConnect.js";

export const addVehicle = async (req, res) => {
  console.log(req.body)
  await vehicles.insertOne(req.body)
  res.send("New Vehicle Added")
};

export const getAllVehicles =  async (req, res) => {
  const allVehicles = await vehicles.find().toArray()
  res.send(allVehicles)
};