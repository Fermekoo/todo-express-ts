import {Request, Response} from "express";
import CategoryService from "../services/CategoryService";
import ControllerInterface from "./ControllerInterface";

class CategoryController implements ControllerInterface
{
    index = async(req: Request, res: Response): Promise<Response> => {
        const service = new CategoryService(req);

        const categories = await service.getAll();
        
        return res.send(categories);
    }

    create = async(req: Request, res: Response): Promise<Response> => {

        const service = new CategoryService(req);

        const create_category = await service.create();

        return res.send(create_category);
    }

    find = async(req: Request, res: Response): Promise<Response> => {
        return res.send();
    }

    update = async(req: Request, res: Response): Promise<Response> => {

        const service = new CategoryService(req);

        const update_category = await service.update();

        return res.send(update_category);
    }

    delete = async(req: Request, res: Response): Promise<Response> => {
        return res.send();
    }

}

export default new CategoryController();