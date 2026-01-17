
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import dataRoutes from "./routes/data.js";

dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

app.use("/api/data", dataRoutes);
app.use("/_sdk", express.static(path.join(__dirname, "public/_sdk")));
app.use(express.static(path.join(__dirname, "../../frontend")));

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});

app.listen(process.env.PORT, ()=>{
  console.log("Server running at http://localhost:" + process.env.PORT);
});
