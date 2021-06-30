import {Request, Response} from "express";
import ControllerInterface from "./ControllerInterface";

let data: any[] = [
    {id: 1, name: "Dandi1"},
    {id: 2, name: "Dandi2"},
    {id: 3, name: "Dandi3"},
    {id: 4, name: "Dandi4"}
];

class UserController implements ControllerInterface
{
    index(req: Request, res: Response): Response
    {
       return res.send(data);

    }

    find(req: Request, res: Response): Response
    {
        const { user_id } = req.params;
          
        const user = data.find(({ id }) =>  id == user_id);

        return res.send(user);
    }

    create(req: Request, res: Response): Response
    {
        const { id, name } = req.body;
        data.push({ id, name });

        return res.send("success");    
    }

    update(req: Request, res: Response): Response
    {
        const { id } = req.params;
        const { name } = req.body;

        let user = data.find((item) => item.id == id);
        user.name = name;

        return res.send("success");
    }

    delete(req: Request, res: Response): Response
    {
        const { id } = req.params;

        let users = data.filter(item => item.id != id);

        return res.send(users);
    }
}

export default new UserController();