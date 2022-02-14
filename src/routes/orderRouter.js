import { Router } from "express";
import { placeOrder, getOrders } from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter.post("/order", placeOrder);
orderRouter.get("/user/orders", getOrders);
export default orderRouter;
