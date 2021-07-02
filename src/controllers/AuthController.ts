import { Request, Response } from "express";
const db = require("../db/models");
import Authentication from "../utils/Authentication";

class AuthController 
{
    
    login = async (req: Request, res: Response): Promise<Response> => {

        const { username, password } = req.body;

        const user = await db.user.findOne({ where: { username: username } });

        if(user === null) {
            return res.status(401).send("user tidak terdaftar");
        }

        const password_check = await Authentication.passwordCompare(password, user.password);

        if( password_check ){
            const token = Authentication.generateToken(user.id, user.username);
            return res.status(200).send({ accessToken: token });
        }

        return res.status(401).send("login gagal");
    }

    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password   } = req.body

        const hash_password = await Authentication.passwordHash(password);

        const register = await  db.user.create({ 
            username: username,
            password: hash_password
         });
        
        return res.send(register);
    }

    profile = async (req: Request, res: Response): Promise<Response> => {

        const auth = req.app.locals.credential
        const user = await db.user.findByPk(auth.id);
        return res.send(user);
    }
}

export default new AuthController();