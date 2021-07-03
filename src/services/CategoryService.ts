import { Request } from "express";
import BaseService from "./BaseService";
const db = require("../db/models");

class CategoryService extends BaseService
{
    constructor(req: Request)
    {
        super(req);
    }

    getAll = async () => {
        const user_id = this.credential.id;

        const categories = await db.category.findAll({
            where: { user_id: user_id }
        });

        return categories;
    }

    create = async () => {

        const user_id = this.credential.id;

        try {

            const category = await db.category.create({
                user_id: user_id,
                name: this.body.categoryName,
                type: this.body.categoryType
            });

            return category;

        } catch (error) {

            return error;
        }
    }

    update = async () => {
        
        const id = this.params.id;

        try {
            const category = await db.category.update({
                name: this.body.categoryName,
                type: this.body.categoryType
            },
            {
                where: {
                    id: id,
                    user_id: this.credential.id
                }
            });

            return category;

        } catch (error) {

            return error;
            
        }
    }
} 

export default CategoryService