import { Router } from "express";
import { getProduct } from "../controllers/homeController.js";

const homeRouter = Router();

homeRouter.get("/products", getProduct);

export default homeRouter;
