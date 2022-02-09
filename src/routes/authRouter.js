import { Router } from "express";
import { login, register } from "../controllers/AuthController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import registerSchema from "../schemas/registerSchema.js";
import loginSchema from "../schemas/loginSchema.js";

const authRouter = Router();
authRouter.post("/register", validateSchemaMiddleware(registerSchema), register);

authRouter.post("/login", validateSchemaMiddleware(loginSchema), login);

export default authRouter;
