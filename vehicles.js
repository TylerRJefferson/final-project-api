import { vehicles } from "./mongoConnect.js";
import { ObjectId } from "mongodb";

export const addVehicle = async (req, res) => {
  console.log(req.body)
  let newVehicle = await vehicles.insertOne(req.body)
  res.send(newVehicle)
};

export const getAllVehicles =  async (req, res) => {
  const allVehicles = await vehicles.find().toArray()
  res.send(allVehicles)
};

export const updateLogs = async (req, res) => {
  const {vehicle_id} = req.params
  
  await vehicles
    .findOneAndUpdate({ _id: new ObjectId(vehicle_id)}, { $push: {logs: req.body}})
    .catch(err => {
      res.status(500).send(err)
      return
    })
  res.send(req.body)
  //sending back body of updated vehicle
};

export const deleteVehicle = async (req, res) => {
  const {vehicle_id} = req.params

  await vehicles
    .findOneAndDelete({ _id: new ObjectId(vehicle_id) })
    .catch(err => {
      res.status(500).send(err)
      return
    })
    getAllVehicles(req,res)
  // res.status(202).send("Vehicle Deleted")
}