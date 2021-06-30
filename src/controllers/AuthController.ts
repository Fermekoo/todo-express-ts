import {Request, Response} from "express";

class AuthController 
{
    login(req: Request, res: Response): Response
    {
        return res.send();
    }

    register(req: Request, res: Response): Response
    {
        return res.send();
    }
}

export default new AuthController();