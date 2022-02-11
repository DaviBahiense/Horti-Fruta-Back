import { Router } from "express";
import { mountCart, getCart } from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.post("/carrinho", mountCart);
cartRouter.get("/carrinho", getCart);

export default cartRouter;