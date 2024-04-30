import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const validateFields = (req: Request, res: Response, next: () => void) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json({
            ok: false,
            erros: erros.mapped()
        })
    }

    next();
}