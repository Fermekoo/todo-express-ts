import { Request } from "express";
import BaseService from "./BaseService";
const db = require("../db/models");

class UserService extends BaseService
{
    constructor(req: Request)
    {
        super(req);
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
        const user = db.user.findByPk(this.credential.id);

        return user;
    }
}

export default UserService;