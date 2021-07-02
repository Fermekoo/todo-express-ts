import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";
import { noExtendLeft } from "sequelize/types/lib/operators";

const validate = [
    check("username").isString().withMessage("username tidak boleh kosong"),
    check("password").isLength({ min:6 }).withMessage("passsword minimal 6 karakter"),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }

        next();
    }
];

export default validate;