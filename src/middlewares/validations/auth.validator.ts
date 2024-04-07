import { ValidationError, body, validationResult } from "express-validator";
import { GenericResponse } from "../../response/generic.response";
import { NextFunction, Request, Response } from "express";

export const registerValidator = [
    body('name').notEmpty().isString(),
    body('surname').notEmpty().isString(),
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isString(),
    
    (req: Request, res: Response<GenericResponse<ValidationError[]>>, next: NextFunction) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json(new GenericResponse(false, "Bad Request", errors.array()))
        }
        next();
    }
];

export const loginValidator = [
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isString(),

    (req: Request, res: Response<GenericResponse<ValidationError[]>>, next: NextFunction) => {
        const errors = validationResult(req);
        if(!errors.isEmpty) {
            return res.status(400).json(new GenericResponse(false, "Bad Request", errors.array()));
        }
        next();
    }
]