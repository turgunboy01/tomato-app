import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";
import userRouter from "./routes/userRouter.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRouter.js";
import orederRouter from "./routes/orderRouter.js";
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
app.use("/api/cart", cartRouter);
app.use("/api/order", orederRouter);

app.listen(port, () => {
  console.log(`server started on https://localhost:${port}`);
});
