import { Router } from "express";
import { getProducts } from "../controllers/ProductsCrontolles.js";

const productsRouter = Router();

productsRouter.get("/products", getProducts);

export default productsRouter;
