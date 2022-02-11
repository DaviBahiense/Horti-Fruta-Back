import { Router } from "express";
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.post("/order", placeOrder);

export default orderRouter;
