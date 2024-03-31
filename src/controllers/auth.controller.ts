import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { Register } from "../types/requests/user.register.type";
import { GenericResponse } from "../response/generic.response";


const authService = new AuthService()

export const register = async(req: Request, res: Response<GenericResponse<null>>): Promise<Response<GenericResponse<null>>> => {
    let request: Register = req.body
    await authService.register(request);
    return res.json(new GenericResponse(true, "Registration is successful!", null))
}
