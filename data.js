
import express from "express";
import User from "../models/User.js";
import Appointment from "../models/Appointment.js";


const router = express.Router();

router.get("/", async (req,res)=>{
  const users = await User.find();
  const appts = await Appointment.find();
  res.json([...users, ...appts]);
});

router.post("/", async (req,res)=>{
  const data = req.body;
  if(data.type === "user"){
    const u = await User.create(data);
    return res.json(u);
  }
  if(data.type === "appointment"){
    const a = await Appointment.create(data);
    return res.json(a);
  }
  res.status(400).json({error:"Unknown type"});
});

export default router;
