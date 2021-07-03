import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validate = [
    check("categoryName").isString().withMessage("Nama kategori tidak boleh kosong"),
    check("categoryType").isString().withMessage("Tipe kategori tidak boleh kosong").isIn(['Expense','Income']).withMessage("Pilihan tipe kategori tidak valid"),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }

        next();
    }
];

export default validate;