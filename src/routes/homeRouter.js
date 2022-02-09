import { Router } from "express";
import { getProduct } from "../Controllers/homeController.js";

const homeRouter = Router();

homeRouter.get("/products", getProduct);

export default homeRouter;
