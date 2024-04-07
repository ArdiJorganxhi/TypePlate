import { Request, Response } from "express";

import { Register } from "../types/requests/user.register.type";
import { GenericResponse } from "../response/generic.response";
import { Login } from "../types/requests/user.login.type";
import { loginService, registerService } from "../services/auth.service";



export const register = async(req: Request, res: Response<GenericResponse<null>>): Promise<Response<GenericResponse<null>>> => {
    let request: Register = req.body
    await registerService(request);
    return res.status(201).json(new GenericResponse(true, "Registration is successful!", null))
}

export const login = async(req: Request, res: Response<GenericResponse<String>>): Promise<Response<GenericResponse<String>>> => {
    let request: Login = req.body;
    const token = await loginService(request);
    return res.status(200).send(new GenericResponse(true, "Login is successful!", token));
}
