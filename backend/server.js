import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import "dotenv/config.js";
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// connectdb
connectDB();

// api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("API working");
});
app.listen(port, () => {
  console.log(`server started on https://localhost:${port}`);
});
