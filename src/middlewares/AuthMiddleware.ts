import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    
    if(!req.headers.authorization) {
        return res.status(401).send("not authenticated");
    }

    const secret_key: string = process.env.JWT_SECRET || "secret";

    const token: string = req.headers.authorization.split(" ")[1];
    
    try {
        const crendential: string | object = jwt.verify(token, secret_key);

        if(crendential){
            req.app.locals.credential = crendential;
           return next();
        }

        return res.send("token invalid");

    } catch (error) {

      return res.send(error)

    }
}