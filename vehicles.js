import { vehicles } from "./mongoConnect.js";

export const addVehicle = async (req, res) => {
  console.log(req.body)
  let newVehicle = await vehicles.insertOne(req.body)
  res.send(newVehicle)
};

export const getAllVehicles =  async (req, res) => {
  const allVehicles = await vehicles.find().toArray()
  res.send(allVehicles)
};