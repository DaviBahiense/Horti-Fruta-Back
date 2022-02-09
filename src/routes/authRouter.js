import { Router } from "express";
import { register } from "../controllers/AuthController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import registerSchema from "../schemas/registerSchema.js";

const authRouter = Router();
authRouter.post("/register", validateSchemaMiddleware(registerSchema), register);


export default authRouter;
