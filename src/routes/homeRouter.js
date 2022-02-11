import { Router } from "express";
import { getProduct, getUser } from "../controllers/homeController.js";

const homeRouter = Router();

homeRouter.get("/products", getProduct);
homeRouter.get("/user", getUser)

export default homeRouter;
