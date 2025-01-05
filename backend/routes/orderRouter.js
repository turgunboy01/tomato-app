import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder } from "../controllers/orderController.js";

const orederRouter = express.Router();
orederRouter.post("/place", authMiddleware, placeOrder);

export default orederRouter;
