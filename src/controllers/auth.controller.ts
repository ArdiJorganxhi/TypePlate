import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { Register } from "../types/requests/user.register.type";


const authService = new AuthService()

export const register = async(req: Request, res: Response): Promise<Response> => {
    let request: Register = req.body
    await authService.register(request);
    return res.status(201).send({message: "Registration is successful!"})
}
