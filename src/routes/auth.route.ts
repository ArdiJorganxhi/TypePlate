import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { registerValidator } from "../middlewares/validations/register.validator";

export const authRouter = Router();

authRouter.post("/register", registerValidator, register)