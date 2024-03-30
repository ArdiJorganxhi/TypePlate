import { Router } from "express";
import { register } from "../controllers/auth.controller";

export const authRouter = Router();

authRouter.post("/register", register)