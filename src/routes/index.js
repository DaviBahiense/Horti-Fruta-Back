import { Router } from "express";
import authRouter from "./authRouter.js";
import homeRouter from "./homeRouter.js";

const router = Router();

router.use(authRouter);
router.use(homeRouter);

export default router;
