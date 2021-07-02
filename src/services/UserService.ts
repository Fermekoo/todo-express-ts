import {Request} from "express";
const db = require("../db/models");

class UserService
{
    credetial: {
        id: number
    };

    body: Request['body'];
    params: Request['params'];

    constructor(req: Request)
    {
        this.credetial = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    }

    findBy = async (field: string, value: any) => {

        const user = await db.user.findOne({ where: {
            [field]: value
        } });

        return user;
    }

    create = async () => {

        const create_user = await db.user.create({
            username: this.body.username,
            password: this.body.password
        });

        return create_user;
    }

    profile = async () => {
        const user = db.user.findByPk(this.credetial.id);

        return user;
    }
}

export default UserService;