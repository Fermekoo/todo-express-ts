import { Request, Response } from "express";
import UserService from "../services/UserService";
const db = require("../db/models");
import Authentication from "../utils/Authentication";

class AuthController 
{
    
    login = async (req: Request, res: Response): Promise<Response> => {

        const service = new UserService(req);

        const user = await service.findBy('username', req.body.username);

        if(user === null) {
            return res.status(401).send("user tidak terdaftar");
        }

        const password_check = await Authentication.passwordCompare(req.body.password, user.password);

        if( password_check ){
            const token = Authentication.generateToken(user.id, user.username);
            return res.status(200).send({ accessToken: token });
        }

        return res.status(401).send("login gagal");
    }

    register = async (req: Request, res: Response): Promise<Response> => {
        
        const service = new UserService(req);
        const hash_password = await Authentication.passwordHash(req.body.password);

        req.body.password = hash_password;

        const register = await service.create();
        
        return res.send(register);
    }

    profile = async (req: Request, res: Response): Promise<Response> => {

        const service = new UserService(req);

        const user = await service.profile();
        
        return res.send(user);
    }
}

export default new AuthController();