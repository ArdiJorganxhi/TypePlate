import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { loginValidator, registerValidator } from "../middlewares/validations/auth.validator";

export const authRouter = Router();

authRouter.post("/register", registerValidator, register)
authRouter.post("/login", loginValidator, login)